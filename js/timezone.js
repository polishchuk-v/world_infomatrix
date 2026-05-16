const COUNTRY_TIMEZONES = {
  'Ukraine': 'Europe/Kyiv',
  'Turkmenistan': 'Asia/Ashgabat',
  'Turkey': 'Europe/Istanbul',
  'Thailand': 'Asia/Bangkok',
  'Romania': 'Europe/Bucharest',
  'North Macedonia': 'Europe/Skopje',
  'Netherlands': 'Europe/Amsterdam',
  'Moldova': 'Europe/Chisinau',
  'Mexico': 'America/Mexico_City',
  'Malaysia': 'Asia/Kuala_Lumpur',
  'Kazakhstan': 'Asia/Almaty',
  'Great Britain': 'Europe/London',
  'Egypt': 'Africa/Cairo',
  'Costa Rica': 'America/Costa_Rica',
  'China': 'Asia/Shanghai',
  'Chile': 'America/Santiago',
  'Bulgaria': 'Europe/Sofia',
  'Brazil': 'America/Sao_Paulo',
  'Bosnia and Herzegovina': 'Europe/Sarajevo',
  'Azerbaijan': 'Asia/Baku',
  'Albania': 'Europe/Tirane',
};

function tsosGetParam(name) {
  return new URLSearchParams(window.location.search).get(name) || '';
}

function tsosCurrentLang() {
  return localStorage.getItem('travelsos_lang') || document.documentElement.lang || 'en';
}

function tsosResolveCountry(nextCountry) {
  return nextCountry ||
    tsosGetParam('country') ||
    document.getElementById('hero-country')?.value ||
    localStorage.getItem('travelsos_country') ||
    window.country ||
    'Romania';
}

function tsosEnsureClock() {
  let clock = document.getElementById('country-clock');
  if (clock) return clock;

  const nav = document.querySelector('nav');
  if (!nav) return null;

  clock = document.createElement('div');
  clock.id = 'country-clock';
  clock.className = 'country-clock';
  clock.innerHTML = `
    <span class="material-symbols-rounded country-clock-icon">schedule</span>
    <span class="country-clock-text">
      <strong id="country-clock-time">--:--</strong>
      <small id="country-clock-date">Loading…</small>
    </span>
  `;

  
  clock.style.cssText = `
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    color: var(--muted);
    padding: 4px 10px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--bg);
    white-space: nowrap;
    cursor: default;
    user-select: none;
  `;

  const strongEl = clock.querySelector('strong');
  if (strongEl) strongEl.style.cssText = 'font-size:13px;color:var(--text);font-weight:500;';
  const smallEl = clock.querySelector('small');
  if (smallEl) smallEl.style.cssText = 'display:block;font-size:10px;color:var(--hint);';

  const authBtn = nav.querySelector('.nav-auth, .logout-btn');
  const langSelect = nav.querySelector('.lang-select');
  nav.insertBefore(clock, langSelect || authBtn || null);
  return clock;
}

const TravelSOSClock = {
  country: 'Romania',
  timer: null,

  setCountry(nextCountry) {
    this.country = tsosResolveCountry(nextCountry);
    localStorage.setItem('travelsos_country', this.country);
    this.render();
  },

  render() {
    const clock = tsosEnsureClock();
    if (!clock) return;

    const tz = COUNTRY_TIMEZONES[this.country] || 'Europe/Bucharest';
    const lang = tsosCurrentLang();
    const now = new Date();

    const time = new Intl.DateTimeFormat(lang, {
      timeZone: tz,
      hour: '2-digit',
      minute: '2-digit',
    }).format(now);

    const date = new Intl.DateTimeFormat(lang, {
      timeZone: tz,
      weekday: 'short',
      day: '2-digit',
      month: 'short',
    }).format(now);

    const timeEl = document.getElementById('country-clock-time');
    const dateEl = document.getElementById('country-clock-date');
    if (timeEl) timeEl.textContent = time;
    if (dateEl) dateEl.textContent = `${date} · ${this.country}`;
    clock.title = `${this.country} — ${tz}`;
  },

  init() {
    this.setCountry(tsosResolveCountry());
    clearInterval(this.timer);
    this.timer = setInterval(() => this.render(), 1000 * 30);

    const select = document.getElementById('hero-country');
    if (select) {
      select.addEventListener('change', () => this.setCountry(select.value));
    }
  }
};

window.TravelSOSClock = TravelSOSClock;

document.addEventListener('DOMContentLoaded', () => TravelSOSClock.init());
