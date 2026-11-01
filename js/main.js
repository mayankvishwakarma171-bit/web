/**
 * KRAVIONEX MACHINERY LLP - Official Interactive System
 * Engineering Precision. Delivering Performance.
 */

// Machine Portfolio Database
const KRAVIONEX_MACHINERY = [
  {
    id: 'circular-batch-fryer-he',
    title: 'Circular Batch Fryer with Pellet Heat Exchanger',
    category: 'batch',
    badge: 'High Thermal Efficiency',
    fuel: 'Pellet / Gas / Diesel / Wooden Boiler',
    pageUrl: 'circular-batch-fryer-he.html',
    image: 'assets/images/circular-batch-fryer-pellet-he.png',
    summary: 'Precision-engineered circular batch fryer integrated with an external pellet-fired heat exchanger, continuous circulation pump, and stainless steel oil holding vessel.',
    application: 'Potato Chips, Banana Chips, Namkeen, Cashews, Peanuts, Extruded Pellets',
    capacity: '40 - 150 kg/hr (Batch dependent)',
    specs: {
      'Material': 'Food-Grade Stainless Steel AISI 304 / 316',
      'Kettle Diameter': '36" – 48"',
      'Heating & Fuel Options': 'Pellet / Gas / Diesel / Wooden Boiler',
      'Oil Circulation': 'High-temperature centrifugal glandless pump',
      'Tilting Mechanism': 'Manual counter-balanced or motorized discharge chute',
      'Control System': 'Digital PID / PLC Touchscreen temperature regulator',
      'Thermal Efficiency': 'Up to 82% fuel utilization with automated combustion'
    }
  },
  {
    id: 'rectangular-batch-fryer',
    title: 'Rectangular Tilting Batch Fryer with Biomass Heat Exchanger',
    category: 'batch',
    badge: 'Tilting Basket System',
    fuel: 'Pellet / Gas / Diesel / Wooden Boiler',
    pageUrl: 'rectangular-batch-fryer.html',
    image: 'assets/images/rectangular-batch-fryer.png',
    summary: 'Heavy-duty rectangular frying kettle featuring motorized basket tilting, continuous oil filtration bucket, air-cooled pump, and automated pellet burner unit.',
    application: 'Potato Chips, Namkeen Batches, Fryums, Kurkure, Banana Slices',
    capacity: '50 - 200 kg/hr',
    specs: {
      'Material': 'AISI 304 food contact surfaces with insulated double jacket',
      'Basket Size': '4 ft x 2.5 ft / 5 ft x 3 ft',
      'Heating & Fuel Options': 'Pellet / Gas / Diesel / Wooden Boiler',
      'Discharge': 'Heavy-duty hydraulic / motorized tilting basket',
      'Filtration': 'Continuous bucket coarse particulate filter',
      'Pump': 'Air-cooled heavy duty thermal oil pump',
      'Oil Quality': 'Rapid oil turnover minimizes free fatty acid (FFA) buildup'
    }
  },
  {
    id: 'continuous-fryer-pellet',
    title: 'Continuous Namkeen & Pellet Fryer with Pellet Heat Exchanger',
    category: 'continuous',
    badge: 'Continuous High-Volume Line',
    fuel: 'Pellet / Gas / Diesel / Wooden Boiler',
    pageUrl: 'continuous-fryer-pellet.html',
    image: 'assets/images/continuous-fryer-pellet-he.png',
    summary: 'Industrial continuous frying system with multi-layer flight conveyor, sediment removal, external high-efficiency pellet heat exchanger, and centralized touchscreen PLC.',
    application: 'Nylon Sev, Ratlami Sev, Boondi, 2D/3D Pellets, Kurkure, Bhujia',
    capacity: '150 - 600 kg/hr continuous output',
    specs: {
      'Conveyor Belt': 'Stainless steel balanced weave with hold-down submersing belt',
      'Pan Construction': 'Low-volume SS-304 pan designed for fast oil turnover',
      'Heating & Fuel Options': 'Pellet / Gas / Diesel / Wooden Boiler',
      'Exhaust Hood': 'Motorized hood lifting arrangement for effortless CIP cleaning',
      'Heat Exchanger': 'High-capacity vertical heat exchanger system',
      'Filtration': 'Continuous continuous mesh filter for fine debris removal',
      'Automation': 'PLC with recipes, variable speed drives (VFD) for dwell time control'
    }
  },
  {
    id: 'continuous-fryer-boiler',
    title: 'Multi Product Continuous Frying System',
    category: 'continuous',
    badge: 'Turnkey Industrial Scale',
    fuel: 'Pellet / Gas / Diesel / Wooden Boiler',
    pageUrl: 'multi-product-continuous-frying-system.html',
    image: 'assets/images/continuous-fryer-boiler.png',
    summary: 'High-throughput continuous multi-product frying system equipped with external vertical thermal oil heater, continuous fine filter, jacketed cooling tank, and multi-sensor PLC cabinet.',
    application: 'Industrial Potato Chips, Multi-grain Snacks, Boondi, Sev, Chana Dal, Pellets',
    capacity: '300 - 1,200 kg/hr',
    specs: {
      'Heating & Fuel Options': 'Pellet / Gas / Diesel / Wooden Boiler',
      'Oil Cooling': 'Rapid drain oil storage tank with integrated cooling system',
      'Filter Unit': 'Dual continuous rotary/wedge wire debris separator',
      'Dwell Time': '30 seconds to 6 minutes adjustable via VFD',
      'Safety Compliance': 'Emergency dump valve, stack temperature monitoring',
      'Control Cabinet': 'Floor-mounted industrial PLC touchscreen control desk'
    }
  },
  {
    id: 'automatic-sev-boondi-line',
    title: 'Fully Automatic Boondi & Nylon Sev Production Line',
    category: 'turnkey',
    badge: 'Turnkey End-to-End Plant',
    fuel: 'Pellet / Gas / Diesel / Wooden Boiler',
    pageUrl: 'automatic-sev-boondi-line.html',
    image: 'assets/images/automatic-sev-boondi-line.png',
    summary: 'Complete automated continuous processing arrangement from slurry preparation, bundi/sev dropping attachment, continuous fryer, continuous hydro de-oiler, cooling conveyor to zig-zag flavouring drum.',
    application: 'Nylon Sev, Bikaneri Bhujia, Sweet & Salted Boondi, Papdi',
    capacity: '200 - 800 kg/hr integrated line',
    specs: {
      'Line Components': 'Slurry Tank -> Dropper Head -> Continuous Fryer -> Hydro De-oiler -> Cooling Conveyor -> Zig-Zag Flavour Drum',
      'Heating & Fuel Options': 'Pellet / Gas / Diesel / Wooden Boiler',
      'De-Oiler': 'Continuous centrifugal hydro system reducing surface oil content',
      'Cooling Section': 'Sanitary mesh conveyor with food-grade cooling blowers',
      'Seasoning System': 'Precision powder dispenser with continuous rotating drum',
      'Material Finish': 'All contact surfaces electro-polished AISI 304'
    }
  },
  {
    id: 'semi-automatic-chips-line',
    title: 'Semi-Automatic Potato Chips Line (50 & 100 kg/hr)',
    category: 'turnkey',
    badge: 'Commercial Enterprise Solution',
    fuel: 'Pellet / Gas / Diesel / Wooden Boiler',
    pageUrl: 'semi-automatic-chips-line.html',
    image: 'assets/images/semi-automatic-chips-line.png',
    summary: 'Modular, high-return processing line featuring peeler, high-speed slicer, rectangular fryer with tilting system, vibro shaker with oil collection, inspection conveyor, and continuous flavour applicator.',
    application: 'Potato Chips (Plain, Ridged, Kettle Style), Plantain/Banana Chips',
    capacity: '50 kg/hr & 100 kg/hr finished product output',
    specs: {
      'Output Rated': '50 kg/hr & 100 kg/hr finished potato chips',
      'Heating & Fuel Options': 'Pellet / Gas / Diesel / Wooden Boiler',
      'Slicing Unit': 'Adjustable thickness circular rotary slicer with wash flume',
      'Oil Collection': 'Vibratory de-watering & oil separation tray',
      'Flavouring': 'Continuous stainless steel seasoning applicator and tumbler',
      'Footprint': 'Compact linear layout suitable for commercial sheds'
    }
  },
  {
    id: 'shell-tube-circular-fryer',
    title: 'Circular Batch Fryer with Shell & Tube External Heat Exchanger',
    category: 'batch',
    badge: 'Sanitary Shell & Tube',
    fuel: 'Pellet / Gas / Diesel / Wooden Boiler',
    pageUrl: 'shell-tube-circular-fryer.html',
    image: 'assets/images/shell-tube-circular-fryer.png',
    summary: 'Advanced circular batch fryer linked with a horizontal shell-and-tube heat exchanger, circulation booster pump, fine bucket filter, and remote electrical control desk.',
    application: 'Premium Potato Chips, Banana Wafers, Nuts, Sweets Frying',
    capacity: '60 - 180 kg/hr',
    specs: {
      'Exchanger Type': 'Multi-pass SS 316L shell and tube thermal exchanger',
      'Heating & Fuel Options': 'Pellet / Gas / Diesel / Wooden Boiler',
      'Oil Velocity': 'Calculated high-velocity flow preventing oil hot-spots',
      'Temperature Precision': '±1.5°C dynamic thermal regulation',
      'Filter': 'Quick-release stainless steel filter basket with safety bypass',
      'Tilting': 'Pneumatic or counterweight ergonomic tilting basket'
    }
  },
  {
    id: 'namkeen-extruder-machine',
    title: 'Heavy-Duty Namkeen & Sev Extruder Machine',
    category: 'extrusion',
    badge: 'Multi-Die Extrusion',
    fuel: 'Electric (415V, 3-Phase) / Line-Integrated',
    pageUrl: 'namkeen-extruder-machine.html',
    image: 'assets/images/namkeen-extruder-machine.png',
    summary: 'Precision overhead namkeen extruder with pivoting counter-balanced arm, quick-change brass and stainless steel dies, adjustable pressing speed, and mobile castor base.',
    application: 'Sev, Gathiya, Papdi, Bhujia, Chakli, Murukku',
    capacity: '80 - 300 kg/hr dough extrusion',
    specs: {
      'Construction': 'Food contact SS-304 cylinder and piston assembly',
      'Power / Drive': 'Electric 415V 3-Phase with Variable Frequency Drive (VFD)',
      'Mounting': 'Rigid swivel arm directly mountable over circular or rectangular fryers',
      'Dies Included': 'Interchangeable dies for Fine Sev, Medium Sev, Thick Gathiya, Papdi',
      'Mobility': 'Heavy-duty lockable castor wheels for multi-pan servicing'
    }
  },
  {
    id: 'potato-slicer-machine',
    title: 'High-Speed Commercial Potato & Plantain Slicer',
    category: 'prep',
    badge: 'Digital Touch Controller',
    fuel: 'Electric (415V, 3-Phase) / Line-Integrated',
    pageUrl: 'potato-slicer-machine.html',
    image: 'assets/images/potato-slicer-machine.png',
    summary: 'High-speed vegetable slicing system featuring water injection feed, digital touchscreen interface, rotary cutting rotor with hardened stainless steel blades, and mobile base.',
    application: 'Potatoes, Sweet Potatoes, Raw Bananas / Plantains, Cassava / Tapioca',
    capacity: '300 - 800 kg/hr raw input',
    specs: {
      'Blade Options': 'Flat plain slices, crinkle/wave cuts, shredding/straw cuts',
      'Thickness Adjustment': '0.8 mm to 3.5 mm micrometer precision gauge',
      'Power Drive': 'Electric 415V 3-Phase with safety proximity interlocking',
      'Water Lubrication': 'Integrated water spray manifold for starch rinsing'
    }
  },
  {
    id: 'potato-peeler-machine',
    title: 'Industrial Abrasive Potato & Root Vegetable Peeler',
    category: 'prep',
    badge: 'Carborundum Abrasive',
    fuel: 'Electric (415V, 3-Phase) / Line-Integrated',
    pageUrl: 'potato-peeler-machine.html',
    image: 'assets/images/potato-peeler-machine.png',
    summary: 'Food-grade vertical abrasive peeler with carborundum lined chamber, continuous water flushing spray, quick discharge door, and stainless steel structural enclosure.',
    application: 'Potatoes, Ginger, Carrots, Taro, Beetroot',
    capacity: '150 - 400 kg/hr (15 - 30 kg per batch cycle)',
    specs: {
      'Cycle Time': '90 to 180 seconds per batch cycle',
      'Lining': 'Long-lasting silicon carbide carborundum bonded disk and walls',
      'Waste Separation': 'Bottom drain with starch and peel collection filter screen',
      'Body': 'Heavy-gauge AISI 304 with vibration damping feet'
    }
  },
  {
    id: 'flavouring-drum-machine',
    title: 'Industrial Octagonal Seasoning & Flavouring Drum',
    category: 'prep',
    badge: 'Gentle Tumble Coating',
    fuel: 'Electric (415V, 3-Phase) / Line-Integrated',
    pageUrl: 'flavouring-drum-machine.html',
    image: 'assets/images/flavouring-drum-machine.png',
    summary: 'Stainless steel octagonal tumbling drum designed for uniform powder adhesion without product breakage, featuring adjustable tilt angle and castor wheels.',
    application: 'Potato Chips, Namkeen, Fried Peanuts, Extruded Pellets, Makhana',
    capacity: '50 - 250 kg/hr batch or continuous mode',
    specs: {
      'Drum Geometry': 'Octagonal facet design engineered for gentle product turnover',
      'Material': 'Mirror-finished AISI 304 food-grade stainless steel',
      'Power / Drive': 'Electric 415V with VFD adjustable rotation speed',
      'Tilt Adjustment': 'Manual screw or motorized tilt angle adjustment'
    }
  },
  {
    id: 'circular-batch-fryer-furnace',
    title: 'Direct-Fired Circular Batch Fryer with Biomass Pellet Furnace',
    category: 'batch',
    badge: 'Economical Biomass Fired',
    fuel: 'Pellet / Gas / Diesel / Wooden Boiler',
    pageUrl: 'circular-batch-fryer-furnace.html',
    image: 'assets/images/circular-batch-fryer-furnace.png',
    summary: 'Rugged circular batch fryer with direct-coupled automated pellet furnace, thermal insulation jacket, analog temperature monitoring, and high-lip discharge chute.',
    application: 'Local & Regional Namkeen, Banana Wafers, Sev, Fafda, Samosa Frying',
    capacity: '30 - 100 kg/hr',
    specs: {
      'Pan Diameter': '36" / 42" / 48" deep-drawn stainless steel pan',
      'Heating & Fuel Options': 'Pellet / Gas / Diesel / Wooden Boiler',
      'Fuel Efficiency': 'Up to 60% fuel cost savings compared to commercial LPG',
      'Discharge': 'Ergonomic wide pour chute with oil strainer'
    }
  }
];

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initMegaMenu();
  initMobileDropdowns();
  initCategoryFilters();
  initMachineryCards();
  initModalSystem();
  initRfqForm();
});

