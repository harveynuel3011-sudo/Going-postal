const guns = [
  {
    name: "FN FAL",
    price: "$2 400",
    img: "https://i.imgur.com/20h9YMl.jpeg",
    category: "rifle",
    fullName: "Fusil Automatique Léger | 7.62mm Battle Rifle",
    origin: "Belgium | 1953",
    specs: {
      caliber: "7.62×51mm NATO",
      weight: "4.3 kg (9.5 lbs) unloaded",
      length: "1090mm (43 in) fixed stock",
      barrel: "533mm (21 in) chrome-lined",
      action: "Gas-operated, tilting breechblock",
      capacity: "20-round detachable box mag",
      rof: "650 rpm cyclic",
      muzzleVelocity: "840 m/s (2,755 ft/s)",
      effectiveRange: "600m (656 yd) point target",
      fireModes: "Semi-auto & Full-auto"
    },
    description: "The 'Right Arm of the Free World'—battle-tested across 90+ countries. This 7.62mm beast delivers one-shot stopping power at extended ranges. Preferred by mercenary units for its reliability in desert and jungle conditions.",
    performance: "Devastating penetration through light cover. Recoil is stout but manageable with proper stance. Cold hammer-forged barrel maintains accuracy through 15,000+ rounds.",
    pros: ["One-shot stop capability", "Reliable in extreme climates", "Chrome-lined barrel resists corrosion", "Effective to 800m", "Interchangeable parts worldwide"],
    cons: ["Heavy recoil in full-auto", "9.5 lbs unloaded", "20-rnd mag limits suppression", "Muzzle flash is blinding at night", "Ammunition weight adds up fast"]
  },
  {
    name: "HK416",
    price: "$2 950",
    img: "https://i.imgur.com/IaIfnJF.jpeg",
    category: "rifle",
    fullName: "Heckler & Koch HK416 | 5.56mm Assault Rifle",
    origin: "Germany | 2004",
    specs: {
      caliber: "5.56×45mm NATO",
      weight: "3.5 kg (7.7 lbs) unloaded",
      length: "805mm (31.7 in) stock extended",
      barrel: "368mm (14.5 in) cold hammer-forged",
      action: "Gas piston, rotating bolt",
      capacity: "30-round STANAG mag",
      rof: "850 rpm cyclic",
      muzzleVelocity: "788 m/s (2,585 ft/s)",
      effectiveRange: "450m (492 yd) point target",
      fireModes: "Semi-auto & Full-auto"
    },
    description: "The operator's choice. Delta Force and DEVGRU's preferred CQB platform. Short-stroke piston system runs cleaner than any direct-impingement rifle. Cold hammer-forged barrel delivers sub-MOA accuracy.",
    performance: "Zero reliability issues even after 10,000 rounds without cleaning. Over-the-beach capability means it fires immediately after submersion. Tuned gas system reduces felt recoil by 30% compared to M4.",
    pros: ["Crane-tested reliability", "Sub-MOA accuracy potential", "Runs 10k+ rounds without cleaning", "OTB (Over-The-Beach) rated", "30-rnd STANAG compatibility"],
    cons: ["Premium price tag", "Requires proprietary HK mags for best performance", "Gas system adds weight vs M4", "Complex maintenance", "Limited parts interchangeability"]
  },
  {
    name: "USAS-12",
    price: "$3 100",
    img: "https://i.imgur.com/Y4tXZK4.jpeg",
    category: "shotgun",
    fullName: "Universal Sporting Automatic Shotgun-12 | 12ga Auto Shotgun",
    origin: "South Korea | 1989",
    specs: {
      caliber: "12-gauge 2¾\" & 3\" shells",
      weight: "4.7 kg (10.4 lbs) unloaded",
      length: "960mm (37.8 in) stock extended",
      barrel: "460mm (18.1 in) smoothbore",
      action: "Gas-operated, full-auto capable",
      capacity: "10-rnd drum mag or 12-rnd box",
      rof: "360 rpm cyclic (full-auto)",
      muzzleVelocity: "408 m/s (1,340 ft/s) w/ slug",
      effectiveRange: "40m (44 yd) buckshot / 100m slug",
      fireModes: "Semi-auto & Full-auto"
    },
    description: "The room-clearing monster. This full-auto 12-gauge shreds barriers, vehicles, and anything stupid enough to be in front of it. Drum-fed devastation for close-quarters combat.",
    performance: "360 RPM sends 10 pellets per second downrange. Recoil is brutal—brace against a wall or go full cyclic and let it climb. Drum mags are reliable but slow to reload under fire.",
    pros: ["Full-auto shotgun firepower", "Destroys light vehicles", "Devastating in CQB", "Drum mag intimidation factor", "Accepts all 12ga ammo types"],
    cons: ["10.4 lbs loaded", "Drum mags are bulky", "360 RPM burns ammo fast", "Recoil is punishing", "Overkill for most missions"]
  },
  {
    name: "M16A1",
    price: "$1 950",
    img: "https://i.imgur.com/KI5JJ0Y.jpeg",
    category: "rifle",
    fullName: "M16A1 | 5.56mm Assault Rifle",
    origin: "USA | 1967",
    specs: {
      caliber: "5.56×45mm NATO",
      weight: "3.4 kg (7.5 lbs) unloaded",
      length: "990mm (39 in) stock extended",
      barrel: "508mm (20 in) chrome-lined",
      action: "Direct impingement, rotating bolt",
      capacity: "20-round detachable box mag",
      rof: "700-950 rpm cyclic (varies)",
      muzzleVelocity: "975 m/s (3,200 ft/s)",
      effectiveRange: "460m (503 yd) point target",
      fireModes: "Semi-auto & Full-auto (original)"
    },
    description: "Vietnam legend. The rifle that started the 5.56mm revolution. Lightweight, accurate, and deadly when maintained. Chrome chamber solved the original reliability nightmares.",
    performance: "Ballistically superior to M4 variants—20\" barrel delivers full 5.56mm velocity. Prone to fouling from direct impingement. Keep it clean and it'll run forever. Vietnam vets called it 'The Black Rifle' for a reason.",
    pros: ["Lightweight design", "3,200 ft/s muzzle velocity", "Accurate at 500m", "Proven in Vietnam", "20\" barrel optimization"],
    cons: ["Direct impingement fouls quickly", "20-rnd mags limit firepower", "A1 sights are crude", "Full-auto is uncontrollable", "Requires constant lubrication"]
  },
  {
    name: "MP5K",
    price: "$1 750",
    img: "https://i.imgur.com/taEV1tk.jpeg",
    category: "smg",
    fullName: "Heckler & Koch MP5K | 9mm Submachine Gun",
    origin: "Germany | 1976",
    specs: {
      caliber: "9×19mm Parabellum",
      weight: "2.0 kg (4.4 lbs) unloaded",
      length: "325mm (12.8 in) no stock",
      barrel: "115mm (4.5 in) 3-lug",
      action: "Roller-delayed blowback",
      capacity: "30-round curved mag",
      rof: "900 rpm cyclic",
      muzzleVelocity: "375 m/s (1,230 ft/s)",
      effectiveRange: "100m (109 yd) practical",
      fireModes: "Semi-auto & Full-auto"
    },
    description: "The ultimate PDW. Compact enough for briefcase carry, fast enough for room-clearing. Roller-delayed blowback delivers SMG accuracy in a pistol-sized package. CIA favorite.",
    performance: "900 RPM cyclic rate is blistering—bursts dump mags in 2 seconds. Recoil is minimal due to roller system. At 100m, groups open to 6-8 inches. Under 50m, it's surgical.",
    pros: ["Ultra-compact design", "2.0 kg weight", "900 RPM rate of fire", "Roller-delayed recoil", "30-rnd mag capacity"],
    cons: ["9mm pistol caliber only", "Effective range limited to 100m", "Barrel too short for velocity", "Full-auto burns 30-rnds in 2s", "Specialized close-range only"]
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
          ${g.specs.map ? g.specs.map(s => `<li>${s}</li>`).join('') : Object.entries(g.specs).map(([k,v]) => `<li><strong>${k}:</strong> ${v}</li>`).join('')}
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
      <ul class="specs">
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
