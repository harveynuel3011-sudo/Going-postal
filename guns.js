const guns = [
  {
    name: "FN FAL",
    price: "$2 400",
    img: "https://i.imgur.com/20h9YMl.jpeg",
    specs: ["Caliber: 7.62×51mm NATO", "Weight: 4.3 kg", "Mag: 20-rnd", "RoF: 650 rpm"],
    category: "rifle",
    pros: ["Devastating stopping power", "Battle-proven reliability", "Long-range accuracy"],
    cons: ["Heavy recoil", "Weight: 4.3kg", "Limited mag capacity"]
  },
  {
    name: "HK416",
    price: "$2 950",
    img: "https://i.imgur.com/IaIfnJF.jpeg",
    specs: ["Caliber: 5.56×45mm NATO", "Weight: 3.5 kg", "Mag: 30-rnd", "RoF: 850 rpm"],
    category: "rifle",
    pros: ["Exceptional reliability", "High rate of fire", "Modular design"],
    cons: ["Expensive", "Frequent cleaning needed", "Gas system complexity"]
  },
  {
    name: "USAS-12",
    price: "$3 100",
    img: "https://i.imgur.com/Y4tXZK4.jpeg",
    specs: ["Caliber: 12-gauge", "Weight: 4.7 kg", "Mag: 10-rnd drum", "RoF: 360 rpm"],
    category: "shotgun",
    pros: ["Full-auto devastation", "Close-quarters monster", "Large ammo variety"],
    cons: ["Extremely heavy", "Drum reloads slow", "Massive recoil"]
  },
  {
    name: "M16A1",
    price: "$1 950",
    img: "https://i.imgur.com/KI5JJ0Y.jpeg",
    specs: ["Caliber: 5.56×45mm NATO", "Weight: 3.4 kg", "Mag: 20-rnd", "RoF: 700 rpm"],
    category: "rifle",
    pros: ["Lightweight", "Proven Vietnam design", "Accurate at range"],
    cons: ["Prone to jamming", "Direct impingement", "20-rnd mag only"]
  },
  {
    name: "MP5K",
    price: "$1 750",
    img: "https://i.imgur.com/taEV1tk.jpeg",
    specs: ["Caliber: 9×19mm", "Weight: 2.0 kg", "Mag: 30-rnd", "RoF: 900 rpm"],
    category: "smg",
    pros: ["Ultra compact", "Very light", "900 RPM ROF"],
    cons: ["Limited range", "9mm pistol caliber", "High fire rate = ammo burn"]
  }
];

let cart = [];

function renderGuns(gunsToRender = guns) {
  const grid = document.getElementById('gun-grid');
  grid.innerHTML = '';
  gunsToRender.forEach(g => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${g.img}" alt="${g.name}" onerror="this.src='https://via.placeholder.com/300x180/111/00ffff?text=${encodeURIComponent(g.name)}'">
      <div class="info">
        <h2>${g.name}</h2>
        <div class="price">${g.price}</div>
        <ul class="specs">
          ${g.specs.map(s => `<li>${s}</li>`).join('')}
        </ul>
        <button class="buy-btn" onclick="event.stopPropagation(); addToCart('${g.name}')">ACQUIRE ASSET</button>
      </div>
    `;
    card.addEventListener('click', () => showModal(g));
    grid.appendChild(card);
  });
}

function showModal(gun) {
  const modal = document.getElementById('modal-overlay');
  const modalBody = document.getElementById('modal-body');
  
  modalBody.innerHTML = `
    <h2>${gun.name}</h2>
    <img src="${gun.img}" alt="${gun.name}" onerror="this.src='https://via.placeholder.com/600x300/111/00ffff?text=${encodeURIComponent(gun.name)}'">
    <div class="price">${gun.price}</div>
    
    <div class="detail-section">
      <h3>TACTICAL SPECIFICATIONS</h3>
      <ul class="specs">
        ${gun.specs.map(s => `<li>${s}</li>`).join('')}
      </ul>
    </div>

    <div class="pros-cons">
      <div class="pros">
        <h4>✓ ADVANTAGES</h4>
        <ul>
          ${gun.pros.map(p => `<li>${p}</li>`).join('')}
        </ul>
      </div>
      <div class="cons">
        <h4>✗ DISADVANTAGES</h4>
        <ul>
          ${gun.cons.map(c => `<li>${c}</li>`).join('')}
        </ul>
      </div>
    </div>

    <button class="modal-buy-btn" onclick="addToCart('${gun.name}'); document.getElementById('modal-overlay').style.display='none'">ACQUIRE ${gun.name.toUpperCase()}</button>
  `;
  
  modal.style.display = 'block';
}

// Close modal
document.querySelector('.modal-close').onclick = function() {
  document.getElementById('modal-overlay').style.display = 'none';
};

document.getElementById('modal-overlay').onclick = function(e) {
  if (e.target === this) {
    this.style.display = 'none';
  }
};

function filterGuns(category) {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.category === category) {
      btn.classList.add('active');
    }
  });

  if (category === 'all') {
    renderGuns();
  } else {
    renderGuns(guns.filter(g => g.category === category));
  }
}

function addToCart(name) {
  cart.push(name);
  document.getElementById('cart-count').textContent = cart.length;
  
  const cartEl = document.getElementById('cart');
  cartEl.style.animation = 'pulse 0.5s';
  setTimeout(() => cartEl.style.animation = '', 500);
}

// Add pulse animation
const style = document.createElement('style');
style.textContent = `
  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(139,0,0,0.7); }
    70% { box-shadow: 0 0 0 10px rgba(139,0,0,0); }
    100% { box-shadow: 0 0 0 0 rgba(139,0,0,0); }
  }
`;
document.head.appendChild(style);

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
      filterGuns(this.dataset.category);
    });
  });
  
  renderGuns();
});