// Sticky Header & Scroll Effects
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// =============================================
// MEGA-MENU: Desktop Hover + Click Toggle
// =============================================
function initMegaMenu() {
  const dropdownItems = document.querySelectorAll('.nav-has-dropdown');
  if (!dropdownItems.length) return;

  dropdownItems.forEach(item => {
    let closeTimer = null;

    // Open on mouseenter
    item.addEventListener('mouseenter', () => {
      clearTimeout(closeTimer);
      item.classList.add('open');
    });

    // Close on mouseleave with slight delay (prevents flicker)
    item.addEventListener('mouseleave', () => {
      closeTimer = setTimeout(() => {
        item.classList.remove('open');
      }, 100);
    });

    // Toggle on click (for keyboard/touch accessibility)
    const trigger = item.querySelector('.nav-link-dropdown');
    if (trigger) {
      trigger.addEventListener('click', (e) => {
        // Only prevent default on the caret/button — allow link clicks to go through
        const isCaret = e.target.closest('.caret');
        if (isCaret) {
          e.preventDefault();
          e.stopPropagation();
          item.classList.toggle('open');
          return;
        }
        // If menu is open, let the link navigate; otherwise open menu first
        if (!item.classList.contains('open')) {
          e.preventDefault();
          item.classList.add('open');
        }
      });
    }
  });

  // Close mega-menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-has-dropdown')) {
      dropdownItems.forEach(item => item.classList.remove('open'));
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      dropdownItems.forEach(item => item.classList.remove('open'));
    }
  });
}

