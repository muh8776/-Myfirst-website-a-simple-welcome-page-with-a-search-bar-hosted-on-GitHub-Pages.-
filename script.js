// Basic interactivity: responsive menu, form demo, year
document.addEventListener('DOMContentLoaded', () => {
  // set year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.querySelector('.nav');
  menuToggle && menuToggle.addEventListener('click', () => {
    if (nav.style.display === 'flex') {
      nav.style.display = '';
    } else {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.right = '12px';
      nav.style.top = '56px';
      nav.style.background = 'white';
      nav.style.padding = '10px';
      nav.style.boxShadow = '0 6px 20px rgba(0,0,0,0.08)';
      nav.style.borderRadius = '8px';
    }
  });

  // demo contact form (client-only)
  const form = document.getElementById('contactForm');
  const result = document.getElementById('formResult');
  const clear = document.getElementById('clearBtn');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name');
    // This is just a demo: it doesn't send an email.
    result.textContent = `Thanks ${name}! (This demo doesn't send messages — ask me to add a real form.)`;
    result.style.color = 'green';
    form.reset();
  });

  clear.addEventListener('click', () => {
    form.reset();
    result.textContent = '';
  });
});
