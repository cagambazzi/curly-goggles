// ===== Mobile Navigation Toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.classList.toggle('active');
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('active');
    });
  });
}

// ===== Header Scroll Effect =====
const header = document.getElementById('header');

if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// ===== Highlight Today's Hours =====
const hoursTable = document.getElementById('hoursTable');

if (hoursTable) {
  const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, ...
  const rows = hoursTable.querySelectorAll('.hours-row');

  rows.forEach(row => {
    const dayNum = parseInt(row.getAttribute('data-day'), 10);
    if (dayNum === today) {
      row.classList.add('today');
      const dayName = row.querySelector('.day-name');
      if (dayName) {
        const badge = document.createElement('span');
        badge.className = 'today-badge';
        badge.textContent = 'Oggi';
        dayName.appendChild(badge);
      }
    }
  });
}

// ===== Pharmacy Open/Closed Status =====
const statusContainer = document.getElementById('pharmacyStatus');

if (statusContainer) {
  const now = new Date();
  const day = now.getDay();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hours * 60 + minutes;

  let isOpen = false;

  if (day >= 1 && day <= 5) {
    // Mon-Fri: 8:30-13:00 and 15:30-19:30
    const morningOpen = 8 * 60 + 30;
    const morningClose = 13 * 60;
    const afternoonOpen = 15 * 60 + 30;
    const afternoonClose = 19 * 60 + 30;
    isOpen = (currentTime >= morningOpen && currentTime < morningClose) ||
             (currentTime >= afternoonOpen && currentTime < afternoonClose);
  } else if (day === 6) {
    // Saturday: 8:30-13:00
    const morningOpen = 8 * 60 + 30;
    const morningClose = 13 * 60;
    isOpen = currentTime >= morningOpen && currentTime < morningClose;
  }

  const badge = document.createElement('div');
  badge.className = 'status-badge ' + (isOpen ? 'open' : 'closed');
  badge.innerHTML = '<span class="status-dot"></span>' + (isOpen ? 'Aperto ora' : 'Chiuso');
  statusContainer.appendChild(badge);
}