// =============================================
// MOBILE DROPDOWN ACCORDION (Products sub-links)
// =============================================
function initMobileDropdowns() {
  const mobileDropdownItems = document.querySelectorAll('.mobile-has-dropdown');
  if (!mobileDropdownItems.length) return;

  mobileDropdownItems.forEach(item => {
    const trigger = item.querySelector('a');
    if (!trigger) return;

    trigger.addEventListener('click', (e) => {
      // Check if click was on the caret/anchor text area (not a sub-link)
      const subLinks = item.querySelector('.mobile-sub-links');
      if (!subLinks) return;

      // Prevent navigation when toggling dropdown (only toggle if no caret was clicked separately)
      // We detect if the href goes to another page
      const href = trigger.getAttribute('href');
      const isExternal = href && href !== '#' && !href.startsWith('#');
      
      // If the dropdown is already open, allow navigation; otherwise open it first
      if (!item.classList.contains('open')) {
        e.preventDefault();
        // Close all other open dropdowns
        mobileDropdownItems.forEach(other => {
          if (other !== item) other.classList.remove('open');
        });
        item.classList.add('open');
      }
      // If open: clicking again navigates (default link behavior)
    });
  });
}

// Mobile Menu Navigation
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const overlay = document.querySelector('.drawer-overlay');
  const closeBtn = document.querySelector('.mobile-drawer-close');
  
  if (!toggleBtn || !drawer) return;
  
  const openMenu = () => {
    drawer.classList.add('open');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };
  
  const closeMenu = () => {
    drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  };
  
  toggleBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);
  
  // Close menu on clicking mobile nav links
  document.querySelectorAll('.mobile-nav-links a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// Category Filter System
function initCategoryFilters() {
  const filterPills = document.querySelectorAll('.category-pill');
  if (!filterPills.length) return;
  
  filterPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.preventDefault();
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      
      const filterCategory = pill.getAttribute('data-filter') || 'all';
      filterMachinery(filterCategory);
    });
  });
}

