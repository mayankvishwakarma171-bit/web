$pages = @(
  @{file="semi-automatic-chips-line.html";title="Semi-Automatic Potato Chips Line";badge="Commercial Enterprise Solution";image="assets/images/semi-automatic-chips-line.png";fuel="Pellet / Gas / Diesel / Wooden Boiler";summary="Modular high-return processing line featuring peeler, high-speed slicer, rectangular fryer with tilting system, vibro shaker, and continuous flavour applicator.";overview="The Kravionex Semi-Automatic Potato Chips Processing Line is the most proven high-ROI investment for snack enterprises transitioning from artisanal cooking to standardized commercial production. Designed for outputs of 50 kg/hr and 100 kg/hr of finished crispy chips, the line synchronizes washing, peeling, high-speed rotary slicing, starch rinsing, frying, vibratory de-oiling, and tumble seasoning.";snacks="Potato Chips, Wavy Chips, Banana Wafers, Sweet Potato Chips, Masala Chips"},
  @{file="shell-tube-circular-fryer.html";title="Circular Batch Fryer with Shell and Tube Heat Exchanger";badge="Sanitary Shell and Tube";image="assets/images/shell-tube-circular-fryer.png";fuel="Pellet / Gas / Diesel / Wooden Boiler";summary="Advanced circular batch fryer linked with a horizontal shell-and-tube heat exchanger, circulation booster pump, fine bucket filter, and remote electrical control desk.";overview="The Kravionex Circular Batch Fryer with Shell and Tube Heat Exchanger uses a horizontal multi-pass sanitary stainless steel heat exchanger bundle. Cooking oil is propelled at high velocity through inner tube banks while thermal fluid heats the shell, delivering maximum thermal transfer efficiency with zero risk of scorching.";snacks="Kettle-Cooked Potato Chips, Authentic Banana Wafers, Roasted Dry Fruits, Motichoor Boondi, Traditional Sweets"},
  @{file="namkeen-extruder-machine.html";title="Heavy-Duty Namkeen and Sev Extruder Machine";badge="Multi-Die Extrusion";image="assets/images/namkeen-extruder-machine.png";fuel="Electric 415V 3-Phase / Line-Integrated";summary="Precision overhead namkeen extruder with pivoting counter-balanced arm, quick-change stainless steel dies, adjustable pressing speed, and mobile castor base.";overview="The Kravionex Heavy-Duty Namkeen and Sev Extruder Machine takes the physical strain out of traditional dough extrusion. Featuring an overhead geared motorized piston assembly on a 360-degree pivoting swivel arm, the unit can service multiple frying kettles or swing directly over a continuous frying line.";snacks="Nylon Sev, Ratlami Sev, Bhavnagari Gathiya, Bikaneri Bhujia, Chakli and Murukku"},
  @{file="potato-slicer-machine.html";title="High-Speed Commercial Potato and Plantain Slicer";badge="Digital Touch Controller";image="assets/images/potato-slicer-machine.png";fuel="Electric 415V 3-Phase / Line-Integrated";summary="High-speed vegetable slicing system featuring water injection feed, rotary cutting rotor with hardened stainless steel blades, and mobile base for potato chips lines.";overview="The Kravionex High-Speed Commercial Slicer uses centrifugal rotor geometry that feeds tubers against precision-honed stainless steel cutting knives. Water injection flumes immediately rinse surface starch away, ensuring slices separate cleanly in the fryer and cook evenly.";snacks="Ultra-Thin Plain Chips, Crinkle/Wavy Chips, Raw Banana Slices, Sweet Potato Wafers, Tapioca Chips"},
  @{file="potato-peeler-machine.html";title="Industrial Abrasive Potato and Root Vegetable Peeler";badge="Carborundum Abrasive";image="assets/images/potato-peeler-machine.png";fuel="Electric 415V 3-Phase / Line-Integrated";summary="Food-grade vertical abrasive peeler with carborundum-lined chamber, continuous water flushing spray, quick discharge door, and stainless steel structural enclosure.";overview="The Kravionex Industrial Abrasive Peeler employs durable silicon carbide carborundum bonded to the base rotor and chamber walls. As potatoes spin against the abrasive surfaces, continuous water sprays wash peels down into a collection filter, leaving clean peeled tubers ready for slicing.";snacks="Washed Peeled Potatoes, Peeled Carrots, Peeled Sweet Potatoes, Industrial Ginger, Peeled Taro Arbi"},
  @{file="flavouring-drum-machine.html";title="Industrial Octagonal Seasoning and Flavouring Drum";badge="Gentle Tumble Coating";image="assets/images/flavouring-drum-machine.png";fuel="Electric 415V 3-Phase / Line-Integrated";summary="Stainless steel octagonal tumbling drum for uniform powder adhesion without product breakage, featuring adjustable tilt angle, VFD speed control, and castor wheels.";overview="The Kravionex Octagonal Seasoning Drum uses an engineered multi-faceted octagonal cross-section that gently folds snacks over each other rather than dropping them aggressively. Powdered spices disperse evenly across 100% of product surfaces with no blind spots or clumping zones.";snacks="Masala Potato Chips, Coated Seasoned Peanuts, Masala Kurkure, Seasoned Boondi, Roasted Makhana"},
  @{file="circular-batch-fryer-furnace.html";title="Direct-Fired Circular Batch Fryer with Biomass Pellet Furnace";badge="Economical Biomass Fired";image="assets/images/circular-batch-fryer-furnace.png";fuel="Pellet / Gas / Diesel / Wooden Boiler";summary="Rugged circular batch fryer with direct-coupled automated pellet furnace, thermal insulation jacket, analog temperature monitoring, and high-lip discharge chute.";overview="The Kravionex Direct-Fired Circular Batch Fryer pairs a deep-drawn stainless steel frying pan with a forced-draft biomass pellet furnace. Utilizing agricultural biomass pellets, operating fuel costs drop by 45 to 60 percent compared to commercial LPG cylinders. This machine is extremely popular with regional snack startups across Maharashtra and Gujarat.";snacks="Sev and Fafda, Samosa and Kachori, Banana Wafers, Sweet Boondi, Traditional Regional Namkeen"}
)

