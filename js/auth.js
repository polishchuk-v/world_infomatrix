

const EJS_PUBLIC_KEY  = '----';
const EJS_SERVICE_ID  = 'service_vo6uq8y';
const EJS_TEMPLATE_ID = 'template_xfyl2ys';

let emailVerified  = false;
let emailCodeSent  = null; 

function _initEmailJS() {
  if (window.emailjs) emailjs.init({ publicKey: EJS_PUBLIC_KEY });
}

async function sendEmailCode() {
  _initEmailJS();
  const email  = document.getElementById('reg-email').value.trim();
  const btn    = document.getElementById('send-code-btn');

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showEmailStatus('error', 'Please enter a valid email address.');
    return;
  }

  
  const code = String(Math.floor(100000 + Math.random() * 900000));
  emailCodeSent = code;
  emailVerified = false;

  btn.textContent = '...';
  btn.disabled    = true;
  showEmailStatus('loading', 'Sending code...');

  try {
    await emailjs.send(EJS_SERVICE_ID, EJS_TEMPLATE_ID, {
      to_email: email,
      code:     code,
      to_name:  (document.getElementById('reg-first')?.value.trim() || document.getElementById('reg-name')?.value.trim() || 'User'),
    });

    showEmailStatus('success', `Code sent to ${email}`);
    document.getElementById('code-input-wrap').style.display = 'flex';
    document.getElementById('reg-email-code').focus();

    
    let sec = 60;
    btn.textContent = `Resend (${sec}s)`;
    const timer = setInterval(() => {
      sec--;
      btn.textContent = `Resend (${sec}s)`;
      if (sec <= 0) {
        clearInterval(timer);
        btn.textContent = 'Resend';
        btn.disabled    = false;
      }
    }, 1000);

  } catch (e) {
    console.error('EmailJS error:', e);
    showEmailStatus('error', 'Failed to send email. Check your EmailJS template settings.');
    btn.textContent = 'Send code';
    btn.disabled    = false;
  }
}

function checkEmailCode() {
  const input = document.getElementById('reg-email-code').value.trim();
  const btn   = document.getElementById('check-code-btn');

  if (!emailCodeSent) {
    showEmailStatus('error', 'Please request a code first.');
    return;
  }
  if (input === emailCodeSent) {
    emailVerified = true;
    showEmailStatus('success', 'Email verified!');
    
    document.getElementById('code-input-wrap').style.display = 'none';
    document.getElementById('resend-wrap') && (document.getElementById('resend-wrap').style.display = 'none');
    
    document.getElementById('reg-email').readOnly = true;
    document.getElementById('send-code-btn').innerHTML = '<span class="material-symbols-rounded gf-icon">verified</span> Verified';
    document.getElementById('send-code-btn').style.background = '#0F6E56';
    document.getElementById('send-code-btn').disabled = true;
  } else {
    showEmailStatus('error', 'Wrong code. Try again.');
    document.getElementById('reg-email-code').value = '';
    document.getElementById('reg-email-code').focus();
  }
}

function showEmailStatus(type, msg) {
  const el = document.getElementById('email-status');
  if (!el) return;
  const styles = {
    success: 'background:#E1F5EE;color:#0F6E56',
    error:   'background:#FAECE7;color:#993C1D',
    loading: 'background:var(--bg);color:var(--muted)',
  };
  el.style.cssText = `display:block;font-size:12px;padding:6px 10px;border-radius:7px;margin-top:-4px;${styles[type]||styles.loading}`;
  el.textContent = msg;
}

function clearEmailStatus() {
  emailVerified = false;
  emailCodeSent = null;
  const el  = document.getElementById('email-status');
  const btn = document.getElementById('send-code-btn');
  const wrap = document.getElementById('code-input-wrap');
  if (el)   { el.style.display = 'none'; }
  if (btn)  { btn.textContent = 'Send code'; btn.disabled = false; btn.style.background = 'var(--teal)'; }
  if (wrap) { wrap.style.display = 'none'; }
  const emailInput = document.getElementById('reg-email');
  if (emailInput) emailInput.readOnly = false;
}

const NUMVERIFY_KEY = '-----'; 
let phoneVerified = false;

