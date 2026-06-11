// ==================== NAVBAR ====================
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ==================== SCROLL ANIMATIONS ====================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// ==================== ACTIVE NAV LINK ====================
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage) {
    link.classList.add('active');
  }
});

// ==================== COOKIE CONSENT ====================
function initCookieConsent() {
  const consent = document.querySelector('.cookie-consent');
  if (!consent) return;

  if (window.location.search.includes('reset-cookies')) {
    localStorage.removeItem('cookieConsent');
  }

  const accepted = localStorage.getItem('cookieConsent');
  if (accepted === 'true') {
    consent.remove();
    return;
  }

  setTimeout(() => {
    document.body.classList.add('cookie-consent-visible');
    consent.style.display = 'flex';
    requestAnimationFrame(() => {
      consent.classList.add('show');
    });
  }, 1500);

  const btn = consent.querySelector('.cookie-btn');
  if (btn) {
    btn.addEventListener('click', () => {
      localStorage.setItem('cookieConsent', 'true');
      document.body.classList.remove('cookie-consent-visible');
      consent.classList.remove('show');
      setTimeout(() => {
        consent.remove();
      }, 600);
    });
  }
}

document.addEventListener('DOMContentLoaded', initCookieConsent);

// ==================== WHATSAPP RESERVATION ====================
function initWhatsAppReservation() {
  if (document.querySelector('.whatsapp-reservation')) return;

  const reservation = document.createElement('div');
  reservation.className = 'whatsapp-reservation';
  reservation.innerHTML = `
    <span class="whatsapp-message">Rezervasyon için.</span>
    <a class="whatsapp-button" href="https://wa.me/902125551234?text=Merhaba%2C%20rezervasyon%20yapmak%20istiyorum." target="_blank" rel="noopener" aria-label="WhatsApp ile rezervasyon yap">
      <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M16.04 3.2c-7.05 0-12.78 5.7-12.78 12.72 0 2.24.59 4.43 1.7 6.36L3.16 28.8l6.68-1.75a12.87 12.87 0 0 0 6.2 1.58h.01c7.04 0 12.77-5.7 12.77-12.72S23.09 3.2 16.04 3.2Zm0 23.28h-.01c-1.96 0-3.88-.53-5.56-1.53l-.4-.24-3.96 1.04 1.06-3.84-.26-.39a10.48 10.48 0 0 1-1.6-5.6c0-5.83 4.82-10.57 10.73-10.57 2.86 0 5.55 1.11 7.57 3.11a10.43 10.43 0 0 1 3.14 7.46c0 5.82-4.81 10.56-10.71 10.56Zm5.88-7.9c-.32-.16-1.9-.93-2.2-1.04-.29-.11-.5-.16-.72.16-.21.32-.83 1.04-1.02 1.25-.19.21-.37.24-.69.08-.32-.16-1.36-.5-2.59-1.59-.96-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.5.14-.66.15-.15.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.72-.98-2.36-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.15 3.09 1.31 3.3c.16.21 2.27 3.44 5.5 4.82.77.33 1.37.53 1.84.68.77.24 1.47.21 2.03.13.62-.09 1.9-.77 2.17-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z"/>
      </svg>
    </a>
  `;

  document.body.appendChild(reservation);

  setTimeout(() => {
    reservation.classList.add('message-hidden');
  }, 3000);
}

document.addEventListener('DOMContentLoaded', initWhatsAppReservation);

// ==================== SMOOTH SCROLL FOR ANCHORS ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ==================== FORM SUBMISSION ====================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = this.querySelector('.btn-submit');
    const originalText = btn.textContent;
    btn.textContent = 'Gönderildi ✓';
    btn.style.background = 'transparent';
    btn.style.color = '#c9a96e';
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      btn.style.color = '';
      btn.disabled = false;
      this.reset();
    }, 3000);
  });
}
