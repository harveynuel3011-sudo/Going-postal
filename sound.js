
const introSounds = [
  new Audio('https://files.catbox.moe/djs56a.mp3'),
  new Audio('https://files.catbox.moe/jybdwk.mp3')
];

const handboomSounds = [
  new Audio('https://files.catbox.moe/xh72w3.mp3'),
  new Audio('https://files.catbox.moe/lw8hpu.mp3')
];

const ambientSound = new Audio('https://files.catbox.moe/hnwo4g.mp3');
const gunSpecSound = new Audio('https://files.catbox.moe/vhue5t.mp3');

const acquireSounds = [
  new Audio('https://files.catbox.moe/scmuj4.mp3'),
  new Audio('https://files.catbox.moe/dcputh.mp3'),
  new Audio('https://files.catbox.moe/9iogpl.mp3'),
  new Audio('https://files.catbox.moe/1cdqa1.mp3'),
  new Audio('https://files.catbox.moe/rvijh2.mp3'),
  new Audio('https://files.catbox.moe/rd4k70.mp3'),
  new Audio('https://files.catbox.moe/oesyw6.mp3')
];


[...introSounds, ...handboomSounds, ambientSound, gunSpecSound, ...acquireSounds].forEach(s => {
  s.preload = 'auto';
  s.volume = 0.8;
});


function playRandom(soundArray) {
  const sound = soundArray[Math.floor(Math.random() * soundArray.length)];
  sound.currentTime = 0;
  sound.play().catch(() => {});
}


function createWelcomeOverlay() {
  const overlay = document.createElement('div');
  overlay.id = 'welcome-overlay';
  overlay.style.cssText = `
    position: fixed; inset: 0; z-index: 9999;
    background: rgba(0,0,0,0.95); cursor: pointer;
    display: flex; align-items: center; justify-content: center;
  `;
  overlay.innerHTML = `
    <div style="text-align: center;">
      <h2 style="color: var(--accent); font-size: 3rem; margin-bottom: 1rem;">⚠️ AUDIO WARNING ⚠️</h2>
      <p style="color: #888; font-size: 1.5rem;">Click anywhere to activate sound system</p>
    </div>
  `;
  document.body.appendChild(overlay);
  
  overlay.addEventListener('click', () => {
    playRandom(introSounds);
    overlay.remove();
  }, { once: true });
}


let ambientTimer;
function startAmbientTimer() {
  ambientTimer = setTimeout(() => {
    ambientSound.currentTime = 0;
    ambientSound.play().catch(() => {});
  }, 60000); 
}

function stopAmbientTimer() {
  if (ambientTimer) clearTimeout(ambientTimer);
  ambientSound.pause();
  ambientSound.currentTime = 0;
}


document.addEventListener('DOMContentLoaded', () => {
  createWelcomeOverlay();
  

  const handboomBtn = document.querySelector('.acquired-btn');
  if (handboomBtn) {
    handboomBtn.addEventListener('click', () => playRandom(handboomSounds));
  }
  

  const originalEnterShop = window.enterShop;
  if (originalEnterShop) {
    window.enterShop = function() {
      originalEnterShop();
      startAmbientTimer();
    };
  }
  

  const originalShowModal = window.showModal;
  if (originalShowModal) {
    window.showModal = function(gun) {
      originalShowModal(gun);
      gunSpecSound.currentTime = 0;
      gunSpecSound.play().catch(() => {});
    };
  }
  

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('buy-btn') || e.target.classList.contains('modal-buy-btn')) {
      playRandom(acquireSounds);
    }
  });
});
