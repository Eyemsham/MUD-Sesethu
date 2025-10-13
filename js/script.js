// Simple scroll animation
// basic interactivity & accessibility helpers

document.addEventListener('DOMContentLoaded', () => {
  // set footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.getElementById('primary-menu');
  navToggle && navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navLinks.style.display = expanded ? 'none' : 'flex';
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    });
  });

  // Contact form: simple client-side validation & fake send (replace with server or Formspree)
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  form && form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (!name || !email || !message) {
      status.textContent = 'Please complete all fields.';
      status.style.color = 'crimson';
      return;
    }
    // simulate send
    status.style.color = '';
    status.textContent = 'Sending message…';
    setTimeout(() => {
      status.textContent = 'Message sent — Sesethu will reply shortly.';
      form.reset();
    }, 800);
  });
});
