const guns = [
  {
    name: "FN FAL",
    price: "$2 400",
    img: "https://i.imgur.com/EOLN4nO.png",
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
    img: "https://i.imgur.com/ASH96RK.png",
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
    img: "https://i.imgur.com/FTPo4CX.png",
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
    img: "https://i.imgur.com/hsoXXim.png",
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
    img: "https://i.imgur.com/LTUkMCN.png",
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
  },
  // NEW FIREARMS WITH CORRECTED IMAGE URLS
  {
    name: "AK-12",
    price: "$2 800",
    img: "https://i.imgur.com/8klRdJM.png",
    category: "rifle",
    fullName: "Kalashnikov AK-12 5.45mm Assault Rifle",
    description: "Russia's answer to the AR-15. Modernized AK platform with Picatinny rails, improved ergonomics, and balanced recoil system. Proven in Syrian field trials. Accepts standard AK-74 mags and new 60-round casket magazines.",
    performance: "Maintains 2 MOA accuracy through 20,000-round service life. Ambidextrous controls for left-handed operators. Three-round burst mode allows controlled fire at close range. Gas regulator switches between suppressed and unsuppressed flawlessly.",
    specs: {
      "Caliber": "5.45×39mm",
      "Weight": "3.5 kg (7.7 lbs) unloaded",
      "Length": "945mm (37.2 in) stock extended",
      "Barrel": "415mm (16.3 in) chrome-lined",
      "Action": "Gas-operated, rotating bolt",
      "Capacity": "30-round AK-74 mag",
      "Rate of Fire": "700 rpm cyclic",
      "Muzzle Velocity": "900 m/s (2,953 ft/s)",
      "Effective Range": "625m point target",
      "Fire Modes": "Semi, 3-round burst, Full-auto"
    },
    pros: ["Legendary AK reliability", "Modern rail system", "Ambidextrous controls", "Accepts 60-rnd drums", "5.45mm ammo light weight"],
    cons: ["Limited Western optic compatibility", "Polymer quality varies", "Heavier than AR-15", "Proprietary muzzle device", "5.45mm ammo scarce outside Russia"]
  },
  {
    name: "MK14 EBR",
    price: "$4 200",
    img: "https://i.imgur.com/mv3NBN4.png",
    category: "rifle",
    fullName: "Mk 14 Enhanced Battle Rifle 7.62mm",
    description: "The designated marksman's hammer. Navy SEALs' choice for Afghanistan's mountains. Turns a squad-level rifle into a precision engagement weapon capable of reaching out to 800m while maintaining full-auto capability for emergency situations.",
    performance: "Sub-MOA accuracy with match-grade ammo. Sage chassis eliminates all flex from the original M14 platform. Quick-detach scope mount returns to zero within 0.5 MOA. Effective against body armor at 500m with M993 AP ammo.",
    specs: {
      "Caliber": "7.62×51mm NATO",
      "Weight": "5.1 kg (11.2 lbs) unloaded",
      "Length": "1130mm (44.5 in) stock extended",
      "Barrel": "558mm (22 in) medium heavy",
      "Action": "Gas-operated, rotating bolt",
      "Capacity": "20-round M14 mag",
      "Rate of Fire": "725 rpm cyclic",
      "Muzzle Velocity": "850 m/s (2,789 ft/s)",
      "Effective Range": "800m point target",
      "Fire Modes": "Semi-auto & Full-auto"
    },
    pros: ["Sub-MOA precision", "800m effective range", "AP ammo capable", "Proven in Afghanistan", "Quick-detach optics"],
    cons: ["11.2 lbs loaded", "Requires match-grade ammo", "M14 mag compatibility only", "Muzzle blast signature", "Expensive precision"]
  },
  {
    name: "P90",
    price: "$2 150",
    img: "https://i.imgur.com/fJWyJmD.png",
    category: "smg",
    fullName: "FN P90 5.7×28mm Personal Defense Weapon",
    description: "The future from 1990. Top-mounted 50-round magazine feeds horizontally into this space-age PDW. Compact profile fits vehicle crews and VIP protection details. SS190 AP ammo defeats standard body armor at 200m.",
    performance: "900 RPM with minimal recoil due to bore axis alignment. 50-round magazine provides overwhelming fire superiority in CQB. Integrated reflex sight is battle-proven. Ambidextrous ejection perfect for left/right transitions.",
    specs: {
      "Caliber": "5.7×28mm SS190",
      "Weight": "2.6 kg (5.7 lbs) unloaded",
      "Length": "500mm (19.7 in) fixed",
      "Barrel": "263mm (10.4 in) chrome-lined",
      "Action": "Blowback, closed bolt",
      "Capacity": "50-round horizontal mag",
      "Rate of Fire": "900 rpm cyclic",
      "Muzzle Velocity": "715 m/s (2,346 ft/s)",
      "Effective Range": "200m practical",
      "Fire Modes": "Semi-auto & Full-auto"
    },
    pros: ["50-round capacity", "Defeats body armor", "Ultra-compact", "Ambidextrous design", "Minimal recoil impulse"],
    cons: ["Proprietary 5.7mm ammo", "Limited range", "Awkward reloads", "Magazine bulk", "Specialized role only"]
  },
  {
    name: "KRISS Vector",
    price: "$2 450",
    img: "https://i.imgur.com/ut1a1Ro.png",
    category: "smg",
    fullName: "KRISS Vector .45 ACP Submachine Gun",
    description: "Recoil-reduction revolution. Super V system redirects recoil energy down and away, allowing .45 ACP fire with 9mm controllability. .45 caliber stopping power without the traditional recoil penalty. Modern polymer construction.",
    performance: "Virtually zero muzzle climb during full-auto bursts. .45 ACP delivers one-shot stops in CQB. Compatible with Glock 21 magazines. Folding stock allows briefcase concealment. Maintains accuracy during sustained automatic fire.",
    specs: {
      "Caliber": ".45 ACP (11.43×23mm)",
      "Weight": "2.7 kg (6.0 lbs) unloaded",
      "Length": "617mm (24.3 in) stock extended",
      "Barrel": "230mm (9.1 in) threaded",
      "Action": "Delayed blowback, Super V",
      "Capacity": "13-round Glock mag",
      "Rate of Fire": "1200 rpm cyclic",
      "Muzzle Velocity": "270 m/s (885 ft/s)",
      "Effective Range": "100m practical",
      "Fire Modes": "Semi-auto & 2-round burst"
    },
    pros: ["Recoil-reduction system", ".45 ACP stopping power", "Glock mag compatible", "Minimal muzzle climb", "Folding stock"],
    cons: ["1200 RPM burns ammo", "Proprietary parts", "Limited 100m range", "Complex action", "13-rnd mag capacity"]
  },
  {
    name: "MP40",
    price: "$1 850",
    img: "https://i.imgur.com/3sk8ELO.png",
    category: "smg",
    fullName: "MP40 9mm Submachine Gun",
    description: "The Kraut classic. Sturmgeschütz der Infanterie. Open-bolt simplicity that functioned from Stalingrad to Normandy. All-stamp steel construction survived mud, snow, and sand. Collector value increasing yearly.",
    performance: "550 RPM is slow by modern standards, but allows excellent controllability. Heavy bolt reduces felt recoil. Prone to jamming if magazine is used as foregrip. Original magazines are reliable but single-stack limits capacity.",
    specs: {
      "Caliber": "9×19mm Parabellum",
      "Weight": "4.0 kg (8.8 lbs) unloaded",
      "Length": "833mm (32.8 in) stock extended",
      "Barrel": "251mm (9.9 in) smoothbore",
      "Action": "Open-bolt blowback",
      "Capacity": "32-round single-stack mag",
      "Rate of Fire": "550 rpm cyclic",
      "Muzzle Velocity": "380 m/s (1,247 ft/s)",
      "Effective Range": "150m practical",
      "Fire Modes": "Semi-auto & Full-auto"
    },
    pros: ["Historical proven reliability", "Controllable 550 RPM", "Simple maintenance", "Increasing collector value", "All-steel durability"],
    cons: ["Open-bolt design", "32-rnd mag capacity", "Heavy for caliber", "Obsolescent design", "Parts availability limited"]
  },
  {
    name: "PPSh-41",
    price: "$1 250",
    img: "https://i.imgur.com/vsM8SzP.png",
    category: "smg",
    fullName: "PPSh-41 7.62×25mm Submachine Gun",
    description: "The burp gun. Soviet simplicity at its finest—crude but effective. 71-round drum magazine provided overwhelming suppressive fire. Machined receiver and chrome-lined barrel lasted decades in third-world arsenals.",
    performance: "900 RPM with minimal parts count. Open-bolt design runs dirty indefinitely. Drum magazines are reliable when loaded properly. 7.62x25mm Tokarev penetrates soft armor. Effective in urban combat despite age.",
    specs: {
      "Caliber": "7.62×25mm Tokarev",
      "Weight": "3.6 kg (7.9 lbs) unloaded",
      "Length": "843mm (33.2 in) stock extended",
      "Barrel": "269mm (10.6 in) chrome-lined",
      "Action": "Open-bolt blowback",
      "Capacity": "71-round drum mag",
      "Rate of Fire": "900 rpm cyclic",
      "Muzzle Velocity": "488 m/s (1,600 ft/s)",
      "Effective Range": "150m practical",
      "Fire Modes": "Semi-auto & Full-auto"
    },
    pros: ["71-rnd drum capacity", "Chrome-lined barrel", "Extreme simplicity", "Armor-piercing caliber", "Proven in WWII/Cold War"],
    cons: ["Open-bolt design", "7.62 Tokarev ammo scarce", "Crude iron sights", "Heavy empty weight", "Spare parts rare"]
  },
  {
    name: "Saiga-12K",
    price: "$1 650",
    img: "https://i.imgur.com/Q4s6Gi5.png",
    category: "shotgun",
    fullName: "Saiga-12K 12-Gauge Combat Shotgun",
    description: "Kalashnikov's scattergun. AK action scaled up to 12-gauge reliability. Semi-auto firepower with 10-round box magazines. Short-barreled K-variant perfect for vehicle entry. Runs everything from birdshot to magnum slugs.",
    performance: "Gas regulator adjusts for light or heavy loads. AK durability in shotgun form—runs dirty and wet. 10-round mags allow faster reloads than traditional tube-fed. Muzzle brake reduces recoil significantly. Military proven in Russian service.",
    specs: {
      "Caliber": "12-gauge 2¾\" & 3\" shells",
      "Weight": "3.8 kg (8.4 lbs) unloaded",
      "Length": "910mm (35.8 in) stock extended",
      "Barrel": "430mm (16.9 in) chrome-lined",
      "Action": "Gas-operated, rotating bolt",
      "Capacity": "10-round detachable box mag",
      "Rate of Fire": "Semi-automatic only",
      "Muzzle Velocity": "400 m/s (1,312 ft/s) w/ slug",
      "Effective Range": "50m buckshot / 120m slug",
      "Fire Modes": "Semi-auto only"
    },
    pros: ["AK reliability", "10-rnd box mags", "Adjustable gas system", "Chrome-lined barrel", "Accepts all 12ga shells"],
    cons: ["Heavy recoil without brake", "Magazines bulky", "Cycling issues with light loads", "Russian optics mount only", "Limited parts in West"]
  },
  {
    name: "DP-12",
    price: "$1 350",
    img: "https://i.imgur.com/EApk2lQ.png",
    category: "shotgun",
    fullName: "Standard Manufacturing DP-12 12-Gauge Double Barrel Pump Shotgun",
    description: "Double-barrel pump innovation. Two independent tubes provide 16 rounds of capacity. Twin triggers allow immediate follow-up shots. Bullpup design keeps overall length compact despite 18-inch barrels.",
    performance: "Pump action cycles both barrels simultaneously. 16-round capacity eliminates mid-fight reloads. Dual triggers allow barrel selection or rapid doubles. Bottom ejection is ambidextrous. Choke tubes allow pattern customization.",
    specs: {
      "Caliber": "12-gauge 2¾\" & 3\" shells",
      "Weight": "4.2 kg (9.3 lbs) unloaded",
      "Length": "749mm (29.5 in) overall",
      "Barrel": "2× 470mm (18.5 in) threaded",
      "Action": "Pump-action, double-barrel",
      "Capacity": "14+2 rounds (7 per tube)",
      "Rate of Fire": "Pump-action manual",
      "Muzzle Velocity": "400 m/s (1,312 ft/s) w/ slug",
      "Effective Range": "45m buckshot / 110m slug",
      "Fire Modes": "Manual action"
    },
    pros: ["16-round capacity", "Double-barrel flexibility", "Compact bullpup design", "Ambidextrous ejection", "Choke tube compatibility"],
    cons: ["9.3 lbs loaded", "Pump-action only", "Two trigger learning curve", "Reloads are slow", "Proprietary design"]
  },
  {
    name: "Winchester 1897",
    price: "$1 100",
    img: "https://i.imgur.com/6myYaba.png",
    category: "shotgun",
    fullName: "Winchester Model 1897 12-Gauge Trench Gun",
    description: "The original trench sweeper. Slam-fire capable pump action terrorized German trenches in WWI. External hammer and solid frame lasted 125 years of production. Collector piece that still functions flawlessly in combat.",
    performance: "Slam-fire allows rapid shots by holding trigger and pumping. Cylinder bore spreads buckshot wide for CQB. Heat shield protects hands during sustained fire. Bayonet lug accepts M1917 trench knife. Proven reliability with blackpowder and modern shells.",
    specs: {
      "Caliber": "12-gauge 2¾\" shells",
      "Weight": "3.6 kg (7.9 lbs) unloaded",
      "Length": "1000mm (39.4 in) fixed",
      "Barrel": "510mm (20 in) cylinder bore",
      "Action": "Pump-action, slam-fire",
      "Capacity": "5+1 rounds tube-fed",
      "Rate of Fire": "Manual slam-fire capable",
      "Muzzle Velocity": "380 m/s (1,247 ft/s) w/ slug",
      "Effective Range": "40m buckshot / 90m slug",
      "Fire Modes": "Manual pump action"
    },
    pros: ["Slam-fire capability", "125-year proven design", "Bayonet mount", "Heat shield included", "Collector value"],
    cons: ["Tube fed slow reloads", "No choke options", "External hammer snag risk", "Obsolete design", "5-rnd capacity"]
  },
  {
    name: "SPR310",
    price: "$650",
    img: "https://i.imgur.com/RdKtcq0.png",
    category: "shotgun",
    fullName: "Savage SPR310 12-Gauge Double Barrel Shotgun",
    description: "The budget breaker. Side-by-side simplicity for the frugal operator. No gas system to fail, no magazine to jam. Break-action reliability for entry teams on a budget. Chrome-lined barrels resist corrosion in jungle environments.",
    performance: "Double triggers allow barrel selection for different loads. Extractors only—no ejectors to announce your position. 28-inch barrels provide tight patterns for entry work. Case-hardened receiver withstands abuse. Simple maintenance in field conditions.",
    specs: {
      "Caliber": "12-gauge 2¾\" & 3\" shells",
      "Weight": "3.2 kg (7.1 lbs) unloaded",
      "Length": "1143mm (45 in) overall",
      "Barrel": "2× 710mm (28 in) chrome-lined",
      "Action": "Break-action side-by-side",
      "Capacity": "2 rounds",
      "Rate of Fire": "Manual break-action",
      "Muzzle Velocity": "385 m/s (1,263 ft/s) w/ slug",
      "Effective Range": "50m buckshot / 100m slug",
      "Fire Modes": "Manual action"
    },
    pros: ["Ultra-reliable break-action", "Chrome-lined barrels", "Lightweight design", "Budget-friendly price", "Simple maintenance"],
    cons: ["2-round capacity", "Slow reloads", "Long 45\" overall length", "No choke tubes", "Extractors only"]
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

const style = document.createElement('style');
style.textContent = `
  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(139,0,0,0.7); }
    70% { box-shadow: 0 0 0 10px rgba(139,0,0,0); }
    100% { box-shadow: 0 0 0 0 rgba(139,0,0,0); }
  }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
      filterGuns(this.dataset.category);
    });
  });
  
  renderGuns();
});