async function verifyPhone() {
  const phone  = document.getElementById('reg-phone').value.trim();
  const status = document.getElementById('phone-status');
  const btn    = document.getElementById('verify-phone-btn');

  if (!phone) {
    showPhoneStatus('error', 'Please enter a phone number.');
    return;
  }

  btn.textContent = '...';
  btn.disabled = true;
  showPhoneStatus('loading', 'Checking number...');

  try {
    
    const clean = phone.replace(/\s+/g, '');
    const url   = `https://apilayer.net/api/validate?access_key=${NUMVERIFY_KEY}&number=${encodeURIComponent(clean)}&format=1`;
    const res   = await fetch(url);
    const data  = await res.json();

    if (data.error) {
      throw new Error(data.error.info || 'Numverify error');
    }

    if (data.valid) {
      phoneVerified = true;
      showPhoneStatus('success',
        `Valid number · ${data.country_name} · ${data.line_type || 'mobile'}`
      );
      btn.innerHTML = '<span class="material-symbols-rounded">check</span>';
      btn.style.background = 'var(--teal)';
    } else {
      phoneVerified = false;
      showPhoneStatus('error', 'Invalid phone number. Please check and try again.');
      btn.textContent = 'Verify';
      btn.disabled = false;
    }

  } catch (e) {
    
    console.warn('Numverify error:', e.message);
    phoneVerified = true; 
    showPhoneStatus('warn', 'Could not verify number. Proceeding anyway.');
    btn.textContent = '~';
    btn.disabled = false;
  }
}

function showPhoneStatus(type, msg) {
  const el = document.getElementById('phone-status');
  if (!el) return;
  const styles = {
    success: 'background:#E1F5EE;color:#0F6E56',
    error:   'background:#FAECE7;color:#993C1D',
    warn:    'background:#FAEEDA;color:#854F0B',
    loading: 'background:var(--bg);color:var(--muted)',
  };
  el.style.cssText = `display:block;font-size:12px;padding:6px 10px;border-radius:7px;margin-top:-4px;${styles[type]||styles.loading}`;
  el.textContent = msg;
}

function clearPhoneStatus() {
  phoneVerified = false;
  const el  = document.getElementById('phone-status');
  const btn = document.getElementById('verify-phone-btn');
  if (el)  { el.style.display = 'none'; el.textContent = ''; }
  if (btn) { btn.textContent = 'Verify'; btn.disabled = false; btn.style.background = 'var(--teal)'; }
}

let currentUser = null;
window.currentUser = null;

function setCurrentUser(user) {
  currentUser = user || null;
  window.currentUser = currentUser;
}
window.setCurrentUser = setCurrentUser;

function authInit() {
  setCurrentUser(DB.getSession());
  updateAuthUI();
}

function updateAuthUI() {
  const btn = document.getElementById('auth-btn') || document.querySelector('.nav-auth');
  if (!btn) return;

  if (currentUser) {
    btn.removeAttribute('data-i18n');
    const safeName = currentUser.name || currentUser.email || 'User';
    const initials = safeName.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2) || 'U';
    const firstName = safeName.split(' ')[0] || 'User';
    const color    = currentUser.role === 'volunteer' ? 'var(--teal)' : 'var(--purple)';
    btn.innerHTML  = `<span style="background:${color};color:#fff;border-radius:99px;padding:2px 9px;font-size:12px;font-weight:500;">${initials}</span> ${firstName}`;
    btn.onclick    = openProfileMenu;
  } else {
    btn.removeAttribute('data-i18n');
    btn.innerHTML = '<span data-i18n="sign_in">Sign in</span>';
    btn.onclick   = openAuth;
    if (typeof setLang === 'function') setLang(lang);
  }
}
window.updateAuthUI = updateAuthUI;

function openAuth(tab) {
  document.getElementById('auth-overlay').classList.add('open');
  clearAuthErrors();
  if (tab === 'register') {
    switchAuthTab(
      document.querySelectorAll('.auth-tab')[1],
      'auth-register'
    );
  } else {
    switchAuthTab(
      document.querySelectorAll('.auth-tab')[0],
      'auth-login'
    );
  }
}

function closeAuth() {
  document.getElementById('auth-overlay').classList.remove('open');
  clearAuthErrors();
}

async function doLogin() {
  const email    = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;
  if (!email || !password) { showAuthError('login-error', 'Please fill in all fields.'); return; }
  const result = await DB.verifyLogin(email, password);
  if (result.error) { showAuthError('login-error', result.error); return; }
  setCurrentUser(result.user);
  DB.startSession(currentUser);
  closeAuth();
  updateAuthUI();
  showToast(`Welcome back, ${currentUser.name.split(' ')[0]}!`);
  window.dispatchEvent(new CustomEvent('travelsos:auth-changed', { detail: currentUser }));
}

