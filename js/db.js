

const firebaseConfig = {
  apiKey:            "----",
  authDomain:        "travelsosproject.firebaseapp.com",
  projectId:         "travelsosproject",
  storageBucket:     "travelsosproject.firebasestorage.app",
  messagingSenderId: "76755622472",
  appId:             "1:76755622472:web:4227a33de84cb5b72e567d",
};

const FS_BASE = `https://firestore.googleapis.com/v1/projects/${firebaseConfig.projectId}/databases/(default)/documents`;
const API_KEY = firebaseConfig.apiKey;

function toFS(obj) {
  const fields = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v === null || v === undefined) {
      fields[k] = { nullValue: null };
    } else if (typeof v === 'boolean') {
      fields[k] = { booleanValue: v };
    } else if (typeof v === 'number') {
      fields[k] = { integerValue: String(v) };
    } else if (typeof v === 'string') {
      fields[k] = { stringValue: v };
    } else if (Array.isArray(v)) {
      fields[k] = { arrayValue: { values: v.map(i => typeof i === 'object' ? { mapValue: { fields: toFS(i) } } : { stringValue: String(i) }) } };
    } else if (typeof v === 'object') {
      fields[k] = { mapValue: { fields: toFS(v) } };
    }
  }
  return fields;
}

function fromFS(fields) {
  if (!fields) return {};
  const obj = {};
  for (const [k, v] of Object.entries(fields)) {
    if (v.stringValue  !== undefined) obj[k] = v.stringValue;
    else if (v.integerValue !== undefined) obj[k] = Number(v.integerValue);
    else if (v.booleanValue !== undefined) obj[k] = v.booleanValue;
    else if (v.nullValue    !== undefined) obj[k] = null;
    else if (v.arrayValue)  obj[k] = (v.arrayValue.values || []).map(i => i.mapValue ? fromFS(i.mapValue.fields) : (i.stringValue || i.integerValue || i.booleanValue || null));
    else if (v.mapValue)    obj[k] = fromFS(v.mapValue.fields);
  }
  return obj;
}

async function fsGet(collection, docId) {
  const res = await fetch(`${FS_BASE}/${collection}/${docId}?key=${API_KEY}`);
  if (res.status === 404) return null;
  const data = await res.json();
  return data.fields ? fromFS(data.fields) : null;
}

async function fsSet(collection, docId, obj) {
  const fields = toFS(obj);
  await fetch(`${FS_BASE}/${collection}/${docId}?key=${API_KEY}`, {
    method:  'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({ fields }),
  });
}

async function fsList(collection) {
  const res  = await fetch(`${FS_BASE}/${collection}?key=${API_KEY}`);
  const data = await res.json();
  if (!data.documents) return [];
  return data.documents.map(d => ({
    _id: d.name.split('/').pop(),
    ...fromFS(d.fields),
  }));
}

async function fsDelete(collection, docId) {
  await fetch(`${FS_BASE}/${collection}/${docId}?key=${API_KEY}`, { method: 'DELETE' });
}

