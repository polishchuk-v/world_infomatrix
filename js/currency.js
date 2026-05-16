
const FXR_KEY = '------';

const FALLBACK_RATES = {
  EUR: 1,
  UAH: 44.5,   
  TMT: 3.78,   
  TRY: 35.1,   
  THB: 38.5,   
  RON: 4.97,   
  MKD: 61.5,   
  MDL: 19.2,   
  MXN: 19.8,   
  MYR: 5.05,   
  KZT: 510.0,  
  GBP: 0.85,   
  EGP: 53.0,   
  CRC: 560.0,  
  CNY: 7.80,   
  CLP: 1020.0, 
  BGN: 1.956,  
  BRL: 6.0,    
  BAM: 1.956,  
  AZN: 1.84,   
  ALL: 103.0,  
  USD: 1.08,   
};

const FXR_CURRENCIES = 'UAH,TRY,THB,RON,MKD,MDL,MXN,MYR,KZT,GBP,EGP,CNY,CLP,BGN,BRL,AZN,ALL,USD,EUR';

let fxRates   = null;
let fxUpdated = '';

async function loadRates() {
  const rateEl = document.getElementById('cc-rate');
  rateEl.textContent = 'Loading rates…';

  try {
    const url = `https://api.fxratesapi.com/latest?api_key=${FXR_KEY}&base=EUR&currencies=${FXR_CURRENCIES}`;
    const res  = await fetch(url);
    const data = await res.json();

    if (data && data.rates) {
      
      fxRates   = { ...FALLBACK_RATES, EUR: 1, ...data.rates };
      fxUpdated = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else {
      throw new Error('No rates in response');
    }
  } catch (e) {
    console.warn('FXRatesAPI unavailable, using fallback rates.', e);
    fxRates = { ...FALLBACK_RATES };
  }

  convertCurrency();
}

function convertCurrency() {
  if (!fxRates) return;

  const amount = parseFloat(document.getElementById('cc-amount').value) || 0;
  const from   = document.getElementById('cc-from').value;
  const to     = document.getElementById('cc-to').value;
  const rateEl = document.getElementById('cc-rate');

  if (!amount) {
    document.getElementById('cc-result').textContent = '—';
    rateEl.textContent = fxUpdated
      ? `Rates updated at ${fxUpdated} · Live via FXRatesAPI`
      : 'Enter amount to convert';
    return;
  }

  const result = (amount / fxRates[from]) * fxRates[to];
  const rate   = (1 / fxRates[from]) * fxRates[to];

  const fmt = n => n >= 100
    ? Math.round(n).toLocaleString()
    : parseFloat(n.toFixed(4)).toString();

  document.getElementById('cc-result').textContent = fmt(result) + ' ' + to;
  rateEl.textContent = `1 ${from} = ${rate.toFixed(4)} ${to}` +
    (fxUpdated ? ` · Updated ${fxUpdated} · Live rates` : ' · Approximate rates');
}

function swapCurrency() {
  const f   = document.getElementById('cc-from');
  const t   = document.getElementById('cc-to');
  const tmp = f.value;
  f.value   = t.value;
  t.value   = tmp;
  convertCurrency();
}

document.addEventListener('DOMContentLoaded', loadRates);
