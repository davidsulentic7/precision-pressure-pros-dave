const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }));
}

document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const quoteForm = document.getElementById('quote-form');
quoteForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(quoteForm);
  const subject = `Free Estimate Request - ${data.get('service') || 'Precision Pressure Pros'}`;
  const body = [
    `Name: ${data.get('name') || ''}`,
    `Phone: ${data.get('phone') || ''}`,
    `Email: ${data.get('email') || ''}`,
    `Service: ${data.get('service') || ''}`,
    `Address: ${data.get('address') || ''}`,
    '',
    'Job details:',
    data.get('message') || ''
  ].join('\n');

  window.location.href = `mailto:davidsulentic7@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
