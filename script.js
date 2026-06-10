(function () {
  'use strict';

  // ─── 1. Nav active link on scroll ───────────────────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  function updateActiveLink() {
    const scrollY = window.scrollY + 80;
    let current = '';
    sections.forEach(section => {
      if (scrollY >= section.offsetTop) {
        current = section.id;
      }
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();

  // ─── 2. Mobile hamburger menu ────────────────────────────────────────────────
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinksEl = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinksEl.classList.toggle('open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinksEl.classList.remove('open');
    });
  });

  // ─── 3. Research filter ──────────────────────────────────────────────────────
  const filterBtns = document.querySelectorAll('.filter-btn');
  const researchCards = document.querySelectorAll('.research-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      researchCards.forEach(card => {
        const matches = filter === 'all' || card.dataset.category === filter;
        if (matches) {
          card.classList.remove('hidden');
          card.classList.remove('visible');
          setTimeout(() => card.classList.add('visible'), 20);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // ─── 4. Scroll reveal via IntersectionObserver ──────────────────────────────
  const revealEls = document.querySelectorAll(
    '.research-card, .tl-item, .pub-item, .edu-item, .award-item, ' +
    '.about-text, .about-edu, .skills-col, .awards-col, .contact-inner'
  );

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  revealEls.forEach(el => observer.observe(el));

  // ─── 5. Contact form validation ─────────────────────────────────────────────
  const form = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameEl = document.getElementById('name');
    const emailEl = document.getElementById('email');
    const msgEl = document.getElementById('message');

    nameEl.classList.remove('error');
    emailEl.classList.remove('error');
    msgEl.classList.remove('error');
    formMsg.textContent = '';
    formMsg.className = '';

    let valid = true;

    if (!nameEl.value.trim()) {
      nameEl.classList.add('error');
      valid = false;
    }
    if (!emailRe.test(emailEl.value.trim())) {
      emailEl.classList.add('error');
      valid = false;
    }
    if (!msgEl.value.trim()) {
      msgEl.classList.add('error');
      valid = false;
    }

    if (!valid) {
      formMsg.textContent = 'Please fill in all fields correctly.';
      formMsg.className = 'error';
      return;
    }

    const submitBtn = form.querySelector(‘button[type="submit"]’);
    submitBtn.disabled = true;
    submitBtn.textContent = ‘Sending…’;

    fetch(‘https://formspree.io/f/xjgdorlj’, {
      method: ‘POST’,
      headers: { ‘Content-Type’: ‘application/json’ },
      body: JSON.stringify({
        name: nameEl.value.trim(),
        email: emailEl.value.trim(),
        message: msgEl.value.trim()
      })
    })
      .then(res => {
        if (res.ok) {
          formMsg.textContent = ‘Message sent! I\’ll get back to you soon.’;
          formMsg.className = ‘success’;
          form.reset();
        } else {
          formMsg.textContent = ‘Something went wrong. Please try again.’;
          formMsg.className = ‘error’;
        }
      })
      .catch(() => {
        formMsg.textContent = ‘Network error. Please try again.’;
        formMsg.className = ‘error’;
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = ‘Send Message’;
      });
  });
})();
