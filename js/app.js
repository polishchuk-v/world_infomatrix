

let lang      = localStorage.getItem('travelsos_lang') || 'en';
let country   = 'great britain';
let category  = 'border';
let curPostId = null;

function t(key) { return (T[lang] && T[lang][key]) || T.en[key] || key; }
function setLang(l) {
  lang = l;
  localStorage.setItem('travelsos_lang', l);
  const langSelect = document.getElementById('lang-select');
  if (langSelect) langSelect.value = l;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = t(el.getAttribute('data-i18n'));
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = val;
    else el.innerHTML = val;
  });
  
  document.documentElement.dir = (l === 'ar') ? 'rtl' : 'ltr';
  
  document.documentElement.lang = l;
}

function changeLanguage(l) {
  setLang(l);
  refreshCurrentPageTranslations();
}

function getCategoryI18nKeys(cat) {
  return {
    border: ['cat_border', 'cat_border_d'],
    documents: ['cat_docs', 'cat_docs_d'],
    medical: ['cat_medical', 'cat_medical_d'],
    scam: ['cat_scam', 'cat_scam_d'],
    car: ['cat_car', 'cat_car_d'],
    carrental: ['cat_carrental', 'cat_carrental_d'],
  }[cat] || ['cat_border', 'cat_border_d'];
}

function refreshCurrentPageTranslations() {
  const p = currentPage();
  if (p === 'category') initCategoryPage(category);
  if (p === 'chat') initChatPageFromParams?.();
}

function getAuthUser() {
  let user = window.currentUser || null;
  if (!user && typeof DB !== 'undefined' && DB.getSession) {
    user = DB.getSession();
    if (user) {
      window.currentUser = user;
      if (typeof setCurrentUser === 'function') setCurrentUser(user);
      if (typeof updateAuthUI === 'function') updateAuthUI();
    }
  }
  return user;
}

function getFlagMap() {
  return {
    ukraine: '🇺🇦',
    poland: '🇵🇱',
    romania: '🇷🇴',
    moldova: '🇲🇩',
    slovakia: '🇸🇰',
    hungary: '🇭🇺',
    germany: '🇩🇪',
    czechia: '🇨🇿',
    austria: '🇦🇹',
    italy: '🇮🇹',
    france: '🇫🇷',
    spain: '🇪🇸',
    netherlands: '🇳🇱',
    belgium: '🇧🇪',
    uk: '🇬🇧',
    usa: '🇺🇸',
    canada: '🇨🇦',
    other: '🌍'
  };
}

function normalizeCountryCode(val = '') {
  const map = {
    Ukraine: 'ukraine',
    Poland: 'poland',
    Romania: 'romania',
    Moldova: 'moldova',
    Slovakia: 'slovakia',
    Hungary: 'hungary',
    Germany: 'germany',
    Czechia: 'czechia',
    Austria: 'austria',
    Italy: 'italy',
    France: 'france',
    Spain: 'spain',
    Netherlands: 'netherlands',
    Belgium: 'belgium',
    'United Kingdom': 'uk',
    UK: 'uk',
    'United States': 'usa',
    USA: 'usa',
    Canada: 'canada',
    Other: 'other'
  };

  return map[val] || String(val).trim().toLowerCase();
}

function getCountryFlag(val) {
  const flags = getFlagMap();
  return flags[normalizeCountryCode(val)] || '🌍';
}

function getCountryName(val = '') {
  const names = {
    ukraine: 'Ukraine',
    poland: 'Poland',
    romania: 'Romania',
    moldova: 'Moldova',
    slovakia: 'Slovakia',
    hungary: 'Hungary',
    germany: 'Germany',
    czechia: 'Czechia',
    austria: 'Austria',
    italy: 'Italy',
    france: 'France',
    spain: 'Spain',
    netherlands: 'Netherlands',
    belgium: 'Belgium',
    uk: 'United Kingdom',
    usa: 'United States',
    canada: 'Canada',
    other: 'Other'
  };

  return names[normalizeCountryCode(val)] || val || 'Other';
}

