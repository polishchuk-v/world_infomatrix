const ADMIN_LOGIN = 'admin';
const ADMIN_PASS  = 'admin2026';

const AUTH_KEY = 'travelsos_admin_logged';

const FB_PROJECT = 'travelsosproject';
const FB_KEY = '-----';

const FS = `https://firestore.googleapis.com/v1/projects/${FB_PROJECT}/databases/(default)/documents`;

function toFS(obj){
  const fields={};

  for(const[k,v]of Object.entries(obj)){

    if(v===null||v===undefined){
      fields[k]={nullValue:null};
    }

    else if(typeof v==='boolean'){
      fields[k]={booleanValue:v};
    }

    else if(typeof v==='number'){
      fields[k]={integerValue:String(v)};
    }

    else if(typeof v==='string'){
      fields[k]={stringValue:v};
    }

    else if(Array.isArray(v)){
      fields[k]={
        arrayValue:{
          values:v.map(i=>
            typeof i==='object'
              ? {mapValue:{fields:toFS(i)}}
              : {stringValue:String(i)}
          )
        }
      };
    }

    else if(typeof v==='object'){
      fields[k]={mapValue:{fields:toFS(v)}};
    }

  }

  return fields;
}

function fromFS(fields){

  if(!fields) return {};

  const obj={};

  for(const[k,v]of Object.entries(fields)){

    if(v.stringValue!==undefined){
      obj[k]=v.stringValue;
    }

    else if(v.integerValue!==undefined){
      obj[k]=Number(v.integerValue);
    }

    else if(v.booleanValue!==undefined){
      obj[k]=v.booleanValue;
    }

    else if(v.nullValue!==undefined){
      obj[k]=null;
    }

    else if(v.arrayValue){
      obj[k]=(v.arrayValue.values||[]).map(i=>
        i.mapValue
          ? fromFS(i.mapValue.fields)
          : (i.stringValue||i.integerValue||null)
      );
    }

    else if(v.mapValue){
      obj[k]=fromFS(v.mapValue.fields);
    }

  }

  return obj;
}

async function fsList(col){

  const res = await fetch(`${FS}/${col}?key=${FB_KEY}`);
  const d = await res.json();

  if(!d.documents) return [];

  return d.documents.map(doc=>({
    _id:doc.name.split('/').pop(),
    ...fromFS(doc.fields)
  }));

}

async function fsSet(col,id,obj){

  await fetch(`${FS}/${col}/${id}?key=${FB_KEY}`,{
    method:'PATCH',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({fields:toFS(obj)})
  });

}

async function fsDel(col,id){

  await fetch(`${FS}/${col}/${id}?key=${FB_KEY}`,{
    method:'DELETE'
  });

}

function doLogin(){

  const l=document.getElementById('adm-login').value.trim();
  const p=document.getElementById('adm-pass').value;

  if(l===ADMIN_LOGIN && p===ADMIN_PASS){

    localStorage.setItem(AUTH_KEY,'true');

    document.getElementById('login-screen').style.display='none';
    document.getElementById('admin-panel').style.display='flex';
    document.getElementById('login-err').style.display='none';

    loadAll();

  }else{

    document.getElementById('login-err').style.display='block';
    document.getElementById('adm-pass').value='';

  }

}

function doLogout(){
  openLogoutModal();
}

function openLogoutModal(){
  document.getElementById('logout-modal').style.display='flex';
}

function closeLogoutModal(){
  document.getElementById('logout-modal').style.display='none';
}

function handleOverlayClick(e){
  if(e.target===document.getElementById('logout-modal')){
    closeLogoutModal();
  }
}

function confirmLogout(){

  closeLogoutModal();

  localStorage.removeItem(AUTH_KEY);

  document.getElementById('login-screen').style.display='flex';
  document.getElementById('admin-panel').style.display='none';

  toast('Successfully signed out.');

}

document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    closeLogoutModal();
  }
});

window.addEventListener('load',()=>{

  const isLogged=localStorage.getItem(AUTH_KEY);

  if(isLogged==='true'){

    document.getElementById('login-screen').style.display='none';
    document.getElementById('admin-panel').style.display='flex';

    loadAll();

  }

});

async function loadAll(){

  const [users,posts,queues]=await Promise.all([
    fsList('users'),
    fsList('posts'),
    fsList('queues')
  ]);

  document.getElementById('s-users').textContent=users.length;

  document.getElementById('s-pend').textContent=
    users.filter(u=>u.status==='pending').length;

  renderVolunteers(users.filter(u=>u.role==='volunteer'));
  renderUsers(users);
  renderPosts(posts);

  window._data={users,posts,queues};

}

