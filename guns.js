const guns = [
  {
    name: "FN FAL",
    price: "$2 400",
    img: "https://i.imgur.com/20h9YMl.jpeg",
    category: "rifle",
    fullName: "FN FAL 7.62mm Battle Rifle",
    description: "The 'Right Arm of the Free World'—battle-tested across 90+ countries. This 7.62mm beast delivers one-shot stopping power at extended ranges. Preferred by mercenary units for its reliability in desert and jungle conditions.",
    performance: "Devastating penetration through light cover. Cold hammer-forged barrel maintains accuracy through 15,000+ rounds. Chrome-lined chamber resists corrosion.",
    specs: {
      "Caliber": "7.62×51mm NATO",
      "Weight": "4.3 kg (9.5 lbs) unloaded",
      "Length": "1090mm (43 in) fixed stock",
      "Barrel": "533mm (21 in) chrome-lined",
      "Action": "Gas-operated, tilting breechblock",
      "Capacity": "20-round detachable box mag",
      "Rate of Fire": "650 rpm cyclic",
      "Muzzle Velocity": "840 m/s (2,755 ft/s)",
      "Effective Range": "600m point target",
      "Fire Modes": "Semi-auto & Full-auto"
    },
    pros: ["One-shot stop capability", "Reliable in extreme climates", "Chrome-lined barrel", "Effective to 800m", "Interchangeable parts worldwide"],
    cons: ["Heavy recoil in full-auto", "9.5 lbs unloaded", "20-rnd mag limits fire", "Muzzle flash at night", "Ammunition weight adds up"]
  },
  {
    name: "HK416",
    price: "$2 950",
    img: "https://i.imgur.com/IaIfnJF.jpeg",
    category: "rifle",
    fullName: "Heckler & Koch HK416 5.56mm Assault Rifle",
    description: "The operator's choice. Delta Force and DEVGRU's preferred CQB platform. Short-stroke piston system runs cleaner than any direct-impingement rifle. Cold hammer-forged barrel delivers sub-MOA accuracy.",
    performance: "Zero reliability issues after 10,000 rounds without cleaning. Over-the-beach capability means it fires immediately after submersion. Tuned gas system reduces felt recoil by 30%.",
    specs: {
      "Caliber": "5.56×45mm NATO",
      "Weight": "3.5 kg (7.7 lbs) unloaded",
      "Length": "805mm (31.7 in) stock extended",
      "Barrel": "368mm (14.5 in) cold hammer-forged",
      "Action": "Gas piston, rotating bolt",
      "Capacity": "30-round STANAG mag",
      "Rate of Fire": "850 rpm cyclic",
      "Muzzle Velocity": "788 m/s (2,585 ft/s)",
      "Effective Range": "450m point target",
      "Fire Modes": "Semi-auto & Full-auto"
    },
    pros: ["Crane-tested reliability", "Sub-MOA accuracy", "Runs 10k+ rounds dirty", "OTB rated", "30-rnd STANAG compatible"],
    cons: ["Premium price", "Requires HK mags for best performance", "Gas system adds weight", "Complex maintenance", "Limited parts interchangeability"]
  },
  {
    name: "USAS-12",
    price: "$3 100",
    img: "https://i.imgur.com/Y4tXZK4.jpeg",
    category: "shotgun",
    fullName: "USAS-12 12-Gauge Automatic Shotgun",
    description: "The room-clearing monster. This full-auto 12-gauge shreds barriers, vehicles, and anything stupid enough to be in front of it. Drum-fed devastation for close-quarters combat.",
    performance: "360 RPM sends 10 pellets per second downrange. Recoil is brutal—brace against a wall. Drum mags are reliable but slow to reload under fire.",
    specs: {
      "Caliber": "12-gauge 2¾\" & 3\" shells",
      "Weight": "4.7 kg (10.4 lbs) unloaded",
      "Length": "960mm (37.8 in) stock extended",
      "Barrel": "460mm (18.1 in) smoothbore",
      "Action": "Gas-operated, full-auto capable",
      "Capacity": "10-rnd drum mag",
      "Rate of Fire": "360 rpm cyclic",
      "Muzzle Velocity": "408 m/s (1,340 ft/s) w/ slug",
      "Effective Range": "40m buckshot / 100m slug",
      "Fire Modes": "Semi-auto & Full-auto"
    },
    pros: ["Full-auto shotgun firepower", "Destroys light vehicles", "Devastating in CQB", "Drum mag intimidation", "Accepts all 12ga ammo"],
    cons: ["10.4 lbs loaded", "Drum mags bulky", "360 RPM burns ammo fast", "Recoil is punishing", "Overkill for most missions"]
  },
  {
    name: "M16A1",
    price: "$1 950",
    img: "https://i.imgur.com/KI5JJ0Y.jpeg",
    category: "rifle",
    fullName: "Colt M16A1 5.56mm Assault Rifle",
    description: "Vietnam legend. The rifle that started the 5.56mm revolution. Lightweight, accurate, and deadly when maintained. Chrome chamber solved the original reliability nightmares.",
    performance: "Ballistically superior to M4 variants—20\" barrel delivers full 5.56mm velocity. Prone to fouling from direct impingement. Keep it clean and it'll run forever.",
    specs: {
      "Caliber": "5.56×45mm NATO",
      "Weight": "3.4 kg (7.5 lbs) unloaded",
      "Length": "990mm (39 in) stock extended",
      "Barrel": "508mm (20 in) chrome-lined",
      "Action": "Direct impingement, rotating bolt",
      "Capacity": "20-round detachable box mag",
      "Rate of Fire": "700-950 rpm cyclic",
      "Muzzle Velocity": "975 m/s (3,200 ft/s)",
      "Effective Range": "460m point target",
      "Fire Modes": "Semi-auto & Full-auto"
    },
    pros: ["Lightweight design", "3,200 ft/s velocity", "Accurate at 500m", "Proven in Vietnam", "20\" barrel optimized"],
    cons: ["Direct impingement fouls", "20-rnd mags limit fire", "A1 sights crude", "Full-auto uncontrollable", "Requires constant lube"]
  },
  {
    name: "MP5K",
    price: "$1 750",
    img: "https://i.imgur.com/taEV1tk.jpeg",
    category: "smg",
    fullName: "Heckler & Koch MP5K 9mm Submachine Gun",
    description: "The ultimate PDW. Compact enough for briefcase carry, fast enough for room-clearing. Roller-delayed blowback delivers SMG accuracy in a pistol-sized package. CIA favorite.",
    performance: "900 RPM cyclic rate is blistering—bursts dump mags in 2 seconds. Recoil is minimal due to roller system. At 100m, groups open to 6-8 inches.",
    specs: {
      "Caliber": "9×19mm Parabellum",
      "Weight": "2.0 kg (4.4 lbs) unloaded",
      "Length": "325mm (12.8 in) no stock",
      "Barrel": "115mm (4.5 in) 3-lug",
      "Action": "Roller-delayed blowback",
      "Capacity": "30-round curved mag",
      "Rate of Fire": "900 rpm cyclic",
      "Muzzle Velocity": "375 m/s (1,230 ft/s)",
      "Effective Range": "100m practical",
      "Fire Modes": "Semi-auto & Full-auto"
    },
    pros: ["Ultra-compact design", "2.0 kg weight", "900 RPM rate of fire", "Roller-delayed recoil", "30-rnd mag capacity"],
    cons: ["9mm pistol caliber only", "Range limited to 100m", "Barrel too short", "Full-auto burns ammo", "Specialized CQB only"]
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
          ${Object.entries(g.specs).slice(0,4).map(([k,v]) => `<li><strong>${k}:</strong> ${v}</li>`).join('')}
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
    <h2>${gun.fullName || gun.name}</h2>
    <img src="${gun.img}" alt="${gun.name}" onerror="this.src='https://via.placeholder.com/600x300/111/00ffff?text=${encodeURIComponent(gun.name)}'">
    <div class="price">${gun.price}</div>
    
    <div class="detail-section">
      <h3>CLASSIFIED BRIEF</h3>
      <p style="color: #aaa; line-height: 1.6; margin-bottom: 20px;">${gun.description}</p>
    </div>

    <div class="detail-section">
      <h3>TACTICAL SPECIFICATIONS</h3>
      <ul class="specs" style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
        ${Object.entries(gun.specs).map(([k,v]) => `<li><strong style="color: var(--accent); text-transform: uppercase;">${k}:</strong> ${v}</li>`).join('')}
      </ul>
    </div>

    <div class="detail-section">
      <h3>BATTLEFIELD PERFORMANCE</h3>
      <p style="color: #aaa; line-height: 1.6;">${gun.performance}</p>
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