function countryOptionsHtml(selected = '') {
  const selectedCode = normalizeCountryCode(selected);

  const countries = [
    { code: 'ukraine', name: 'Ukraine', flag: '🇺🇦' },
    { code: 'poland', name: 'Poland', flag: '🇵🇱' },
    { code: 'romania', name: 'Romania', flag: '🇷🇴' },
    { code: 'moldova', name: 'Moldova', flag: '🇲🇩' },
    { code: 'slovakia', name: 'Slovakia', flag: '🇸🇰' },
    { code: 'hungary', name: 'Hungary', flag: '🇭🇺' },
    { code: 'germany', name: 'Germany', flag: '🇩🇪' },
    { code: 'czechia', name: 'Czechia', flag: '🇨🇿' },
    { code: 'austria', name: 'Austria', flag: '🇦🇹' },
    { code: 'italy', name: 'Italy', flag: '🇮🇹' },
    { code: 'france', name: 'France', flag: '🇫🇷' },
    { code: 'spain', name: 'Spain', flag: '🇪🇸' },
    { code: 'netherlands', name: 'Netherlands', flag: '🇳🇱' },
    { code: 'belgium', name: 'Belgium', flag: '🇧🇪' },
    { code: 'uk', name: 'United Kingdom', flag: '🇬🇧' },
    { code: 'usa', name: 'United States', flag: '🇺🇸' },
    { code: 'canada', name: 'Canada', flag: '🇨🇦' },
    { code: 'other', name: 'Other', flag: '🌍' }
  ];

  return countries.map(c => `
    <option value="${c.code}" ${selectedCode === c.code ? 'selected' : ''}>
      ${c.flag} ${c.name}
    </option>
  `).join('');
}

function resolveCountryKey(val) {
  const aliases = {
    'Great Britain': 'United Kingdom',
    'Turkey': 'Turkey',
  };
  return aliases[val] || val;
}

function updateCountry(val) {
  country = val;
  const key = resolveCountryKey(val);

  const hc = document.getElementById('hero-country');
  if (hc) hc.value = val;
  const hf = document.getElementById('hero-flag');
  if (hf) hf.textContent = getCountryFlag(val);

  if (typeof EMERGENCY !== 'undefined' && typeof countryDB !== 'undefined') {
    const em = EMERGENCY[key] || { fire: '112', police: '112', ambulance: '112', general: '112' };
    const db = countryDB[key] || null;

    const setEl = (id, text) => { const el = document.getElementById(id); if (el) el.textContent = text; };
    const setHref = (id, num) => { const el = document.getElementById(id); if (el) el.href = 'tel:' + num; };

    setEl('em-fire-num', em.fire);      setHref('em-fire-link', em.fire);
    setEl('em-police-num', em.police);  setHref('em-police-link', em.police);
    setEl('em-ambulance-num', em.ambulance); setHref('em-ambulance-link', em.ambulance);
    setEl('em-general-num', em.general); setHref('em-general-link', em.general);

    setEl('cip-num-fire', em.fire);      setHref('cip-em-fire', em.fire);
    setEl('cip-num-police', em.police);  setHref('cip-em-police', em.police);
    setEl('cip-num-ambulance', em.ambulance); setHref('cip-em-ambulance', em.ambulance);
    setEl('cip-num-general', em.general); setHref('cip-em-general', em.general);

    const flag = getCountryFlag(val);
    setEl('cip-flag', flag);
    setEl('cip-title', val);

    if (db) {
      setEl('cip-supermarkets', db.supermarkets || '—');
      setEl('cip-pharmacies', db.pharmacies || '—');
      setEl('cip-hospitals', db.hospitals || '—');
      setEl('cip-volunteers', db.volunteers || '—');
      setEl('cip-transport', db.transport || '—');
      setEl('cip-hostels', db.hostels || '—');
      const panel = document.getElementById('country-info-panel');
      if (panel) panel.style.display = '';
    } else {
      const panel = document.getElementById('country-info-panel');
      if (panel) panel.style.display = 'none';
    }
  }

  if (currentPage() === 'category' && document.getElementById('page-category')) {
    document.getElementById('cat-sub').textContent = catData[category].sub + ' for ' + val;
    renderCategoryTabs(category, val);
  }
}