function filterMachinery(category) {
  const cards = document.querySelectorAll('.machine-card');
  cards.forEach(card => {
    const cardCat = card.getAttribute('data-category');
    if (category === 'all' || cardCat === category) {
      card.style.display = 'flex';
      setTimeout(() => card.style.opacity = '1', 50);
    } else {
      card.style.opacity = '0';
      setTimeout(() => card.style.display = 'none', 200);
    }
  });
}

// Render or Bind Machinery Cards
function initMachineryCards() {
  const grids = document.querySelectorAll('.machinery-grid');
  if (!grids.length) return;
  
  grids.forEach(grid => {
    if (grid.children.length === 0) {
      renderMachineryGrid(grid, KRAVIONEX_MACHINERY);
    }
  });
  bindModalTriggers();
}

function renderMachineryGrid(container, items) {
  container.innerHTML = items.map(m => `
    <article class="machine-card" data-id="${m.id}" data-category="${m.category}">
      <div class="machine-card-image">
        <span class="machine-badge">${m.badge}</span>
        <span class="machine-fuel-tag">${m.fuel}</span>
        <img src="${m.image}" alt="${m.title}" loading="lazy">
      </div>
      <div class="machine-card-body">
        <span class="machine-category-name">${m.category.toUpperCase()} MACHINERY</span>
        <h3 class="machine-title">${m.title}</h3>
        <p class="machine-summary">${m.summary}</p>
        
        <div class="machine-specs-table">
          <div class="machine-spec-row">
            <span class="spec-label">Applications:</span>
            <span class="spec-val">${m.application}</span>
          </div>
          <div class="machine-spec-row">
            <span class="spec-label">Capacity Range:</span>
            <span class="spec-val">${m.capacity}</span>
          </div>
          <div class="machine-spec-row">
            <span class="spec-label">Standard Grade:</span>
            <span class="spec-val">SS-304 / SS-316 Contact</span>
          </div>
        </div>

        <div class="machine-card-footer">
          <button class="btn btn-primary btn-sm view-specs-btn" data-id="${m.id}">
            View Technical Specs
          </button>
          <button class="btn btn-outline-gold btn-sm rfq-quick-btn" data-id="${m.id}" data-name="${m.title}">
            Inquire
          </button>
        </div>
      </div>
    </article>
  `).join('');
  
  bindModalTriggers();
}

