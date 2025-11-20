
const introSounds = [
  new Audio('https://files.catbox.moe/djs56a.mp3'),
  new Audio('https://files.catbox.moe/jybdwk.mp3'),
  new Audio('https://files.catbox.moe/iwvo8u.mp3')
];

const handboomSounds = [
  new Audio('https://files.catbox.moe/xh72w3.mp3'),
  new Audio('https://files.catbox.moe/lw8hpu.mp3'),
  new Audio('https://files.catbox.moe/bob5ak.mp3')
];

const ambientSound = new Audio('https://files.catbox.moe/hnwo4g.mp3');

const gunSpecSounds = [
  new Audio('https://files.catbox.moe/vhue5t.mp3'),
  new Audio('https://files.catbox.moe/yrqi1r.mp3'),
  new Audio('https://files.catbox.moe/wwuoe3.mp3'),
  new Audio('https://files.catbox.moe/i9ngxu.mp3'),
  new Audio('https://files.catbox.moe/fx1e5b.mp3'),
  new Audio('https://files.catbox.moe/ge39e8.mp3'),
  new Audio('https://files.catbox.moe/u8qc1h.mp3'),
  new Audio('https://files.catbox.moe/od9php.mp3'),
  new Audio('https://files.catbox.moe/wdv44z.mp3'),
  new Audio('https://files.catbox.moe/5v5sku.mp3'),
  new Audio('https://files.catbox.moe/r358ag.mp3')
];

const acquireSounds = [
  new Audio('https://files.catbox.moe/scmuj4.mp3'),
  new Audio('https://files.catbox.moe/dcputh.mp3'),
  new Audio('https://files.catbox.moe/9iogpl.mp3'),
  new Audio('https://files.catbox.moe/1cdqa1.mp3'),
  new Audio('https://files.catbox.moe/rvijh2.mp3'),
  new Audio('https://files.catbox.moe/rd4k70.mp3'),
  new Audio('https://files.catbox.moe/oesyw6.mp3')
];

const clickSound = new Audio('https://files.catbox.moe/lax7ur.mp3');


[...introSounds, ...handboomSounds, ambientSound,
 ...gunSpecSounds, ...acquireSounds, clickSound]
  .forEach(s => { s.preload = 'auto'; s.volume = 0.8; });


const playRandom = arr => {
  const snd = arr[Math.floor(Math.random() * arr.length)];
  snd.currentTime = 0;
  snd.play().catch(() => {});
};


const createWelcomeOverlay = () => {
  const overlay = document.createElement('div');
  overlay.id = 'welcome-overlay';
  overlay.style.cssText = `
    position:fixed; inset:0; z-index:9999;
    background:rgba(0,0,0,.95); cursor:pointer;
    display:flex; align-items:center; justify-content:center;
  `;
  overlay.innerHTML = `
    <div style="text-align:center;">
      <h2 style="color:var(--accent); font-size:3rem; margin-bottom:1rem;">⚠️ AUDIO WARNING ⚠️</h2>
      <p style="color:#888; font-size:1.5rem;">Click anywhere to activate sound system</p>
    </div>`;
  document.body.appendChild(overlay);
  overlay.addEventListener('click', () => {
    playRandom(introSounds);
    overlay.remove();
  }, { once: true });
};


const AMBIENT_DELAY = 180_000; 
let ambientTimer = null;

const startAmbientTimer = () => {
  stopAmbientTimer();
  ambientTimer = setTimeout(() => {
    ambientSound.currentTime = 0;
    ambientSound.play().catch(() => {});
  }, AMBIENT_DELAY);
};

const stopAmbientTimer = () => {
  if (ambientTimer) { clearTimeout(ambientTimer); ambientTimer = null; }
  ambientSound.pause();
  ambientSound.currentTime = 0;
};


document.addEventListener('DOMContentLoaded', () => {
  createWelcomeOverlay();


  document.addEventListener('click', e => {
    if (!e.target.classList.contains('acquired-btn') &&
        !e.target.classList.contains('buy-btn') &&
        !e.target.classList.contains('modal-buy-btn')) {
      clickSound.currentTime = 0;
      clickSound.play().catch(() => {});
    }
  });


  document.querySelector('.acquired-btn')
    ?.addEventListener('click', () => playRandom(handboomSounds));


  const origEnter = window.enterShop;
  if (origEnter) {
    window.enterShop = function () {
      origEnter();
      startAmbientTimer();
    };
  }


  const origModal = window.showModal;
  if (origModal) {
    window.showModal = function (gun) {
      origModal(gun);
      playRandom(gunSpecSounds);
    };
  }

  
  document.addEventListener('click', e => {
    if (e.target.classList.contains('buy-btn') ||
        e.target.classList.contains('modal-buy-btn')) {
      playRandom(acquireSounds);
    }
  });
});
