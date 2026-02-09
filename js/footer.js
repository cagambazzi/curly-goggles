document.addEventListener('DOMContentLoaded', function () {
  var placeholder = document.getElementById('site-footer');
  if (!placeholder) return;

  placeholder.innerHTML =
    '<!-- Contact Bar -->' +
    '<section class="contact-bar">' +
    '  <div class="container">' +
    '    <div class="contact-item">' +
    '      <div class="icon">&#x1F4CD;</div>' +
    '      <h4>Indirizzo</h4>' +
    '      <p>Via Roma, 42 - 00100 Roma (RM)</p>' +
    '    </div>' +
    '    <div class="contact-item">' +
    '      <div class="icon">&#x1F4DE;</div>' +
    '      <h4>Telefono</h4>' +
    '      <p>+39 06 1234567</p>' +
    '    </div>' +
    '    <div class="contact-item">' +
    '      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" class="icon contact-social" aria-label="Facebook">' +
    '        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>' +
    '      </a>' +
    '      <h4>Facebook</h4>' +
    '      <p>Seguici</p>' +
    '    </div>' +
    '    <div class="contact-item">' +
    '      <div class="icon">&#x1F4E7;</div>' +
    '      <h4>Email</h4>' +
    '      <p>info@farmaciatiburtina.it</p>' +
    '    </div>' +
    '    <div class="contact-item">' +
    '      <div class="icon">&#x1F554;</div>' +
    '      <h4>Orari</h4>' +
    '      <p>Lun-Ven: 8:30 - 19:30</p>' +
    '    </div>' +
    '  </div>' +
    '</section>' +
    '<!-- Footer -->' +
    '<footer class="footer">' +
    '  <div class="container">' +
    '    <p>&copy; 2026 Farmacia Tiburtina. Tutti i diritti riservati.</p>' +
    '  </div>' +
    '</footer>';
});