function getParam(name, fallback='') {
  return new URLSearchParams(window.location.search).get(name) || fallback;
}
function currentPage() {
  return document.body?.dataset?.page || 'home';
}
function setActiveNav() {
  document.querySelectorAll('.nav-link').forEach(b => b.classList.remove('active'));
  const p = currentPage();
  if (p === 'home') document.getElementById('nav-home-btn')?.classList.add('active');
}
function navTo(url) { window.location.href = url; }
function showPage(id) {
  const target = document.getElementById(id);
  if (!target) return;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  target.classList.add('active');
  window.scrollTo(0, 0);
}
function goHome() { navTo('index.html'); }
function goBack() {
  const p = currentPage();
  if (p === 'chat') navTo(`category.html?cat=${encodeURIComponent(category)}&country=${encodeURIComponent(country)}`);
  else if (p === 'post') navTo('community.html');
  else goHome();
}
function openCategory(cat) {
  category = cat;
  navTo(`category.html?cat=${encodeURIComponent(cat)}&country=${encodeURIComponent(country)}`);
}
async function initCategoryPage(cat) {
  category = cat || 'border';
  const d = catData[category] || catData.border;
  const [titleKey, subKey] = getCategoryI18nKeys(category);
  const title = t(titleKey) || d.title;
  const sub = t(subKey) || d.sub;
  document.getElementById('cat-crumb').textContent = title;
  document.getElementById('cat-title').textContent = title;
  document.getElementById('cat-sub').textContent = sub + ' for ' + country;
  renderCategoryTabs(category, country);
}
async function openForum() { navTo('community.html'); }
async function initForumPage() {
  const box = document.getElementById('forum-posts');
  if (!box) return;
  box.innerHTML = '<div style="text-align:center;padding:40px;color:var(--muted)">Loading...</div>';
  const posts = await DB.getPosts();
  const user = getAuthUser();
  if (getParam('myposts') && user) renderPosts(posts.filter(p => p.authorId === user.id));
  else renderPosts(posts);
}
function openHousing() { navTo('housing.html'); }
async function loadPost(id) {
  const p = await DB.getPost(id);
  if (!p) return;
  curPostId = id;
  document.getElementById('pd-cat').textContent      = p.cat;
  document.getElementById('pd-title').textContent    = p.title;
  document.getElementById('pd-author').textContent   = 'by ' + p.authorName;
  document.getElementById('pd-time').textContent     = DB._relTime(p.createdAt);
  document.getElementById('pd-country').textContent  = getCountryFlag(p.country) + ' ' + getCountryName(p.country);
  document.getElementById('pd-body').textContent     = p.body;
  const replies = p.replies || [];
  document.getElementById('replies-lbl').textContent = replies.length + ' replies';
  document.getElementById('post-replies').innerHTML  = replies.map(r => `
    <div class="reply-card">
      <div class="reply-av ${r.vol||r.isVolunteer?'vol':''}">${(r.authorName||'?').slice(0,2).toUpperCase()}</div>
      <div class="reply-body">
        <div class="reply-author-row">
          <span class="reply-author">${escHtml(r.authorName)}</span>
          ${r.vol||r.isVolunteer?'<span class="vol-badge"><span class="material-symbols-rounded gf-icon">verified</span> Volunteer</span>':''}
        </div>
        <div class="reply-text">${escHtml(r.text)}</div>
      </div>
    </div>`).join('');
}
async function initPostPage() {
  const id = getParam('id');
  if (id) await loadPost(id);
}

function switchTab(btn, id) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(id).classList.add('active');
  if (id === 'tab-queue') renderQueues();
}
function toggleAcc(head) {
  const body = head.nextElementSibling;
  const chev = head.querySelector('.info-card-chev');
  body.classList.toggle('open');
  chev.classList.toggle('open', body.classList.contains('open'));
}

function renderPosts(arr) {
  const el = document.getElementById('forum-posts');
  if (!arr || !arr.length) { el.innerHTML = '<div style="text-align:center;padding:40px;color:var(--muted);font-size:14px">No posts yet. Be the first!</div>'; return; }
  el.innerHTML = arr.map(p => `
    <div class="post-card" onclick="openPost('${p.id||p._id}')">
      <div class="post-meta">
        <span class="post-cat-badge" style="background:${catColors[p.cat]||'var(--bg)'};color:${catTextColors[p.cat]||'var(--muted)'}">${p.cat}</span>
        <span class="post-country">${getCountryFlag(p.country)} ${getCountryName(p.country)}</span>
        <span class="post-time">${DB._relTime(p.createdAt)}</span>
      </div>
      <div class="post-title">${escHtml(p.title)}</div>
      <div class="post-preview">${escHtml(p.body)}</div>
      <div class="post-footer">
        <span class="post-author">by ${escHtml(p.authorName)}</span>
        <span class="post-replies"><span class="material-symbols-rounded gf-icon">chat</span> ${(p.replies||[]).length} replies</span>
      </div>
    </div>`).join('');
}

