/* app-bonic igre — zajedničko zaglavlje, podnožje, zvukovi, rekordi, konfeti.
   Izvor: GITHUB Projects/IGRE/_zajednicko (sinkroniziraj-igre.ps1 ga kopira u svaku igru). */
(function () {
  'use strict';

  const IK = {
    rijec: '<rect x="2" y="7" width="5.5" height="5.5" rx="1.2"/><rect x="9.25" y="7" width="5.5" height="5.5" rx="1.2"/><rect x="16.5" y="7" width="5.5" height="5.5" rx="1.2"/><path d="M4 17h16"/>',
    vjesala: '<path d="M3 21h9M6 21V3h9v3"/><circle cx="15" cy="9" r="2.5"/><path d="M15 11.5V16M12 13.5h6M13 20l2-4 2 4"/>',
    slagalica: '<path d="M4 4h7v4a2 2 0 1 0 0 4v4H4zM13 4h7v7h-4a2 2 0 1 1-3 0z"/><path d="M13 13h7v7h-7z"/>',
    anagram: '<path d="M4 7h11M4 7l3-3M4 7l3 3M20 17H9M20 17l-3-3M20 17l-3 3"/>',
    pravopis: '<path d="M4 20l4-12 4 12M5.5 15h5"/><path d="m14 15 2.5 3L21 11"/>',
    karta: '<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>',
    otok: '<path d="M2 18c2 1.5 4 1.5 6 0s4-1.5 6 0 4 1.5 6 0"/><path d="M8 15c1-4 3-6 7-6M12 9c-1-2-3-3-5-3M12 9c1-2 3-3 5-3M12 9v6"/>',
    kviz: '<circle cx="12" cy="12" r="10"/><path d="M9.2 9a3 3 0 0 1 5.6 1c0 2-3 2.5-3 4.5M12 18h.01"/>',
    auto: '<path d="M3 13l2-5a2 2 0 0 1 2-1.4h10A2 2 0 0 1 19 8l2 5v4h-2M5 17H3v-4h18"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>',
    novac: '<circle cx="12" cy="12" r="9"/><path d="M15 8.5a4 4 0 1 0 0 7M7 11h6M7 13.5h6"/>',
    sahovnica: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h6V3M9 15h6V9M15 21v-6h6"/>',
    sudoku: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>',
    mina: '<circle cx="12" cy="13" r="6"/><path d="M12 3v4M12 19v2M4 13H2M22 13h-2M6.3 7.3 5 6M17.7 7.3 19 6"/><circle cx="10" cy="11" r="1"/>',
    euro: '<path d="M17 6.5A7 7 0 1 0 17 17.5M4 10h10M4 14h10"/>',
    karte: '<rect x="3" y="5" width="10" height="14" rx="2"/><rect x="11" y="3" width="10" height="14" rx="2" transform="rotate(12 16 10)"/>',
    tambura: '<path d="M14 3l7 7M18 6l-6.5 6.5"/><path d="M11.5 12.5a5 5 0 1 0-1 6c1.5-1.5 1.5-4 1-6z"/><circle cx="7" cy="16" r="1.2"/>',
    stimaj: '<path d="M4 18a8 8 0 0 1 16 0"/><path d="M12 18l4-6"/><circle cx="12" cy="18" r="1.5"/>',
    galeb: '<path d="M2 11c3-3 6-3 10 1 4-4 7-4 10-1"/><path d="M12 12v1"/>',
    lopta: '<circle cx="12" cy="9" r="5"/><path d="M8 20h8M12 14v3"/>',
    zmija: '<path d="M4 18c3 0 3-4 6-4s3 4 6 4 3-4 4-6"/><path d="M20 12c0-3-2-5-5-5"/><circle cx="15" cy="7" r="1"/>',
    alati: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    zvuk: '<path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/>',
    tisina: '<path d="M11 5 6 9H3v6h3l5 4z"/><path d="m16 9 6 6M22 9l-6 6"/>',
    igra: '<rect x="2" y="7" width="20" height="11" rx="5"/><path d="M7 10.5v4M5 12.5h4M16 11h.01M18 13h.01"/>',
    strelica: '<path d="M5 12h14M12 5l7 7-7 7"/>',
    nagrada: '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>',
    osvjezi: '<path d="M21 3v6h-6"/><path d="M21 13a9 9 0 1 1-3-7.7L21 9"/>',
    dijeli: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',
    stit: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
  };
  const ikona = (k, cls) => `<svg class="ik${cls ? ' ' + cls : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IK[k] || IK.igra}</svg>`;

  // Popis igara — mapa = ime repozitorija (app-bonic.github.io/<id>/)
  const IGRE = [
    { id: 'igra-rijec-dana', naziv: 'Riječ dana', ik: 'rijec', boja: '#5dff9b', kat: 'Riječi', opis: 'Pogodi hrvatsku riječ od 5 slova u 6 pokušaja. Svaki dan nova.' },
    { id: 'igra-vjesala', naziv: 'Vješala', ik: 'vjesala', boja: '#ff9f43', kat: 'Riječi', opis: 'Pogađaj slovo po slovo — gradovi, jela, životinje, sport.' },
    { id: 'igra-osmosmjerka', naziv: 'Osmosmjerka', ik: 'slagalica', boja: '#22e3ff', kat: 'Riječi', opis: 'Pronađi skrivene riječi u mreži slova — vodoravno, okomito i ukoso.' },
    { id: 'igra-anagrami-gradova', naziv: 'Anagrami gradova', ik: 'anagram', boja: '#ff4bd8', kat: 'Riječi', opis: 'GBZRAE? Zagreb! Razmrsi ispremiješana slova hrvatskih gradova.' },
    { id: 'igra-pravopis', naziv: 'Pravopis na brzinu', ik: 'pravopis', boja: '#ffe14d', kat: 'Riječi', opis: 'Č ili ć, je ili ije? Odgovori što brže prije nego istekne vrijeme.' },
    { id: 'igra-karta-hrvatske', naziv: 'Pogodi grad na karti', ik: 'karta', boja: '#22e3ff', kat: 'Hrvatska', opis: 'Klikni gdje je grad na karti — što bliže, to više bodova.' },
    { id: 'igra-otoci', naziv: 'Otoci', ik: 'otok', boja: '#5dff9b', kat: 'Hrvatska', opis: 'Na kojem je otoku Bol, Komiža ili Baška? Kviz o jadranskim otocima.' },
    { id: 'igra-kviz-hrvatska', naziv: 'Znaš li Hrvatsku?', ik: 'kviz', boja: '#9b7bff', kat: 'Hrvatska', opis: 'Kviz iz povijesti, sporta, izuma i znamenitosti Hrvatske.' },
    { id: 'igra-registracije', naziv: 'Registracije', ik: 'auto', boja: '#ff4d6d', kat: 'Hrvatska', opis: 'ZG, ST, VŽ… pogodi grad po registarskoj oznaci protiv sata.' },
    { id: 'igra-kuna-euro', naziv: 'Kuna ili euro', ik: 'novac', boja: '#ffe14d', kat: 'Brojevi', opis: 'Brzo preračunavanje kuna u eure i obrnuto po tečaju 7,53450.' },
    { id: 'igra-sahovnica', naziv: 'Šahovnica slagalica', ik: 'sahovnica', boja: '#ff4d6d', kat: 'Logika', opis: 'Posloži razbijenu šahovnicu pomicanjem pločica u što manje poteza.' },
    { id: 'igra-sudoku', naziv: 'Sudoku', ik: 'sudoku', boja: '#22e3ff', kat: 'Logika', opis: 'Sudoku s hrvatskim motivima ili brojevima, tri težine.' },
    { id: 'igra-minolovac', naziv: 'Minolovac', ik: 'mina', boja: '#ff9f43', kat: 'Logika', opis: 'Otkrij sva polja bez mina — klasik u novom ruhu.' },
    { id: 'igra-2048-euro', naziv: 'Od centa do 500 €', ik: 'euro', boja: '#ffe14d', kat: 'Logika', opis: 'Spajaj kovanice i novčanice dok ne stigneš do 500 eura (2048 na euro način).' },
    { id: 'igra-memorija', naziv: 'Memorija', ik: 'karte', boja: '#ff4bd8', kat: 'Logika', opis: 'Nađi parove kartica s hrvatskim motivima u što manje poteza.' },
    { id: 'igra-tamburaski-ritam', naziv: 'Tamburaški ritam', ik: 'tambura', boja: '#ff9f43', kat: 'Glazba i spretnost', opis: 'Tapkaj u ritmu kad nota stigne do crte — prim, brač i berde.' },
    { id: 'igra-stimaj', naziv: 'Štimaj!', ik: 'stimaj', boja: '#5dff9b', kat: 'Glazba i spretnost', opis: 'Otpjevaj ili odsviraj zadani ton — mikrofon mjeri koliko si točan.' },
    { id: 'igra-bura', naziv: 'Bura', ik: 'galeb', boja: '#22e3ff', kat: 'Glazba i spretnost', opis: 'Vodi galeba kroz buru i jarbole — jednim dodirom.' },
    { id: 'igra-picigin', naziv: 'Picigin', ik: 'lopta', boja: '#ffe14d', kat: 'Glazba i spretnost', opis: 'Drži lopticu u zraku što duže, kao na splitskim Bačvicama.' },
    { id: 'igra-zmija', naziv: 'Zmija po Jadranu', ik: 'zmija', boja: '#5dff9b', kat: 'Glazba i spretnost', opis: 'Klasična zmija koja lovi ribe između otoka.' },
  ];

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const trenutna = document.body.dataset.igra || '';
  const naWebu = location.hostname.endsWith('github.io');
  const url = id => id === trenutna ? './' : `../${id}/`;
  const alatiUrl = naWebu ? '../alati/' : '../../alati/';

  // ---------- trajno (samo u ovom pregledniku) ----------
  const lokalno = {
    uzmi(k, z = null) { try { const v = localStorage.getItem(k); return v === null ? z : JSON.parse(v); } catch { return z; } },
    stavi(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* blokirano */ } },
  };
  const rekord = {
    uzmi: (igra, z = 0) => lokalno.uzmi('rekord-' + (igra || trenutna), z),
    // vraća true ako je novi rekord (veći je bolji, ili manji ako manjiBolji)
    predlozi(bod, { igra, manjiBolji = false } = {}) {
      const k = 'rekord-' + (igra || trenutna), stari = lokalno.uzmi(k, null);
      if (stari === null || (manjiBolji ? bod < stari : bod > stari)) { lokalno.stavi(k, bod); return true; }
      return false;
    },
  };

  // ---------- zvukovi (Web Audio, bez datoteka) ----------
  let ctx = null, tiho = lokalno.uzmi('igre-tiho', false);
  function audio() { if (!ctx) { const A = window.AudioContext || window.webkitAudioContext; if (A) ctx = new A(); } if (ctx?.state === 'suspended') ctx.resume(); return ctx; }
  function ton(frek, trajanje = .12, { tip = 'square', glasnoca = .08, klizi = 0, kasni = 0 } = {}) {
    if (tiho) return;
    const a = audio(); if (!a) return;
    const t = a.currentTime + kasni, o = a.createOscillator(), g = a.createGain();
    o.type = tip; o.frequency.setValueAtTime(frek, t);
    if (klizi) o.frequency.exponentialRampToValueAtTime(Math.max(30, frek + klizi), t + trajanje);
    g.gain.setValueAtTime(glasnoca, t); g.gain.exponentialRampToValueAtTime(.0001, t + trajanje);
    o.connect(g).connect(a.destination); o.start(t); o.stop(t + trajanje + .02);
  }
  const zvuk = {
    klik: () => ton(660, .05, { tip: 'triangle', glasnoca: .06 }),
    tocno: () => { ton(660, .09, { tip: 'triangle' }); ton(990, .14, { tip: 'triangle', kasni: .08 }); },
    krivo: () => ton(220, .22, { tip: 'sawtooth', glasnoca: .05, klizi: -90 }),
    bod: () => ton(880, .07, { tip: 'square', glasnoca: .05 }),
    skok: () => ton(420, .12, { tip: 'square', glasnoca: .05, klizi: 380 }),
    pobjeda: () => [523, 659, 784, 1047].forEach((f, i) => ton(f, .18, { tip: 'triangle', glasnoca: .08, kasni: i * .11 })),
    poraz: () => [392, 330, 262].forEach((f, i) => ton(f, .22, { tip: 'sawtooth', glasnoca: .05, kasni: i * .16 })),
    ton,
    get tiho() { return tiho; },
  };

  // ---------- konfeti ----------
  function konfeti(kolicina = 140) {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const c = document.createElement('canvas'); c.className = 'konfeti';
    c.width = innerWidth * devicePixelRatio; c.height = innerHeight * devicePixelRatio;
    document.body.appendChild(c);
    const x = c.getContext('2d'), boje = ['#22e3ff', '#ff4bd8', '#ffe14d', '#5dff9b', '#ff9f43', '#9b7bff'];
    const d = Array.from({ length: kolicina }, () => ({ x: c.width / 2 + (Math.random() - .5) * c.width * .3, y: c.height * .35, vx: (Math.random() - .5) * 26, vy: -Math.random() * 26 - 8, r: Math.random() * 7 + 4, k: Math.random() * 6, b: boje[Math.random() * boje.length | 0] }));
    let t = 0;
    (function crtaj() {
      x.clearRect(0, 0, c.width, c.height);
      for (const p of d) { p.vy += .7; p.x += p.vx; p.y += p.vy; p.k += .2; x.save(); x.translate(p.x, p.y); x.rotate(p.k); x.fillStyle = p.b; x.fillRect(-p.r, -p.r / 2, p.r * 2, p.r); x.restore(); }
      if (++t < 150) requestAnimationFrame(crtaj); else c.remove();
    })();
  }

  // ---------- ostalo ----------
  let tajmer;
  function obavijest(t, trajanje = 2400) {
    let el = $('.obavijest');
    if (!el) { el = document.createElement('div'); el.className = 'obavijest'; el.setAttribute('role', 'status'); document.body.appendChild(el); }
    el.textContent = t; el.classList.add('vidljiv');
    clearTimeout(tajmer); tajmer = setTimeout(() => el.classList.remove('vidljiv'), trajanje);
  }
  function efekt(el, ime) { if (!el) return; el.classList.remove(ime); void el.offsetWidth; el.classList.add(ime); }
  async function dijeli(tekst) {
    try { if (navigator.share) { await navigator.share({ text: tekst }); return; } } catch { return; }
    try { await navigator.clipboard.writeText(tekst); obavijest('Rezultat je kopiran — zalijepi ga prijateljima!'); } catch { obavijest('Kopiranje nije uspjelo.'); }
  }
  // generator slučajnih brojeva koji za isti ključ (npr. datum) uvijek daje isti niz
  function prng(sjeme) {
    let h = 1779033703 ^ String(sjeme).length;
    for (const ch of String(sjeme)) { h = Math.imul(h ^ ch.charCodeAt(0), 3432918353); h = h << 13 | h >>> 19; }
    return () => { h = Math.imul(h ^ h >>> 16, 2246822507); h = Math.imul(h ^ h >>> 13, 3266489909); return ((h ^= h >>> 16) >>> 0) / 4294967296; };
  }
  const promijesaj = (niz, rnd = Math.random) => { const a = [...niz]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const danas = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; };
  const mn = (n, jedan, dva, pet) => { const d = n % 10, s = n % 100; return d === 1 && s !== 11 ? jedan : d >= 2 && d <= 4 && (s < 12 || s > 14) ? dva : pet; };

  // ---------- zaglavlje i podnožje ----------
  function zaglavlje() {
    const el = $('.ig-vrh'); if (!el) return;
    el.innerHTML = `<div class="ig-vrh-unutra">
      <a class="ig-marka" href="${url('igre')}"><img src="zajednicko/logo.png" alt="" width="40" height="40"><span><b>app-bonic</b><small>Besplatne igre</small></span></a>
      <nav>
        ${trenutna !== 'igre' ? `<a href="${url('igre')}">${ikona('igra')} Sve igre</a>` : ''}
        <a href="${alatiUrl}">${ikona('alati')} Besplatni alati</a>
        <a class="zvuk" href="#" role="button" aria-pressed="${!tiho}" title="Zvuk">${ikona(tiho ? 'tisina' : 'zvuk')}</a>
      </nav></div>`;
    $('.zvuk', el).addEventListener('click', e => {
      e.preventDefault(); tiho = !tiho; lokalno.stavi('igre-tiho', tiho);
      e.currentTarget.innerHTML = ikona(tiho ? 'tisina' : 'zvuk'); e.currentTarget.setAttribute('aria-pressed', !tiho);
      if (!tiho) zvuk.klik();
    });
  }
  function podnozje() {
    const el = $('.ig-dno'); if (!el) return;
    el.innerHTML = `<div class="ig-dno-unutra">
      <div class="ig-sigurno"><b>Igraj bez brige</b><p>Igre rade u tvom pregledniku, bez registracije, reklama i praćenja. Rekordi se spremaju samo na tvom uređaju i nikamo se ne šalju.</p></div>
      <div class="ig-ostale"><h3>Sve igre</h3><ul>${IGRE.map(g => `<li><a style="--c:${g.boja}" href="${url(g.id)}"${g.id === trenutna ? ' aria-current="page"' : ''}>${ikona(g.ik)}${esc(g.naziv)}</a></li>`).join('')}</ul></div>
      <div class="ig-potpis"><img src="zajednicko/logo.png" alt="" width="28" height="28"><span>© ${new Date().getFullYear()} app-bonic · besplatne igre</span><a href="${url('igre')}">Sve igre</a><a href="${alatiUrl}">Besplatni alati</a></div>
    </div>`;
  }

  // naslovni blok igre iz popisa (boja i ikona)
  function naslovIgre() {
    const g = IGRE.find(x => x.id === trenutna), el = $('.ig-naslov');
    if (!g || !el) return;
    document.documentElement.style.setProperty('--boja', g.boja);
    const znak = $('.znak', el);
    if (znak && !znak.innerHTML.trim()) znak.innerHTML = ikona(g.ik);
  }
  function ikoneUHtml(root = document) { $$('[data-ik]', root).forEach(s => { s.outerHTML = ikona(s.dataset.ik, s.className); }); }

  window.IG = { $, $$, esc, ikona, IK, IGRE, url, lokalno, rekord, zvuk, konfeti, obavijest, efekt, dijeli, prng, promijesaj, danas, mn, audio };
  zaglavlje(); podnozje(); naslovIgre(); ikoneUHtml();
})();