const DB = {

  async init() {
    const queues = await fsList('queues');
    if (queues.length === 0) {
      await this._seedQueues();
    }
  },

  
  async getUsers() {
    return await fsList('users');
  },

  async getUserById(id) {
    return await fsGet('users', id);
  },

  async getUserByEmail(email) {
    const users = await this.getUsers();
    return users.find(u => u.email?.toLowerCase() === email.toLowerCase()) || null;
  },

  
  async createUser({ name, firstName, lastName, email, password, role, phone, passportInfo }) {
    const existing = await this.getUserByEmail(email);
    if (existing) return { error: 'Email already registered' };

    const id = 'u_' + Date.now();
    const user = {
      id,
      name:      name || [firstName, lastName].filter(Boolean).join(' '),
      firstName: firstName || '',
      lastName:  lastName  || '',
      email,
      phone:     phone || '',
      password:  this._hash(password),
      role,
      status:    role === 'volunteer' ? 'pending' : 'active',
      createdAt: new Date().toISOString(),
    };

    
    if (role === 'volunteer' && passportInfo) {
      user.passportId   = passportInfo.passportId   || '';
      user.nationality  = passportInfo.nationality  || '';
      user.dateOfBirth  = passportInfo.dateOfBirth  || '';
      user.placeOfBirth = passportInfo.placeOfBirth || '';
    }

    await fsSet('users', id, user);
    return { user };
  },

  async verifyLogin(email, password) {
    const user = await this.getUserByEmail(email);
    if (!user) return { error: 'User not found' };
    if (user.password !== this._hash(password)) return { error: 'Wrong password' };
    return { user };
  },

  async updateUser(id, patch) {
    const user = await this.getUserById(id);
    if (!user) return;
    await fsSet('users', id, { ...user, ...patch });
  },

  async deleteUser(id) {
    await fsDelete('users', id);
  },

  
  getSession() {
    const id   = localStorage.getItem('tsos_session');
    const data = localStorage.getItem('tsos_session_data');
    if (!id || !data) return null;
    try { return JSON.parse(data); } catch { return null; }
  },

  startSession(user) {
    localStorage.setItem('tsos_session', user.id);
    localStorage.setItem('tsos_session_data', JSON.stringify(user));
  },

  endSession() {
    localStorage.removeItem('tsos_session');
    localStorage.removeItem('tsos_session_data');
  },

  
  async getPosts() {
    const posts = await fsList('posts');
    return posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  },

  async getPost(id) {
    return await fsGet('posts', id);
  },

  async createPost({ title, body, cat, country, authorId, authorName }) {
    const id   = 'p_' + Date.now();
    const post = {
      id, title, body, cat, country,
      authorId, authorName,
      createdAt: new Date().toISOString(),
      replies:   [],
    };
    await fsSet('posts', id, post);
    return post;
  },

  async addReply(postId, { authorId, authorName, isVolunteer, text }) {
    const post = await this.getPost(postId);
    if (!post) return null;
    const replies = post.replies || [];
    replies.push({
      id:         'r_' + Date.now(),
      authorId, authorName,
      vol:        isVolunteer,
      text,
      createdAt:  new Date().toISOString(),
    });
    await fsSet('posts', postId, { ...post, replies });
    return { ...post, replies };
  },

  async deletePost(id) {
    await fsDelete('posts', id);
  },

  
  async getQueues() {
    const q = await fsList('queues');
    return q.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  },

  async addQueueReport({ crossing, waitMin, note, authorId }) {
    const id = 'q_' + Date.now();
    await fsSet('queues', id, {
      id, crossing,
      waitMin: Number(waitMin),
      note:    note || '',
      authorId,
      createdAt: new Date().toISOString(),
    });
  },

  async getLatestQueue() {
    const queues = await this.getQueues();
    const map = {};
    queues.forEach(q => { if (!map[q.crossing]) map[q.crossing] = q; });
    return map;
  },

  
  async getSetting(key) {
    const doc = await fsGet('settings', key);
    return doc ? doc.value : null;
  },

  async setSetting(key, value) {
    await fsSet('settings', key, { value });
  },

  
  _hash(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) h = Math.imul(31, h) + str.charCodeAt(i) | 0;
    return 'h_' + Math.abs(h).toString(36);
  },

  _relTime(iso) {
    const diff = Date.now() - new Date(iso).getTime();
    const m = Math.floor(diff / 60000);
    if (m < 1)  return 'just now';
    if (m < 60) return m + 'm ago';
    const h = Math.floor(m / 60);
    if (h < 24) return h + 'h ago';
    return Math.floor(h / 24) + 'd ago';
  },

  
  async _seedPosts() {
    const posts = [
      {
        id: 'p_seed1', cat: 'shelter', country: 'Romania',
        title: 'Scammed by landlord — need room tonight in Bucharest',
        body:  "We arrived in Bucharest and the apartment we paid for doesn't exist. 2 people, 10pm, ~30€ total.",
        authorId: 'seed', authorName: 'TravelerMK',
        createdAt: new Date(Date.now() - 7200000).toISOString(),
        replies: [
          { id:'r1', authorId:'seed', authorName:'VolunteerAna', vol:true,  text:'Calea Rahovei 196 — Adăpostul Social nr.1, open 24/7. Also Hostel Nord at Gara de Nord, ~15€/person.', createdAt: new Date().toISOString() },
          { id:'r2', authorId:'seed', authorName:'LocalHelper',  vol:false, text:'Booking.com has last-minute deals from 18€. Show scam evidence.', createdAt: new Date().toISOString() },
        ],
      },
      {
        id: 'p_seed2', cat: 'border', country: 'Poland',
        title: 'Family crossing Poland → Germany — what documents?',
        body:  "Driving Warsaw to Berlin tomorrow with 2 kids. EU passports, green card, ITP. Anything else?",
        authorId: 'seed', authorName: 'FamilyRoad',
        createdAt: new Date(Date.now() - 18000000).toISOString(),
        replies: [
          { id:'r3', authorId:'seed', authorName:'VolunteerMarta', vol:true, text:'EU passport or ID card is fine. Vehicle registration, green card, ITP. No vignette needed in Germany.', createdAt: new Date().toISOString() },
        ],
      },
    ];
    for (const p of posts) await fsSet('posts', p.id, p);
  },

  async _seedQueues() {
    const queues = [
      { id:'q_s1', crossing:'Nădlac II (RO–HU)',  waitMin:10, note:'',             authorId:'seed', createdAt: new Date(Date.now()-480000).toISOString() },
      { id:'q_s2', crossing:'Borș II (RO–HU)',     waitMin:35, note:'busy morning', authorId:'seed', createdAt: new Date(Date.now()-1320000).toISOString() },
      { id:'q_s3', crossing:'Sculeni (RO–MD)',      waitMin:90, note:'very long',    authorId:'seed', createdAt: new Date(Date.now()-300000).toISOString() },
      { id:'q_s4', crossing:'Giurgiu (RO–BG)',      waitMin:15, note:'',             authorId:'seed', createdAt: new Date(Date.now()-1860000).toISOString() },
    ];
    for (const q of queues) await fsSet('queues', q.id, q);
  },
};