function renderVolunteers(vols){

  const el=document.getElementById('t-vol');

  if(!vols.length){
    el.innerHTML=`<div class="empty">No volunteer applications yet.</div>`;
    return;
  }

  el.innerHTML=`
    <div class="section-header">
      <h3>Volunteer Applications</h3>
      <p>Manage trusted helpers and pending volunteer requests.</p>
    </div>

    <div class="card">

      ${vols.map(u=>`

        <div class="card-row">

          <div class="av ${u.status==='pending'?'pend':'vol'}">
            ${(u.name||'??').slice(0,2).toUpperCase()}
          </div>

          <div class="info">
            <div class="info-name">${esc(u.name)}</div>
            <div class="info-sub">${esc(u.email)} · ${esc(u.phone||'No phone')}</div>
          </div>

          <span class="badge ${u.status==='pending'?'b-pending':'b-active'}">
            ${u.status}
          </span>

          <div class="btns">

            ${u.status==='pending'
              ? `
                <button class="abtn ok" onclick="approveVol('${u._id}','${esc(u.name)}')">
                  <span class="material-symbols-rounded">check</span>
                  Approve
                </button>

                <button class="abtn del" onclick="rejectVol('${u._id}','${esc(u.name)}')">
                  <span class="material-symbols-rounded">close</span>
                  Reject
                </button>
              `
              : `
                <button class="abtn del" onclick="revokeVol('${u._id}','${esc(u.name)}')">
                  <span class="material-symbols-rounded">remove_circle</span>
                  Revoke
                </button>
              `
            }

          </div>

        </div>

      `).join('')}

    </div>
  `;
}

async function approveVol(id,name){

  const u=window._data.users.find(u=>u._id===id);
  if(!u) return;

  await fsSet('users',id,{...u,status:'active'});

  toast(`${name} has been approved.`);
  loadAll();

}

async function rejectVol(id,name){

  if(!confirm(`Reject and delete ${name}?`)) return;

  await fsDel('users',id);

  toast('Volunteer removed.');
  loadAll();

}

async function revokeVol(id,name){

  if(!confirm(`Revoke volunteer status for ${name}?`)) return;

  const u=window._data.users.find(u=>u._id===id);
  if(!u) return;

  await fsSet('users',id,{
    ...u,
    role:'user',
    status:'active'
  });

  toast('Volunteer status revoked.');
  loadAll();

}

function renderUsers(users){

  const el=document.getElementById('t-users');

  if(!users.length){
    el.innerHTML=`<div class="empty">No users found.</div>`;
    return;
  }

  el.innerHTML=`
    <div class="section-header">
      <h3>User Accounts</h3>
      <p>View and manage all registered TravelSOS members.</p>
    </div>

    <div class="card">

      ${users.map(u=>`

        <div class="card-row">

          <div class="av">${(u.name||'??').slice(0,2).toUpperCase()}</div>

          <div class="info">
            <div class="info-name">${esc(u.name)}</div>
            <div class="info-sub">${esc(u.email)}</div>
          </div>

          <span class="badge ${u.role==='volunteer'?'b-vol':'b-user'}">
            ${u.role}
          </span>

          ${u.status==='pending'
            ? `<span class="badge b-pending">pending</span>`
            : ''
          }

          <div class="btns">
            <button class="abtn del" onclick="deleteUser('${u._id}','${esc(u.name)}')">
              <span class="material-symbols-rounded">delete</span>
              Delete
            </button>
          </div>

        </div>

      `).join('')}

    </div>
  `;
}

async function deleteUser(id,name){

  if(!confirm(`Delete ${name} permanently?`)) return;

  await fsDel('users',id);

  toast('User deleted.');
  loadAll();

}

function renderPosts(posts){

  const el=document.getElementById('t-posts');

  if(!posts.length){
    el.innerHTML=`<div class="empty">No posts available.</div>`;
    return;
  }

  el.innerHTML=`
    <div class="section-header">
      <h3>Community Posts</h3>
      <p>Moderate support requests and community discussions.</p>
    </div>

    <div class="card">

      ${posts.map(p=>`

        <div class="card-row">

          <div class="info">
            <div class="info-name">${esc(p.title)}</div>
            <div class="info-sub">
              by ${esc(p.authorName)} · ${esc(p.cat)} · ${esc(p.country)} · ${(p.replies?.length||0)} replies
            </div>
          </div>

          <div class="btns">
            <button class="abtn del" onclick="deletePost('${p._id}')">
              <span class="material-symbols-rounded">delete</span>
              Delete
            </button>
          </div>

        </div>

      `).join('')}

    </div>
  `;
}

async function deletePost(id){

  if(!confirm('Delete this post?')) return;

  await fsDel('posts',id);

  toast('Post deleted.');
  loadAll();

}

async function exportData(){

  const blob=new Blob(
    [JSON.stringify(window._data,null,2)],
    {type:'application/json'}
  );

  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download='travelsos_export.json';
  a.click();

}

async function resetData(){

  if(!confirm('Delete all posts and queue reports?')) return;

  const posts=await fsList('posts');
  const queues=await fsList('queues');

  for(const p of posts){
    await fsDel('posts',p._id);
  }

  for(const q of queues){
    await fsDel('queues',q._id);
  }

  toast('Posts and queues reset.');
  loadAll();

}

function switchTab(btn,id){

  document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));

  btn.classList.add('active');
  document.getElementById(id).classList.add('active');

}

function toast(msg){

  const t=document.getElementById('toast');
  t.textContent=msg;
  t.style.display='block';

  setTimeout(()=>t.style.display='none',3000);
}

function esc(s){
  return String(s||'')
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;');
}

document.getElementById('adm-login').focus();