function bindModalTriggers() {
  document.querySelectorAll('.view-specs-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-id');
      openMachineModal(id);
    });
  });
  
  document.querySelectorAll('.rfq-quick-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const machineName = btn.getAttribute('data-name');
      const rfqSelect = document.getElementById('rfq-equipment');
      if (rfqSelect) {
        // Find or set matching option
        let matched = false;
        for (let opt of rfqSelect.options) {
          if (opt.text.toLowerCase().includes(machineName.toLowerCase().slice(0, 15))) {
            opt.selected = true;
            matched = true;
            break;
          }
        }
        if (!matched && rfqSelect.options.length > 0) {
          rfqSelect.value = 'custom';
        }
      }
      
      const rfqSection = document.getElementById('rfq-section');
      if (rfqSection) {
        rfqSection.scrollIntoView({ behavior: 'smooth' });
        const comments = document.getElementById('rfq-message');
        if (comments) {
          comments.value = `Hello Kravionex Engineering, I am interested in technical specs and quotation for: ${machineName}. Please provide plant layout guidance.`;
          comments.focus();
        }
      }
    });
  });
}

// Modal System
function initModalSystem() {
  const modal = document.getElementById('machine-modal');
  if (!modal) return;
  
  const closeBtn = modal.querySelector('.modal-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => closeModal());
  }
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

function openMachineModal(id) {
  const machine = KRAVIONEX_MACHINERY.find(m => m.id === id);
  if (!machine) return;
  
  const modal = document.getElementById('machine-modal');
  if (!modal) return;
  
  const modalTitle = modal.querySelector('#modal-machine-title');
  const modalImg = modal.querySelector('#modal-machine-img');
  const modalDesc = modal.querySelector('#modal-machine-desc');
  const modalSpecsBody = modal.querySelector('#modal-specs-rows');
  const modalBadge = modal.querySelector('#modal-machine-badge');
  const modalRfqBtn = modal.querySelector('#modal-rfq-btn');
  
  if (modalTitle) modalTitle.textContent = machine.title;
  if (modalImg) {
    modalImg.src = machine.image;
    modalImg.alt = machine.title;
  }
  if (modalDesc) modalDesc.textContent = machine.summary;
  if (modalBadge) modalBadge.textContent = machine.badge;
  
  if (modalSpecsBody) {
    let html = `
      <tr><th>Target Products</th><td>${machine.application}</td></tr>
      <tr><th>Rated Capacity</th><td><strong>${machine.capacity}</strong></td></tr>
      <tr><th>Heating & Fuel Options</th><td><strong style="color: var(--accent-gold-dark);">${machine.fuel}</strong></td></tr>
    `;
    for (const [key, val] of Object.entries(machine.specs)) {
      if (key !== 'Heating & Fuel Options') {
        html += `<tr><th>${key}</th><td>${val}</td></tr>`;
      }
    }
    if (machine.pageUrl) {
      html += `
        <tr>
          <th>Dedicated Page</th>
          <td>
            <a href="${machine.pageUrl}" class="btn btn-outline-gold btn-sm" style="font-size: 0.8rem; padding: 0.35rem 0.8rem;">
              Open Full Machine Specifications Page →
            </a>
          </td>
        </tr>
      `;
    }
    modalSpecsBody.innerHTML = html;
  }
  
  if (modalRfqBtn) {
    modalRfqBtn.onclick = () => {
      closeModal();
      const rfqEquipment = document.getElementById('rfq-equipment');
      if (rfqEquipment) {
        rfqEquipment.value = machine.category;
      }
      const rfqMessage = document.getElementById('rfq-message');
      if (rfqMessage) {
        rfqMessage.value = `Quotation request for ${machine.title}. Please provide drawing and capacity options.`;
      }
      const rfqSec = document.getElementById('rfq-section');
      if (rfqSec) rfqSec.scrollIntoView({ behavior: 'smooth' });
    };
  }
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('machine-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// RFQ Form Submission Handler - Connected Directly to +91 9930985514
function initRfqForm() {
  const forms = document.querySelectorAll('form[id^="rfq-form"]');
  if (!forms.length) return;
  
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = form.querySelector('[id$="name"]')?.value || 'Client';
      const company = form.querySelector('[id$="company"]')?.value || 'Enterprise';
      const phone = form.querySelector('[id$="phone"]')?.value || '';
      const email = form.querySelector('[id$="email"]')?.value || '';
      const equipmentSelect = form.querySelector('[id$="equipment"]');
      const equipment = equipmentSelect ? (equipmentSelect.options[equipmentSelect.selectedIndex]?.text || equipmentSelect.value) : 'General Machinery';
      const capacity = form.querySelector('[id$="capacity"]')?.value || 'Standard';
      const message = form.querySelector('[id$="message"]')?.value || 'Please share detailed technical quotation and plant layout CAD drawing.';
      
      // Construct structured WhatsApp message for +91 9930985514
      const whatsappText = 
`*NEW MACHINERY ENQUIRY - KRAVIONEX MACHINERY LLP*
----------------------------------------
*Client Name:* ${name}
*Company / Brand:* ${company}
*Contact / WhatsApp:* ${phone}
*Email:* ${email}
*Equipment of Interest:* ${equipment}
*Target Capacity:* ${capacity}
*Project Requirements:*
${message}
----------------------------------------
_Dispatched via Kravionex Official Website_`;

      const targetNumber = '919930985514';
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${targetNumber}&text=${encodeURIComponent(whatsappText)}`;
      
      // Update UI Status Box
      const statusBox = form.querySelector('[id$="status-msg"]') || document.getElementById('rfq-status-msg');
      if (statusBox) {
        statusBox.innerHTML = `
          <div style="background: rgba(37, 211, 102, 0.12); border: 1.5px solid #25D366; padding: 1.25rem; border-radius: 8px; margin-top: 1.25rem; color: #FFFFFF;">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span style="background: #25D366; color: #141C22; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 0.85rem;">✓</span>
              <h4 style="color: #6EE7B7; margin: 0; font-family: var(--font-sans); font-size: 1.05rem;">
                Enquiry Dispatched to Domestic Sales Desk (+91 9930985514)
              </h4>
            </div>
            <p style="font-size: 0.9rem; color: #E2E8F0; line-height: 1.6; margin-bottom: 0.85rem;">
              Thank you, <strong>${name}</strong> (${company}). Your specifications for <strong>${equipment} (${capacity})</strong> have been formatted for our Maharashtra engineering desk.
            </p>
            <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
              <a href="${whatsappUrl}" target="_blank" class="btn btn-primary btn-sm" style="background-color: #25D366; border-color: #25D366; color: #141C22; font-weight: 700;">
                💬 Open in WhatsApp Desk (+91 9930985514)
              </a>
              <a href="mailto:kravionex.machinery@gmail.com?subject=${encodeURIComponent('Machinery Enquiry from ' + company + ' - ' + equipment)}&body=${encodeURIComponent(whatsappText)}" class="btn btn-outline-gold btn-sm" style="color: #FFFFFF;">
                ✉️ Send via Email
              </a>
            </div>
          </div>
        `;
        statusBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      // Automatically trigger WhatsApp window
      window.open(whatsappUrl, '_blank');
    });
  });
}
