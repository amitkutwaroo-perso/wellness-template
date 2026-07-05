(function () {
  const c = SITE_CONFIG;

  // ---------- Theme: push colors + fonts into CSS variables ----------
  const root = document.documentElement.style;
  root.setProperty('--bg-0', c.theme.bg0);
  root.setProperty('--bg-1', c.theme.bg1);
  root.setProperty('--bg-2', c.theme.bg2);
  root.setProperty('--brass', c.theme.brass);
  root.setProperty('--ember', c.theme.ember);
  root.setProperty('--ink', c.theme.ink);
  root.setProperty('--ink-dim', c.theme.inkDim);
  root.setProperty('--font-display', `'${c.theme.fontDisplay}', serif`);
  root.setProperty('--font-body', `'${c.theme.fontBody}', sans-serif`);

  // Load the two Google Fonts named in config
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(c.theme.fontDisplay)}:ital,wght@0,400;0,600;1,500&family=${encodeURIComponent(c.theme.fontBody)}:wght@400;500;600&display=swap`;
  document.head.appendChild(link);

  // ---------- Nav ----------
  document.getElementById('wordmark').innerHTML =
    `${c.brand.name}<span class="accent">${c.brand.accent}</span>`;
  document.getElementById('nav-links').innerHTML = c.nav
    .map(n => `<a href="${n.href}">${n.label}</a>`).join('');

  // ---------- Hero ----------
  document.getElementById('hero-eyebrow').textContent = c.hero.eyebrow;
  document.getElementById('hero-headline').textContent = c.hero.headline;
  document.getElementById('hero-subhead').textContent = c.hero.subhead;
  const ctaP = document.getElementById('hero-cta-primary');
  ctaP.textContent = c.hero.ctaPrimary.label;
  ctaP.href = c.hero.ctaPrimary.href;
  const ctaS = document.getElementById('hero-cta-secondary');
  ctaS.textContent = c.hero.ctaSecondary.label;
  ctaS.href = c.hero.ctaSecondary.href;

  // Breathing circle label cycle, timed to the 12s CSS animation
  const label = document.getElementById('breath-label');
  const beats = [
    { t: 0, text: c.hero.breathLabelIn },
    { t: 4000, text: c.hero.breathLabelHold },
    { t: 6000, text: c.hero.breathLabelOut },
    { t: 10000, text: c.hero.breathLabelHold }
  ];
  const timers = [];
  function scheduleBreathCycle() {
    timers.forEach(clearTimeout);
    beats.forEach(b => {
      const id = setTimeout(() => { label.textContent = b.text; }, b.t);
      timers.push(id);
    });
  }
  scheduleBreathCycle();
  setInterval(scheduleBreathCycle, 12000);

  // ---------- Sessions ----------
  document.getElementById('sessions-heading').textContent = c.sessions.heading;
  document.getElementById('sessions-sub').textContent = c.sessions.sub;
  document.getElementById('sessions-cards').innerHTML = c.sessions.items.map(item => `
    <div class="card">
      <h3>${item.name}</h3>
      <div class="duration">${item.duration}</div>
      <div class="price">${item.price}</div>
      <p>${item.description}</p>
    </div>
  `).join('');

  // ---------- About ----------
  document.getElementById('about-heading').textContent = c.about.heading;
  document.getElementById('about-paragraphs').innerHTML = c.about.paragraphs
    .map(p => `<p>${p}</p>`).join('');
  document.getElementById('about-credentials').innerHTML = c.about.credentials
    .map(item => `<li>${item}</li>`).join('');

  // ---------- Testimonial ----------
  document.getElementById('quote-text').textContent = `"${c.testimonial.quote}"`;
  document.getElementById('quote-attr').textContent = c.testimonial.attribution;

  // ---------- Booking ----------
  document.getElementById('booking-heading').textContent = c.booking.heading;
  document.getElementById('booking-sub').textContent = c.booking.sub;
  const slot = document.getElementById('booking-embed-slot');
  if (c.booking.embedUrl) {
    slot.innerHTML = `
      <iframe src="${c.booking.embedUrl}" style="width:100%;min-height:640px;border:0;border-radius:18px;" title="Booking calendar"></iframe>
      <p style="text-align:center;margin-top:16px;font-size:0.85rem;color:var(--ink-dim);">
        Calendar not showing? <a href="${c.booking.embedUrl}" target="_blank" rel="noopener" style="color:var(--brass);">Open the booking page directly</a>.
      </p>`;
  } else {
    slot.innerHTML = `<div class="booking-embed-empty">Paste a Calendly or Cal.com embed URL into <code>booking.embedUrl</code> in config.js to show a live calendar here.</div>`;
  }

  // ---------- Footer ----------
  document.getElementById('footer-contact').textContent = `${c.footer.email} · ${c.footer.location}`;
  document.getElementById('footer-links').innerHTML = c.footer.links
    .map(l => `<a href="${l.href}">${l.label}</a>`).join('');
  document.getElementById('footer-disclaimer').textContent = c.footer.disclaimer;
})();
