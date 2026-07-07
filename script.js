// ShockImpact Aerial — interactions

document.getElementById('year').textContent = new Date().getFullYear();

/* Material ripple on buttons */
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function(e){
    const rect = this.getBoundingClientRect();
    const ripple = document.createElement('span');
    const size = Math.max(rect.width, rect.height);
    ripple.className = 'ripple';
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});

/* Telemetry HUD — small live-feeling drift, purely decorative */
(function telemetry(){
  const alt = document.getElementById('teleAlt');
  const batt = document.getElementById('teleBatt');
  if (!alt || !batt) return;
  let altVal = 120, battVal = 87;
  setInterval(() => {
    altVal += (Math.random() - 0.5) * 4;
    altVal = Math.max(95, Math.min(140, altVal));
    alt.textContent = Math.round(altVal) + 'm';
    battVal = Math.max(60, battVal - Math.random() * 0.3);
    batt.textContent = Math.round(battVal) + '%';
  }, 2200);
})();

/* Quote form submit — client-side confirmation */
const form = document.getElementById('quoteForm');
const toast = document.getElementById('toast');
if (form) {
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const btnLabel = document.getElementById('btnLabel');
    btnLabel.textContent = 'Sending…';
    setTimeout(() => {
      btnLabel.textContent = 'Send message';
      toast.classList.add('show');
      form.reset();
      setTimeout(() => toast.classList.remove('show'), 3200);
    }, 700);
  });
}

/* FAB visibility on scroll */
const fab = document.getElementById('fab');
window.addEventListener('scroll', () => {
  if (window.scrollY > 600) fab.classList.add('show');
  else fab.classList.remove('show');
}, { passive: true });

/* Mobile nav toggle */
const navToggle = document.getElementById('navToggle');
const navLinksWrap = document.querySelector('.nav-links');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navLinksWrap.style.display = expanded ? 'none' : 'flex';
    if (!expanded) {
      navLinksWrap.style.cssText = 'display:flex;flex-direction:column;position:absolute;top:100%;left:0;right:0;background:#F2F4F5;padding:16px 28px;gap:16px;border-bottom:1px solid rgba(11,30,51,.1);';
    }
  });
}
