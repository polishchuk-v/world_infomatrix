const GROQ_API_KEY = 'YOUR_GROQ_API_KEY';

async function getGroqKey() {
  
  try {
    const key = await DB.getSetting('groq_key');
    if (key) return key;
  } catch(e) {}
  return GROQ_API_KEY;
}

let chatHistory = [];
let isLoading   = false;
let budget      = 'free';

function setChatContext() {
  const d = catData[category] || catData.border;
  document.getElementById('chat-country-pill').innerHTML = '<span class="material-symbols-rounded gf-icon">public</span>' + country;
  document.getElementById('chat-cat-pill').textContent     = d.chat;
  document.getElementById('welcome-msg').innerHTML =
    `Hi! I'm here to help with <strong>${d.chat.toLowerCase()} in ${country}</strong>. What do you need?`;
}
function openChat() {
  window.location.href = `chat.html?cat=${encodeURIComponent(category)}&country=${encodeURIComponent(country)}`;
}
function initChatPageFromParams() {
  category = getParam('cat', category || 'border');
  country  = getParam('country', country || 'Romania');
  chatHistory = [];
  setChatContext();
  document.getElementById('chat-input')?.focus();
}

function askQuick(btn) {
  document.getElementById('chat-input').value = btn.textContent;
  document.getElementById('quick-qs').style.display = 'none';
  sendMsg();
}

function handleKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMsg(); }
}

function autoGrow(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 110) + 'px';
}

function appendMsg(role, html) {
  const msgs = document.getElementById('chat-msgs');
  const div  = document.createElement('div');
  div.className = 'msg ' + role;
  div.innerHTML = `
    <div class="msg-lbl">${role === 'ai' ? 'TravelSOS AI' : 'You'}</div>
    <div class="msg-bubble">${html}</div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function showTyping() {
  const msgs = document.getElementById('chat-msgs');
  const div  = document.createElement('div');
  div.className = 'msg ai';
  div.id = 'typing';
  div.innerHTML = '<div class="msg-bubble"><div class="typing-dots"><span></span><span></span><span></span></div></div>';
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function removeTyping() {
  document.getElementById('typing')?.remove();
}

async function sendMsg() {
  if (isLoading) return;

  const inp  = document.getElementById('chat-input');
  const text = inp.value.trim();
  if (!text) return;

  inp.value = '';
  inp.style.height = 'auto';
  appendMsg('user', escHtml(text));
  chatHistory.push({ role: 'user', content: text });
  document.getElementById('quick-qs').style.display = 'none';

  isLoading = true;
  document.getElementById('send-btn').disabled = true;
  showTyping();

  const langMap   = { ru: 'Russian', ro: 'Romanian', pl: 'Polish', ua: 'Ukrainian' };
  const replyLang = langMap[lang] || 'English';
  const system    =
    `You are TravelSOS, a practical emergency travel assistant. ` +
    `The user is in ${country}, asking about: ${catData[category].chat}. ` +
    `Reply in ${replyLang}. Be concise (max 150 words), direct and actionable. ` +
    `Use bullet points for lists. Never say you cannot help.`;

  try {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + GROQ_API_KEY },
      body: JSON.stringify({
        model:       'llama-3.3-70b-versatile',
        temperature: 0.7,
        max_tokens:  400,
        messages: [
          { role: 'system', content: system },
          ...chatHistory,
        ],
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      const msg = data?.error?.message || `HTTP ${res.status}`;
      removeTyping();
      if (res.status === 401) {
        appendMsg('ai', '<span class="material-symbols-rounded gf-icon">key</span> Invalid API key. Open <b>js/ai.js</b> and replace <b>YOUR_GROQ_KEY</b> with your real key from console.groq.com');
      } else if (res.status === 429) {
        appendMsg('ai', '<span class="material-symbols-rounded gf-icon">hourglass_empty</span> Too many requests. Wait a few seconds and try again.');
      } else {
        appendMsg('ai', `<span class="material-symbols-rounded gf-icon">warning</span> Error: ${msg}`);
      }
      return;
    }

    const reply = data.choices?.[0]?.message?.content || 'No response.';
    removeTyping();
    
    const formatted = reply
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
    appendMsg('ai', formatted);
    chatHistory.push({ role: 'assistant', content: reply });

  } catch (e) {
    removeTyping();
    appendMsg('ai', '<span class="material-symbols-rounded gf-icon">language</span> Network error. Check your internet connection and try again.');
    console.error('Groq error:', e);
  }

  isLoading = false;
  document.getElementById('send-btn').disabled = false;
  inp.focus();
}

function setBudget(el, v) {
  budget = v;
  document.querySelectorAll('.budget-pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
}

async function searchHousing() {
  const city   = document.getElementById('h-city').value   || 'Bucharest';
  const nights = document.getElementById('h-nights').value || '1';
  const budgetMap = {
    free: 'free only (NGO shelters, social services)',
    30:   'under 30 EUR per night',
    60:   'under 60 EUR per night',
    any:  'any budget',
  };

  document.getElementById('h-results').innerHTML =
    `<div class="spinner-wrap"><div class="spinner"></div>` +
    `<div class="spinner-text">Searching in ${city}…</div></div>`;

  const cityEnc = encodeURIComponent(city);
  const bookingBase   = `https://www.booking.com/searchresults.html?ss=${cityEnc}&group_adults=1&no_rooms=1`;
  const hostelworldBase = `https://www.hostelworld.com/findabed.php/ChosenCity.${encodeURIComponent(city)}`;
  const mapsBase      = `https://www.google.com/maps/search/`;

  const prompt =
    `Find housing in ${city} for ${nights} night(s), budget: ${budgetMap[budget]}. ` +
    `Return ONLY a JSON array of 4 objects, no markdown. ` +
    `Each object must have: {name, address, type, price, tags (array of 2-3 strings), bookingUrl, isFree (boolean)}. ` +
    `For bookingUrl: free/NGO options use Google Maps URL like https://www.google.com/maps/search/NGO+shelter+${cityEnc}, ` +
    `hostels use https://www.hostelworld.com/findabed.php/ChosenCity.${cityEnc}, ` +
    `hotels/guesthouses use https://www.booking.com/searchresults.html?ss=${cityEnc}. ` +
    `Never use # as a URL. Always use a real working link.`;

  try {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + GROQ_API_KEY },
      body: JSON.stringify({
        model:       'llama-3.3-70b-versatile',
        temperature: 0.3,
        max_tokens:  700,
        messages: [
          { role: 'system', content: 'You are a travel assistant. Respond ONLY with a valid JSON array, no markdown, no explanation. Always include real working URLs in bookingUrl.' },
          { role: 'user',   content: prompt },
        ],
      }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data?.error?.message || 'Error');

    const text = data.choices?.[0]?.message?.content || '';
    let results;
    try {
      results = JSON.parse(text.replace(/```json|```/g, '').trim());
      // Fix any # URLs that slipped through
      results = results.map(r => ({
        ...r,
        bookingUrl: (!r.bookingUrl || r.bookingUrl === '#')
          ? (r.isFree
              ? `${mapsBase}${encodeURIComponent('NGO shelter ' + city)}`
              : `${bookingBase}`)
          : r.bookingUrl
      }));
    } catch {
      results = fallbackHousing(city);
    }
    renderHousing(results, city);

  } catch (e) {
    renderHousing(fallbackHousing(city), city);
  }
}