$template = @"
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{{TITLE}} | Kravionex Machinery LLP</title>
<meta name="description" content="{{SUMMARY}}">
<link rel="stylesheet" href="css/style.css">
<style>
.mp-hero{padding:clamp(2.5rem,5vw,4.5rem) 0;background:linear-gradient(180deg,#F7F5EF 0%,#fff 100%);border-bottom:1px solid #E8E3D8}
.mp-grid{display:grid;grid-template-columns:1.15fr 1fr;gap:clamp(2rem,4vw,3.5rem);align-items:center}
@media(max-width:900px){.mp-grid{grid-template-columns:1fr}}
.mp-visual{background:radial-gradient(circle at center,#fff 0%,#FAF8F2 100%);border:1px solid #E8E3D8;border-radius:20px;padding:clamp(1.5rem,3vw,2.5rem);text-align:center;box-shadow:0 8px 32px rgba(0,0,0,.1)}
.mp-visual img{max-height:420px;width:100%;object-fit:contain;filter:drop-shadow(0 16px 32px rgba(0,0,0,.15));transition:transform .4s}
.mp-visual:hover img{transform:scale(1.03)}
.fuel-pill{display:inline-flex;align-items:center;gap:.45rem;background:rgba(197,161,91,.15);color:#9B7A35;font-size:.82rem;font-weight:700;padding:.4rem 1rem;border-radius:999px;border:1px solid rgba(197,161,91,.35);margin-top:1rem}
.badge-lbl{font-size:.75rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#C5A15B;margin-bottom:.75rem;display:block}
.mp-title{font-family:'Charis SIL',Georgia,serif;font-size:clamp(1.6rem,3vw,2.4rem);color:#141C22;line-height:1.25;margin:.5rem 0 1rem}
.mp-summary{font-size:1rem;color:#4A5568;line-height:1.7;margin-bottom:1rem}
.mp-overview{font-size:.95rem;color:#6B7680;line-height:1.75}
.snack-pills{display:flex;flex-wrap:wrap;gap:.6rem;margin-top:1.25rem}
.snack-pill{background:#F7F5EF;border:1px solid #E8E3D8;border-radius:999px;padding:.35rem .9rem;font-size:.875rem;color:#3D4E5C;font-weight:600}
.feat-section{padding:clamp(2.5rem,5vw,4rem) 0;background:#fff}
.feat-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1.5rem;margin-top:2rem}
.feat-card{background:#F7F5EF;border:1px solid #E8E3D8;border-radius:16px;padding:1.5rem 1.75rem}
.feat-title{font-family:'Charis SIL',Georgia,serif;font-size:1.05rem;color:#141C22;font-weight:700;margin-bottom:.5rem}
.feat-desc{font-size:.9rem;color:#6B7680;line-height:1.65}
.specs-sec{padding:clamp(2.5rem,5vw,4rem) 0;background:#F7F5EF}
.spec-wrap{background:#fff;border:1px solid #E8E3D8;border-radius:16px;overflow:hidden;box-shadow:0 4px 16px rgba(0,0,0,.06);margin-top:2rem}
.spec-tbl{width:100%;border-collapse:collapse}
.spec-tbl th{background:#141C22;color:#C5A15B;font-size:.875rem;font-weight:700;padding:1rem 1.25rem;text-align:left;width:38%}
.spec-tbl td{font-size:.9rem;color:#3D4E5C;padding:1rem 1.25rem}
.spec-tbl tr:not(:last-child) th,.spec-tbl tr:not(:last-child) td{border-bottom:1px solid #E8E3D8}
.rfq-sec{padding:clamp(2.5rem,5vw,4rem) 0;background:#141C22}
.rfq-inner{max-width:700px;margin:0 auto;text-align:center}
.rfq-inner h2{font-family:'Charis SIL',Georgia,serif;color:#F7F5EF;font-size:clamp(1.4rem,2.5vw,2rem);margin-bottom:.75rem}
.rfq-inner p{color:#A0ADB8;font-size:.95rem;margin-bottom:2rem;line-height:1.7}
.rfq-form{display:grid;grid-template-columns:1fr 1fr;gap:1rem;text-align:left}
@media(max-width:600px){.rfq-form{grid-template-columns:1fr}}
.rfq-form input,.rfq-form textarea{width:100%;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.15);border-radius:10px;padding:.8rem 1rem;color:#F7F5EF;font-size:.9rem;outline:none;font-family:inherit;box-sizing:border-box}
.rfq-form input::placeholder,.rfq-form textarea::placeholder{color:#7F8E9C}
.rfq-full{grid-column:1/-1}
.rfq-btns{grid-column:1/-1;display:flex;gap:1rem;flex-wrap:wrap;justify-content:center;margin-top:.5rem}
.btn-wa{display:inline-flex;align-items:center;gap:.6rem;background:#25D366;color:#fff;font-weight:700;padding:.9rem 2rem;border-radius:10px;border:none;cursor:pointer;font-size:.95rem;text-decoration:none}
.btn-em{display:inline-flex;align-items:center;gap:.6rem;background:transparent;color:#C5A15B;font-weight:700;padding:.9rem 2rem;border-radius:10px;border:2px solid #C5A15B;font-size:.95rem;text-decoration:none}
.pg-footer{background:#0D1520;color:#A0ADB8;padding:3rem 0 0}
.pg-footer .fg{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:2rem;padding-bottom:2.5rem}
.pg-footer h5{color:#F7F5EF;font-size:.9rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;margin-bottom:1rem}
.pg-footer a{color:#A0ADB8;text-decoration:none}
.pg-footer a:hover{color:#C5A15B}
.f-socials{display:flex;gap:.75rem;margin-top:1rem;flex-wrap:wrap}
.f-soc{width:38px;height:38px;background:rgba(255,255,255,.08);border-radius:8px;display:inline-flex;align-items:center;justify-content:center;color:#A0ADB8}
.f-soc svg{width:18px;height:18px;fill:currentColor}
.f-bottom{border-top:1px solid rgba(255,255,255,.08);padding:1.25rem 0;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:.75rem;font-size:.8rem}
.eyebrow{font-size:.78rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#C5A15B;margin-bottom:.5rem;display:block}
.sec-h2{font-family:'Charis SIL',Georgia,serif;font-size:clamp(1.4rem,2.5vw,2rem);color:#141C22;margin-bottom:.75rem}
</style>
</head>
<body>
<aside class="top-bar"><div class="container"><div class="top-bar-content"><div class="top-bar-items"><span class="top-bar-item"><a href="https://maps.app.goo.gl/qcqS49icv6Lrznpw5" target="_blank" rel="noopener noreferrer" style="color:inherit;text-decoration:none;">Maharashtra, India</a></span><span class="top-bar-item"><a href="mailto:kravionex.machinery@gmail.com">kravionex.machinery@gmail.com</a></span><span class="top-bar-item"><a href="tel:+919930985514">Domestic Sales: +91 9930985514</a></span><span class="top-bar-item">Office: <a href="tel:+917506665188">+91 7506665188</a> / <a href="tel:+917506665187">+91 7506665187</a></span></div><div class="top-bar-items"><span class="top-bar-badge">Food-Grade SS 304 / SS 316 Quality</span></div></div></div></aside>
<header class="site-header"><div class="container"><nav class="nav-wrapper" aria-label="Main Navigation"><a href="index.html" class="brand-logo"><img src="assets/images/kravionex-official-logo.png" alt="Kravionex Machinery LLP Logo" class="brand-logo-img"><div class="brand-text-wrap"><span class="brand-name">Kravionex</span><span class="brand-subtitle">Machinery LLP</span></div></a><ul class="nav-menu"><li><a href="index.html" class="nav-link">Home</a></li><li><a href="products.html" class="nav-link active">Products</a></li><li><a href="about.html" class="nav-link">About Us</a></li><li><a href="turnkey-lines.html" class="nav-link">Turnkey Plants</a></li><li><a href="contact.html" class="nav-link">Contact</a></li></ul><a href="contact.html" class="btn-cta">Request Quotation</a></nav></div></header>
<nav class="machine-breadcrumbs"><div class="container"><a href="index.html">Home</a> <span class="sep">&rsaquo;</span> <a href="products.html">Products</a> <span class="sep">&rsaquo;</span> <span>{{TITLE}}</span></div></nav>
<section class="mp-hero"><div class="container"><div class="mp-grid">
<div class="mp-visual"><img src="{{IMAGE}}" alt="{{TITLE}}"><div class="fuel-pill">&#128293; {{FUEL}}</div></div>
<div><span class="badge-lbl">{{BADGE}}</span><h1 class="mp-title">{{TITLE}}</h1><p class="mp-summary">{{SUMMARY}}</p><p class="mp-overview">{{OVERVIEW}}</p><div class="snack-pills">{{SNACKS}}</div></div>
</div></div></section>
<section class="feat-section"><div class="container"><span class="eyebrow">Engineering Advantages</span><h2 class="sec-h2">Key Features</h2><div class="feat-grid">
<div class="feat-card"><div class="feat-title">Precision Engineering</div><div class="feat-desc">Every component manufactured to exacting food-grade stainless steel standards for long operational life and hygienic processing.</div></div>
<div class="feat-card"><div class="feat-title">Multi-Fuel Flexibility</div><div class="feat-desc">Engineered to operate with Pellet, Gas, Diesel or Wooden Boiler heating depending on your facility setup and fuel availability.</div></div>
<div class="feat-card"><div class="feat-title">Hygienic Design</div><div class="feat-desc">All food-contact surfaces in AISI 304/316 stainless steel with polished finishes for easy CIP washdown and compliance.</div></div>
<div class="feat-card"><div class="feat-title">Low Operating Cost</div><div class="feat-desc">Optimised thermal efficiency and biomass fuel compatibility ensure industry-lowest per-kg production costs for your facility.</div></div>
</div></div></section>
<section class="specs-sec"><div class="container"><span class="eyebrow">Technical Data</span><h2 class="sec-h2">Technical Specifications</h2><div class="spec-wrap"><table class="spec-tbl"><tbody>
<tr><th>Material of Construction</th><td>AISI 304 / 316 Food-Grade Stainless Steel</td></tr>
<tr><th>Heating and Fuel Compatibility</th><td>{{FUEL}}</td></tr>
<tr><th>Control System</th><td>Digital PID / Touchscreen PLC temperature controller</td></tr>
<tr><th>Build Standard</th><td>Designed and manufactured in Maharashtra, India</td></tr>
<tr><th>Applications</th><td>{{SNACKS}}</td></tr>
</tbody></table></div></div></section>
<section class="rfq-sec"><div class="container"><div class="rfq-inner">
<h2>Request a Quotation</h2>
<p>Fill in your requirements and we will reach out within one business day. Reach us directly on WhatsApp for the fastest response.</p>
<form class="rfq-form" onsubmit="handleRFQ(event,this)">
<input type="hidden" name="machine" value="{{TITLE}}">
<input type="text" name="name" placeholder="Your Full Name" required>
<input type="tel" name="phone" placeholder="Your Phone Number" required>
<input type="email" name="email" placeholder="Email Address">
<input type="text" name="company" placeholder="Company / Business Name">
<textarea name="message" class="rfq-full" rows="3" placeholder="Describe your production requirements, capacity needs, or questions..."></textarea>
<div class="rfq-btns">
<button type="submit" class="btn-wa">&#128241; Send via WhatsApp</button>
<a href="mailto:kravionex.machinery@gmail.com" class="btn-em">&#9993; Send via Email</a>
</div>
</form>
</div></div></section>
<footer class="pg-footer"><div class="container"><div class="fg">
<div><img src="assets/images/kravionex-official-logo.png" alt="Kravionex Logo" style="height:56px;margin-bottom:1rem;"><p style="font-size:.875rem;line-height:1.7;color:#7F8E9C;">Kravionex Machinery LLP - Industrial food-processing machinery manufacturer, Maharashtra, India.</p><p style="font-family:'Charis SIL',Georgia,serif;font-style:italic;color:#C5A15B;font-size:.9rem;margin-top:.75rem;">"Engineering Precision. Delivering Performance."</p></div>
<div><h5>Products</h5><ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:.5rem;font-size:.875rem;"><li><a href="circular-batch-fryer-he.html">Circular Batch Fryer</a></li><li><a href="rectangular-batch-fryer.html">Rectangular Batch Fryer</a></li><li><a href="continuous-fryer-pellet.html">Continuous Namkeen Fryer</a></li><li><a href="multi-product-continuous-frying-system.html">Multi Product Frying System</a></li><li><a href="automatic-sev-boondi-line.html">Automatic Sev &amp; Boondi Line</a></li><li><a href="semi-automatic-chips-line.html">Semi-Auto Chips Line</a></li></ul></div>
<div><h5>More Equipment</h5><ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:.5rem;font-size:.875rem;"><li><a href="shell-tube-circular-fryer.html">Shell &amp; Tube Fryer</a></li><li><a href="namkeen-extruder-machine.html">Namkeen Extruder</a></li><li><a href="potato-slicer-machine.html">Potato Slicer</a></li><li><a href="potato-peeler-machine.html">Potato Peeler</a></li><li><a href="flavouring-drum-machine.html">Flavouring Drum</a></li><li><a href="circular-batch-fryer-furnace.html">Direct-Fired Fryer</a></li></ul></div>
<div><h5>Contact &amp; Plant</h5><p style="font-size:.875rem;line-height:1.8;margin:0 0 .75rem;"><strong style="color:#F7F5EF;">Kravionex Machinery LLP</strong><br>Maharashtra, India<br><a href="https://maps.app.goo.gl/qcqS49icv6Lrznpw5" target="_blank" style="color:#C5A15B;font-weight:600;">&#128205; View on Google Maps</a></p><p style="font-size:.875rem;line-height:1.8;margin:0 0 .5rem;"><a href="tel:+919930985514" style="color:#fff;">+91 9930985514</a><br><a href="tel:+917506665188" style="color:#fff;">+91 7506665188</a> / <a href="tel:+917506665187" style="color:#fff;">+91 7506665187</a></p><p style="font-size:.875rem;"><a href="mailto:kravionex.machinery@gmail.com" style="color:#C5A15B;">kravionex.machinery@gmail.com</a></p></div>
</div><div class="f-bottom"><p style="margin:0;">&#169; 2026 Kravionex Machinery LLP. All rights reserved.</p><span style="font-size:.775rem;color:#556070;">Manufacturing in Maharashtra, India</span></div></div></footer>
<a href="https://api.whatsapp.com/send?phone=919930985514&text=Hello%20Kravionex%20Machinery%2C%20I%20have%20an%20enquiry." target="_blank" class="floating-whatsapp" aria-label="Chat with Kravionex Sales on WhatsApp"><svg viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.076-2.023-.474-1.616-.669-2.656-2.316-2.736-2.423-.079-.107-.648-.863-.648-1.646 0-.783.407-1.168.552-1.328.144-.16.315-.2.42-.2.106 0 .212.001.304.006.098.005.228-.037.357.273.131.312.447 1.092.486 1.172.04.08.066.174.013.28-.053.107-.079.174-.158.267-.08.093-.168.207-.24.278-.08.08-.163.167-.07.327.093.16.413.682.886 1.103.61.543 1.123.711 1.283.791.16.08.253.067.346-.04.094-.107.4-.467.507-.627.106-.16.213-.133.359-.08.147.053.931.44 1.091.52.16.08.267.12.306.187.04.066.04.386-.104.791zM12 2C6.477 2 2 6.477 2 12c0 1.891.526 3.662 1.441 5.176L2 22l4.981-1.397C8.423 21.493 10.154 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg><span>Chat with Sales (+91 9930985514)</span></a>
<script src="js/main.js"></script>
<script>function handleRFQ(e,f){e.preventDefault();var t='Hello Kravionex Machinery!\nMachine: '+f.machine.value+'\nName: '+f.name.value+'\nPhone: '+f.phone.value+'\nEmail: '+f.email.value+'\nCompany: '+f.company.value+'\nMessage: '+f.message.value;window.open('https://api.whatsapp.com/send?phone=919930985514&text='+encodeURIComponent(t),'_blank');}</script>
</body>
</html>
"@

foreach ($p in $pages) {
    $snackHtml = ($p.snacks -split ',') | ForEach-Object { "<span class=`"snack-pill`">$($_.Trim())</span>" }
    $snackStr = $snackHtml -join ""
    $html = $template
    $html = $html.Replace("{{TITLE}}", $p.title)
    $html = $html.Replace("{{SUMMARY}}", $p.summary)
    $html = $html.Replace("{{OVERVIEW}}", $p.overview)
    $html = $html.Replace("{{IMAGE}}", $p.image)
    $html = $html.Replace("{{FUEL}}", $p.fuel)
    $html = $html.Replace("{{BADGE}}", $p.badge)
    $html = $html.Replace("{{SNACKS}}", $snackStr)
    [System.IO.File]::WriteAllText((Join-Path (Get-Location) $p.file), $html, [System.Text.Encoding]::UTF8)
    Write-Host "Created: $($p.file)"
}
Write-Host "All done!"