async function doRegister() {
  const firstName = document.getElementById('reg-first').value.trim();
  const lastName  = document.getElementById('reg-last').value.trim();
  const name      = [firstName, lastName].filter(Boolean).join(' ');
  const email     = document.getElementById('reg-email').value.trim();
  const password  = document.getElementById('reg-password').value;
  const confirm   = document.getElementById('reg-confirm').value;
  const role      = document.getElementById('role-user').classList.contains('active') ? 'user' : 'volunteer';
  const phone     = document.getElementById('reg-phone')?.value.trim() || '';

  if (!firstName || !lastName || !email || !password) {
    showAuthError('reg-error', 'Please fill in all fields.');
    return;
  }
  if (!emailVerified) {
    showAuthError('reg-error', 'Please verify your email address first.');
    document.getElementById('reg-email').focus();
    return;
  }
  if (!phone) {
    showAuthError('reg-error', 'Please enter and verify your phone number.');
    return;
  }
  if (!phoneVerified) {
    showAuthError('reg-error', 'Please verify your phone number first.');
    document.getElementById('reg-phone')?.focus();
    return;
  }
  if (password.length < 6) {
    showAuthError('reg-error', 'Password must be at least 6 characters.');
    return;
  }
  if (password !== confirm) {
    showAuthError('reg-error', 'Passwords do not match.');
    return;
  }

  
  let passportInfo = null;
  if (role === 'volunteer') {
    const passportId  = document.getElementById('reg-passport-id').value.trim();
    const nationality = document.getElementById('reg-nationality').value.trim();
    const dob         = document.getElementById('reg-dob').value;
    const pob         = document.getElementById('reg-pob').value.trim();
    if (!passportId || !nationality || !dob || !pob) {
      showAuthError('reg-error', 'Please fill in all passport details.');
      return;
    }
    passportInfo = { passportId, nationality, dateOfBirth: dob, placeOfBirth: pob };
  }

  const result = await DB.createUser({ name, firstName, lastName, email, password, role, phone, passportInfo });
  if (result.error) {
    showAuthError('reg-error', result.error);
    return;
  }
  if (role === 'volunteer') {
    showToast('Account created! Your volunteer status is pending review. ');
  } else {
    showToast(`Welcome to TravelSOS, ${name.split(' ')[0]}!`);
  }
}

function doLogout() {
  openUserLogoutModal();
}