function fallbackHousing(city) {
  const cityEnc = encodeURIComponent(city);
  return [
    { name: 'Social Emergency Shelter', address: 'City centre, ' + city, type: 'Free shelter', price: 'Free',      tags: ['24/7', 'No booking', 'Basic'],           bookingUrl: `https://www.google.com/maps/search/emergency+shelter+${cityEnc}`, isFree: true  },
    { name: 'NGO Caritas Housing',      address: city,                    type: 'NGO',          price: 'Free',      tags: ['Families', 'Meals', 'Short stay'],       bookingUrl: `https://www.google.com/maps/search/Caritas+${cityEnc}`,            isFree: true  },
    { name: 'City Budget Hostel',       address: 'Near station, ' + city, type: 'Hostel',       price: '15€/night', tags: ['Dorm', 'Lockers', 'WiFi'],               bookingUrl: `https://www.hostelworld.com/findabed.php/ChosenCity.${cityEnc}`,   isFree: false },
    { name: 'Central Guesthouse',       address: city + ' centre',        type: 'Budget hotel', price: '28€/night', tags: ['Private room', 'WiFi', '24h reception'], bookingUrl: `https://www.booking.com/searchresults.html?ss=${cityEnc}`,          isFree: false },
  ];
}

function renderHousing(results, city) {
  document.getElementById('h-results').innerHTML =
    `<p style="font-size:13px;color:var(--muted);margin-bottom:12px">Found ${results.length} options in ${city}</p>` +
    results.map(r => `
      <div class="h-result ${r.isFree ? 'h-free' : 'h-paid'}">
        <div class="h-result-inner">
          <div class="h-icon">${r.isFree ? '<span class="material-symbols-rounded gf-icon">home</span>' : '<span class="material-symbols-rounded gf-icon">hotel</span>'}</div>
          <div class="h-info">
            <div class="h-name">${r.name}</div>
            <div class="h-addr">${r.address}</div>
            <div class="h-tags">
              ${(r.tags || []).map(t => `<span class="h-tag">${t}</span>`).join('')}
              <span class="h-tag" style="background:${r.isFree ? 'var(--teal-light)' : 'var(--blue-light)'};color:${r.isFree ? 'var(--teal)' : 'var(--blue)'};">${r.type}</span>
            </div>
          </div>
          <div class="h-price">
            ${r.isFree
              ? `<div class="h-price-free">Free</div><div class="h-price-lbl">No charge</div>`
              : `<div class="h-price-num">${r.price}</div><div class="h-price-lbl">per night</div>`}
          </div>
        </div>
        <div class="h-result-footer">
          <span class="h-source">Found by AI · ${city}</span>
          <a class="h-link" href="${r.bookingUrl}" target="_blank" rel="noopener">
            ${r.isFree
              ? 'Find on Maps ↗'
              : (r.bookingUrl.includes('hostelworld') ? 'Search on Hostelworld ↗'
                : r.bookingUrl.includes('booking.com') ? 'Search on Booking ↗'
                : 'Book now ↗')}
          </a>
        </div>
      </div>`).join('');
}

function escHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
