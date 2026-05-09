/* ================================================================
   TOTO TRANS TOL — main.js
   Interaksi halaman: mobile menu, active nav, dll.
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------------------
     1. MOBILE HAMBURGER MENU
     Toggle mobile nav drawer saat tombol menu diklik.
  -------------------------------------------------------------- */
  const menuBtn   = document.getElementById('menu-btn');
  const mobileNav = document.getElementById('mobile-nav');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('hidden');
      menuBtn.setAttribute('aria-expanded', String(!isOpen));
    });

    // Tutup menu saat link di-klik
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }


  /* --------------------------------------------------------------
     2. ACTIVE NAV LINK ON SCROLL
     Tandai nav link sesuai section yang sedang terlihat.
  -------------------------------------------------------------- */
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.toggle(
              'nav-link--active',
              link.getAttribute('href') === `#${entry.target.id}`
            );
          });
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach(section => observer.observe(section));


  /* --------------------------------------------------------------
     3. TAHUN COPYRIGHT — auto-update di footer
  -------------------------------------------------------------- */
  const yearEl = document.getElementById('copyright-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