function ensureUserLogoutModal() {
  let modal = document.getElementById('user-logout-modal');
  if (modal) return modal;

  modal = document.createElement('div');
  modal.id = 'user-logout-modal';
  modal.className = 'tsos-logout-modal';
  modal.onclick = function(e) {
    if (e.target === modal) closeUserLogoutModal();
  };
  modal.innerHTML = `
    <div class="tsos-logout-box" role="dialog" aria-modal="true" aria-labelledby="user-logout-title">
      <div class="tsos-logout-icon">
        <span class="material-symbols-rounded">logout</span>
      </div>
      <div class="tsos-logout-title" id="user-logout-title">Are you sure you want to sign out?</div>
      <div class="tsos-logout-sub">You will leave your account, but all posts and saved information will stay safe.</div>
      <div class="tsos-logout-actions">
        <button class="tsos-logout-cancel" type="button" onclick="closeUserLogoutModal()">Cancel</button>
        <button class="tsos-logout-confirm" type="button" onclick="confirmUserLogout()">Sign out</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  return modal;
}

function openUserLogoutModal() {
  closeProfileMenu();
  ensureUserLogoutModal().classList.add('open');
}

function closeUserLogoutModal() {
  const modal = document.getElementById('user-logout-modal');
  if (modal) modal.classList.remove('open');
}

function confirmUserLogout() {
  closeUserLogoutModal();
  DB.endSession();
  setCurrentUser(null);
  updateAuthUI();
  showToast('Signed out successfully.');
  window.dispatchEvent(new CustomEvent('travelsos:auth-changed', { detail: null }));
  goHome();
}

function openProfileMenu() {
  if (document.getElementById('profile-menu')) {
    closeProfileMenu(); return;
  }

  const user   = currentUser;
  const menu   = document.createElement('div');
  menu.id      = 'profile-menu';
  menu.style.cssText = `
    position:fixed; top:56px; right:16px; z-index:300;
    background:var(--surface); border:1px solid var(--border);
    border-radius:12px; padding:6px; min-width:200px;
    box-shadow:0 4px 16px rgba(0,0,0,.1);
    animation: fadeIn .15s ease;
  `;

  const statusBadge = user.status === 'pending'
    ? `<span style="font-size:11px;background:var(--amber-light);color:var(--amber);padding:2px 7px;border-radius:99px;"> Pending review</span>`
    : user.role === 'volunteer'
      ? `<span style="font-size:11px;background:var(--teal-light);color:var(--teal);padding:2px 7px;border-radius:99px;"><span class="material-symbols-rounded gf-icon">verified</span> Volunteer</span>`
      : `<span style="font-size:11px;background:var(--blue-light);color:var(--blue);padding:2px 7px;border-radius:99px;">Traveller</span>`;

  menu.innerHTML = `
    <div style="padding:10px 12px 8px;border-bottom:1px solid var(--border);margin-bottom:4px">
      <div style="font-size:14px;font-weight:500;margin-bottom:4px">${user.name}</div>
      <div style="font-size:12px;color:var(--muted);margin-bottom:6px">${user.email}</div>
      ${statusBadge}
    </div>
    <button class="menu-item" onclick="openMyPosts()"><span class="material-symbols-rounded gf-icon">edit_note</span> My posts</button>
    <button class="menu-item" onclick="doLogout()" style="color:#D85A30"><span class="material-symbols-rounded gf-icon">logout</span> Sign out</button>
  `;

  document.body.appendChild(menu);

  
  setTimeout(() => {
    document.addEventListener('click', closeProfileOnOutside);
  }, 50);
}

function closeProfileOnOutside(e) {
  const menu = document.getElementById('profile-menu');
  if (menu && !menu.contains(e.target)) {
    closeProfileMenu();
  }
}

function closeProfileMenu() {
  const menu = document.getElementById('profile-menu');
  if (menu) menu.remove();
  document.removeEventListener('click', closeProfileOnOutside);
}

function openMyPosts() {
  closeProfileMenu();
  window.location.href = 'community.html?myposts=1';
}

function openDebugPanel() {
  closeProfileMenu();
  if (document.getElementById('debug-panel')) return;

  const panel = document.createElement('div');
  panel.id = 'debug-panel';
  panel.style.cssText = 'position:fixed;inset:0;z-index:400;background:rgba(0,0,0,.6);display:flex;align-items:center;justify-content:center;';
  panel.innerHTML = `
    <div style="background:var(--surface);border-radius:14px;width:90%;max-width:640px;max-height:88vh;display:flex;flex-direction:column;position:relative;overflow:hidden">
      <div style="padding:18px 20px 0;flex-shrink:0">
        <button onclick="document.getElementById('debug-panel').remove()" style="position:absolute;top:14px;right:14px;background:none;border:none;font-size:18px;cursor:pointer;color:var(--muted)"><span class="material-symbols-rounded">close</span></button>
        <h3 style="font-family:'Playfair Display',serif;font-size:20px;margin-bottom:14px"><span class="material-symbols-rounded gf-icon">database</span> Admin Panel</h3>
        <div style="display:flex;gap:0;border-bottom:1px solid var(--border);margin-bottom:0">
          <button class="adm-tab active" onclick="admTab(this,'adm-volunteers')" style="padding:8px 16px;font-size:13px;font-family:'Inter',sans-serif;background:none;border:none;border-bottom:2px solid var(--accent);cursor:pointer;font-weight:500;color:var(--text);margin-bottom:-1px"><span class="material-symbols-rounded gf-icon">groups</span> Volunteers</button>
          <button class="adm-tab" onclick="admTab(this,'adm-users')" style="padding:8px 16px;font-size:13px;font-family:'Inter',sans-serif;background:none;border:none;border-bottom:2px solid transparent;cursor:pointer;color:var(--muted);margin-bottom:-1px"><span class="material-symbols-rounded gf-icon">luggage</span> All users</button>
          <button class="adm-tab" onclick="admTab(this,'adm-json')" style="padding:8px 16px;font-size:13px;font-family:'Inter',sans-serif;background:none;border:none;border-bottom:2px solid transparent;cursor:pointer;color:var(--muted);margin-bottom:-1px">{ } JSON</button>
        </div>
      </div>
      <div style="overflow-y:auto;padding:16px 20px;flex:1">

        <!-- Volunteers tab -->
        <div id="adm-volunteers">
          <div id="vol-list"></div>
        </div>

        <!-- All users tab -->
        <div id="adm-users" style="display:none">
          <div id="users-list"></div>
        </div>

        <!-- JSON tab -->
        <div id="adm-json" style="display:none">
          <pre id="adm-json-pre" style="font-size:11px;background:var(--bg);padding:14px;border-radius:8px;overflow-x:auto;white-space:pre-wrap;border:1px solid var(--border)"></pre>
          <div style="display:flex;gap:8px;margin-top:12px">
            <button class="btn btn-outline" onclick="navigator.clipboard.writeText(JSON.stringify(DB.exportAll(),null,2));showToast('Copied!')"><span class="material-symbols-rounded gf-icon">checklist</span> Copy JSON</button>
            <button class="btn btn-outline" style="color:#D85A30" onclick="if(confirm('Reset ALL data? This cannot be undone.')){localStorage.clear();location.reload();}"><span class="material-symbols-rounded gf-icon">delete</span> Reset DB</button>
          </div>
        </div>

      </div>
    </div>
  `;
  document.body.appendChild(panel);
  panel.addEventListener('click', e => { if (e.target === panel) panel.remove(); });
  admRenderVolunteers();
}

function admTab(btn, tabId) {
  document.querySelectorAll('.adm-tab').forEach(b => {
    b.style.borderBottomColor = 'transparent';
    b.style.color = 'var(--muted)';
    b.style.fontWeight = '400';
    b.classList.remove('active');
  });
  btn.style.borderBottomColor = 'var(--accent)';
  btn.style.color = 'var(--text)';
  btn.style.fontWeight = '500';
  btn.classList.add('active');
  ['adm-volunteers','adm-users','adm-json'].forEach(id => {
    document.getElementById(id).style.display = id === tabId ? 'block' : 'none';
  });
  if (tabId === 'adm-volunteers') admRenderVolunteers();
  if (tabId === 'adm-users')      admRenderUsers();
  if (tabId === 'adm-json') {
    document.getElementById('adm-json-pre').textContent = JSON.stringify(DB.exportAll(), null, 2);
  }
}

function admRenderVolunteers() {
  const container = document.getElementById('vol-list');
  if (!container) return;
  const volunteers = DB.getUsers().filter(u => u.role === 'volunteer');
  if (volunteers.length === 0) {
    container.innerHTML = `<div style="text-align:center;padding:32px;color:var(--muted);font-size:14px">No volunteer applications yet.</div>`;
    return;
  }
  container.innerHTML = volunteers.map(u => {
    const isPending = u.status === 'pending';
    const statusBadge = isPending
      ? `<span style="font-size:11px;background:var(--amber-light);color:var(--amber);padding:2px 8px;border-radius:99px;"> Pending</span>`
      : `<span style="font-size:11px;background:var(--teal-light);color:var(--teal);padding:2px 8px;border-radius:99px;"><span class="material-symbols-rounded gf-icon">verified</span> Approved</span>`;
    return `
      <div style="display:flex;align-items:center;gap:14px;padding:13px 0;border-bottom:1px solid var(--border)">
        <div style="width:38px;height:38px;border-radius:99px;background:${isPending?'var(--amber-light)':'var(--teal-light)'};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:500;color:${isPending?'var(--amber)':'var(--teal)'};flex-shrink:0">
          ${u.name.slice(0,2).toUpperCase()}
        </div>
        <div style="flex:1;min-width:0">
          <div style="font-size:14px;font-weight:500;margin-bottom:2px">${escHtml(u.name)}</div>
          <div style="font-size:12px;color:var(--muted)">${escHtml(u.email)}</div>
          <div style="margin-top:5px">${statusBadge}</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:6px;flex-shrink:0">
          ${isPending ? `
            <button onclick="admApproveVolunteer('${u.id}')" style="font-size:12px;padding:6px 14px;border-radius:8px;border:none;background:var(--teal);color:#fff;cursor:pointer;font-family:'Inter',sans-serif;"><span class="material-symbols-rounded gf-icon">check</span> Approve</button>
            <button onclick="admRejectVolunteer('${u.id}')"  style="font-size:12px;padding:6px 14px;border-radius:8px;border:1px solid var(--border);background:none;color:#D85A30;cursor:pointer;font-family:'Inter',sans-serif;"><span class="material-symbols-rounded gf-icon">close</span> Reject</button>
          ` : `
            <button onclick="admRevokeVolunteer('${u.id}')" style="font-size:12px;padding:6px 14px;border-radius:8px;border:1px solid var(--border);background:none;color:var(--muted);cursor:pointer;font-family:'Inter',sans-serif;">Revoke</button>
          `}
        </div>
      </div>`;
  }).join('');
}

function admRenderUsers() {
  const container = document.getElementById('users-list');
  if (!container) return;
  const users = DB.getUsers();
  if (users.length === 0) {
    container.innerHTML = `<div style="text-align:center;padding:32px;color:var(--muted);font-size:14px">No users registered yet.</div>`;
    return;
  }
  container.innerHTML = users.map(u => `
    <div style="display:flex;align-items:center;gap:12px;padding:11px 0;border-bottom:1px solid var(--border)">
      <div style="width:34px;height:34px;border-radius:99px;background:var(--bg);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:500;color:var(--muted);flex-shrink:0">
        ${u.name.slice(0,2).toUpperCase()}
      </div>
      <div style="flex:1">
        <div style="font-size:13px;font-weight:500">${escHtml(u.name)}</div>
        <div style="font-size:12px;color:var(--muted)">${escHtml(u.email)} · ${u.role}</div>
      </div>
      <span style="font-size:11px;padding:2px 8px;border-radius:99px;background:${u.status==='active'?'var(--teal-light)':'var(--amber-light)'};color:${u.status==='active'?'var(--teal)':'var(--amber)'}">
        ${u.status}
      </span>
      <button onclick="admDeleteUser('${u.id}')" style="font-size:12px;padding:5px 10px;border-radius:7px;border:1px solid var(--border);background:none;color:#D85A30;cursor:pointer;font-family:'Inter',sans-serif;">Delete</button>
    </div>`).join('');
}

function admApproveVolunteer(id) {
  const users = DB.getUsers();
  const u = users.find(u => u.id === id);
  if (!u) return;
  u.status = 'active';
  DB.saveUsers(users);
  
  if (currentUser && currentUser.id === id) { currentUser.status = 'active'; setCurrentUser(currentUser); updateAuthUI(); }
  showToast(`${u.name} approved as volunteer!`);
  admRenderVolunteers();
}

function admRejectVolunteer(id) {
  if (!confirm('Reject this volunteer application? The user account will be deleted.')) return;
  admDeleteUser(id);
  admRenderVolunteers();
}

function admRevokeVolunteer(id) {
  if (!confirm('Revoke volunteer status? User will become a regular traveller.')) return;
  const users = DB.getUsers();
  const u = users.find(u => u.id === id);
  if (!u) return;
  u.status = 'active';
  u.role   = 'user';
  DB.saveUsers(users);
  showToast(`Volunteer status revoked for ${u.name}.`);
  admRenderVolunteers();
}

function admDeleteUser(id) {
  if (!confirm('Delete this user permanently?')) return;
  const users = DB.getUsers().filter(u => u.id !== id);
  DB.saveUsers(users);
  if (currentUser && currentUser.id === id) { doLogout(); return; }
  showToast('User deleted.');
  admRenderUsers();
}

function showAuthError(elId, msg) {
  const el = document.getElementById(elId);
  if (el) { el.textContent = msg; el.style.display = 'block'; }
}

function clearAuthErrors() {
  ['login-error', 'reg-error'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.textContent = ''; el.style.display = 'none'; }
  });
  ['login-email','login-password','reg-first','reg-last','reg-email','reg-password','reg-confirm','reg-passport-id','reg-nationality','reg-dob','reg-pob'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  clearEmailStatus();
  clearPhoneStatus();
}

function showToast(msg) {
  const existing = document.getElementById('toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'toast';
  toast.style.cssText = `
    position:fixed;bottom:24px;left:50%;transform:translateX(-50%);
    background:var(--text);color:var(--surface);
    padding:10px 20px;border-radius:99px;font-size:13px;
    z-index:500;animation:fadeIn .2s ease;white-space:nowrap;
    box-shadow:0 4px 12px rgba(0,0,0,.2);
  `;
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}