async function filterForum(el, cat) {
  document.querySelectorAll('.f-pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  const all = await DB.getPosts();
  renderPosts(cat === 'all' ? all : all.filter(p => p.cat === cat));
}

async function openPost(id) {
  navTo(`post.html?id=${encodeURIComponent(id)}`);
}

function openNewPost() {
  const user = getAuthUser();
  if (!user) { openAuth(); return; }
  if (user.status === 'pending') { showToast('Your account is pending review.'); return; }
  const modal = document.createElement('div');
  modal.id = 'new-post-modal';
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:200;display:flex;align-items:center;justify-content:center;';
  modal.innerHTML = `
    <div style="background:var(--surface);border-radius:16px;padding:26px;width:100%;max-width:480px;margin:16px;position:relative">
      <button onclick="document.getElementById('new-post-modal').remove()" style="position:absolute;top:14px;right:14px;background:none;border:none;font-size:18px;cursor:pointer;color:var(--muted)"><span class="material-symbols-rounded">close</span></button>
      <h3 style="font-family:'Playfair Display',serif;font-size:22px;margin-bottom:16px">New post</h3>
      <div style="display:flex;flex-direction:column;gap:12px">
        <div><div style="font-size:12px;color:var(--muted);margin-bottom:4px">Category</div>
          <select id="np-cat" style="width:100%;font-family:'Inter',sans-serif;font-size:14px;padding:9px 11px;border:1px solid var(--border);border-radius:8px;background:var(--bg);color:var(--text);outline:none">
            <option value="shelter">Shelter</option><option value="border">Border</option>
            <option value="medical">Medical</option><option value="scam">Scam</option>
            <option value="documents">Documents</option><option value="car">Car rules</option>
          </select></div>
        <div><div style="font-size:12px;color:var(--muted);margin-bottom:4px">Country</div>
          <select id="np-country" style="width:100%;font-family:'Inter',sans-serif;font-size:14px;padding:9px 11px;border:1px solid var(--border);border-radius:8px;background:var(--bg);color:var(--text);outline:none">
            ${countryOptionsHtml(country)}
          </select></div>
        <div><div style="font-size:12px;color:var(--muted);margin-bottom:4px">Title</div>
          <input id="np-title" placeholder="Short description..." style="width:100%;font-family:'Inter',sans-serif;font-size:14px;padding:9px 11px;border:1px solid var(--border);border-radius:8px;background:var(--bg);color:var(--text);outline:none"></div>
        <div><div style="font-size:12px;color:var(--muted);margin-bottom:4px">Details</div>
          <textarea id="np-body" rows="4" placeholder="Describe your situation..." style="width:100%;font-family:'Inter',sans-serif;font-size:14px;padding:9px 11px;border:1px solid var(--border);border-radius:8px;background:var(--bg);color:var(--text);outline:none;resize:none"></textarea></div>
        <div id="np-error" style="font-size:12px;color:#D85A30;display:none"></div>
        <button class="btn btn-teal" onclick="submitNewPost()" style="width:100%">Post</button>
      </div>
    </div>`;
  modal.addEventListener('click', e => { if (e.target===modal) modal.remove(); });
  document.body.appendChild(modal);
}

async function submitNewPost() {
  const title = document.getElementById('np-title').value.trim();
  const body  = document.getElementById('np-body').value.trim();
  const cat   = document.getElementById('np-cat').value;
  const ctry  = document.getElementById('np-country').value;
  const errEl = document.getElementById('np-error');
  if (!title||!body) { errEl.textContent='Please fill in title and details.'; errEl.style.display='block'; return; }
  const btn = document.querySelector('#new-post-modal .btn-teal');
  if (btn) { btn.textContent='Posting...'; btn.disabled=true; }
  const user = getAuthUser();
  if (!user) { openAuth(); return; }
  await DB.createPost({ title, body, cat, country: ctry, authorId: user.id, authorName: user.name });
  document.getElementById('new-post-modal').remove();
  showToast('Post published!');
  navTo('community.html');
}

async function submitReply() {
  const user = getAuthUser();
  if (!user) { openAuth(); return; }
  const inp  = document.getElementById('reply-input');
  const text = inp.value.trim();
  if (!text) return;
  inp.value = '';
  await DB.addReply(curPostId, {
    authorId: user.id, authorName: user.name,
    isVolunteer: user.role==='volunteer' && user.status==='active', text,
  });
  await openPost(curPostId);
  showToast('Reply posted!');
}

async function renderQueues() {
  const container = document.getElementById('queue-list');
  if (!container) return;
  container.innerHTML = '<div style="text-align:center;padding:20px;color:var(--muted);font-size:13px">Loading...</div>';
  const latest = await DB.getLatestQueue();
  const crossings = ['Nădlac II (RO–HU)','Borș II (RO–HU)','Sculeni (RO–MD)','Giurgiu (RO–BG)'];
  container.innerHTML = crossings.map(name => {
    const r     = latest[name];
    const mins  = r ? r.waitMin : null;
    const level = !mins ? 'unknown' : mins < 20 ? 'low' : mins < 60 ? 'mid' : 'high';
    const label = !mins ? '— no data' : `~${mins} min`;
    const ago   = r ? DB._relTime(r.createdAt) : 'no reports';
    return `<div class="queue-row">
      <div class="q-dot q-dot-${level}"></div>
      <div style="flex:1"><div class="queue-name">${name}</div><div class="queue-sub">Cars · ${ago}${r?.note?' · '+escHtml(r.note):''}</div></div>
      <div class="q-badge q-${level}">${label}</div>
    </div>`;
  }).join('');
}

async function submitQueueReport() {
  const crossing = document.getElementById('queue-crossing').value;
  const waitRaw  = document.getElementById('queue-wait').value.trim();
  const note     = document.getElementById('queue-note').value.trim();
  const errEl    = document.getElementById('queue-error');
  if (!waitRaw||isNaN(parseInt(waitRaw))) { errEl.textContent='Please enter wait time in minutes.'; errEl.style.display='block'; return; }
  const user = getAuthUser();
  await DB.addQueueReport({ crossing, waitMin: parseInt(waitRaw), note, authorId: user ? user.id : 'anon' });
  document.getElementById('queue-wait').value = '';
  document.getElementById('queue-note').value = '';
  errEl.style.display = 'none';
  renderQueues();
  showToast('Queue time reported! Thanks.');
}

function switchAuthTab(btn, id) {
  document.querySelectorAll('.auth-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('auth-login').style.display    = id==='auth-login'    ? 'block' : 'none';
  document.getElementById('auth-register').style.display = id==='auth-register' ? 'block' : 'none';
  clearAuthErrors();
}
function setRole(r) {
  document.getElementById('role-user').classList.toggle('active', r==='user');
  document.getElementById('role-vol').classList.toggle('active', r==='volunteer');
  document.getElementById('vol-fields').style.display = r==='volunteer' ? 'flex' : 'none';
}

const _s = document.createElement('style');
_s.textContent=`.menu-item{display:block;width:100%;text-align:left;padding:8px 12px;font-size:13px;font-family:'Inter',sans-serif;background:none;border:none;cursor:pointer;border-radius:8px;color:var(--text)}.menu-item:hover{background:var(--bg)}`;
document.head.appendChild(_s);

function escHtml(s) { return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

document.addEventListener('DOMContentLoaded', async () => {
  await DB.init();
  setLang(lang);
  authInit();
  setActiveNav();

  const authOverlay = document.getElementById('auth-overlay');
  if (authOverlay) {
    authOverlay.addEventListener('click', e => {
      if (e.target === authOverlay) closeAuth();
    });
  }

  const qpCountry = getParam('country');
  if (qpCountry) country = qpCountry;
  const heroCountry = document.getElementById('hero-country');
  if (heroCountry) {
    heroCountry.value = country;
  }
  updateCountry(country);

  const p = currentPage();
  if (p === 'category') await initCategoryPage(getParam('cat', 'border'));
  if (p === 'forum')    await initForumPage();
  if (p === 'post')     await initPostPage();
  if (p === 'chat')     initChatPageFromParams?.();
});