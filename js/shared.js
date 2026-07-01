/* NIFS ANU — Shared header/footer injection + common behaviour */
(function(){

  const HEADER = `<div class="site-header-wrapper" id="siteHeader">
  <header class="top-banner">
    <div class="contact-info">Call Now : <span>83743 40999</span><span class="separator">|</span>Email Now : <span>anusafetydept@gmail.com</span></div>
    <div class="accreditation-box">Accredited by NAAC with &ldquo;A+ Grade (With 3.46 Outstanding<br>Score in Dual Mode Category - First in the State &amp; Country)&rdquo;</div>
    <div class="logos-right"><img src="images/logo-tags.png" alt="ISO/Guinness/Certification badges"></div>
  </header>
  <section class="main-header">
    <div class="univ-logo"><img src="images/logo-anu.png" alt="ANU Seal"></div>
    <div class="center-titles">
      <div class="telugu-header" lang="te">ఆచార్య నాగార్జున విశ్వవిద్యాలయం</div>
      <h1 class="english-header">DEPARTMENT OF FIRE AND INDUSTRIAL SAFETY</h1>
    </div>
    <div class="azadi-logo"><img src="images/75years.png" alt="Azadi Ka Amrit Mahotsav 75"></div>
  </section>
  <nav class="navigation-bar" role="navigation" aria-label="Main navigation">
    <button class="hamburger" id="navToggle" aria-label="Toggle navigation" aria-expanded="false"><span></span><span></span><span></span></button>
    <ul class="nav-list" id="navList">
      <li class="nav-item"><a href="./" class="nav-link">Home</a></li>
      <li class="nav-item dropdown"><a href="#" class="nav-link dropdown-toggle">About Department</a>
        <ul class="dropdown-menu"><li><a href="profile.html">Department Profile</a></li><li><a href="vision-mission.html">Vision &amp; Mission</a></li></ul>
      </li>
      <li class="nav-item dropdown"><a href="#" class="nav-link dropdown-toggle">Faculty</a>
        <ul class="dropdown-menu"><li><a href="faculty.html">Teaching</a></li></ul>
      </li>
      <li class="nav-item dropdown"><a href="#" class="nav-link dropdown-toggle">Academics</a>
        <ul class="dropdown-menu"><li><a href="course-offered.html">Course Offered</a></li><li><a href="images/syllabus.pdf" target="_blank" rel="noopener noreferrer">Syllabus</a></li></ul>
      </li>
      <li class="nav-item"><a href="contact.html" class="nav-link">Contact us</a></li>
      <li class="nav-item"><a href="https://nagarjunauniversity.ac.in/colleges/science" class="nav-link" target="_blank" rel="noopener">Back to main page</a></li>
    </ul>
  </nav>
</div>`;

  const FOOTER = `<footer class="site-footer">
  <div class="footer-container">
    <div class="footer-column">
      <h3>Get In Touch</h3>
      <div class="footer-logo"><i class="fas fa-university"></i><span>ANU University</span></div>
      <div class="contact-item"><i class="fas fa-map-marker-alt"></i><span>HOD, Fire and Industrial Safety Department, ANU College of Sciences, Nagarjuna Nagar, Guntur, Andhra Pradesh 522510.</span></div>
      <div class="contact-item"><i class="fas fa-phone-alt"></i><span>83743 40999</span></div>
      <div class="contact-item"><i class="fas fa-envelope"></i><span>anusafetydept@gmail.com</span></div>
    </div>
    <div class="footer-column">
      <h3>Quick Links</h3>
      <ul class="footer-links">
        <li><a href="./">Home</a></li>
        <li><a href="profile.html">Department Profile</a></li>
        <li><a href="vision-mission.html">Vision &amp; Mission</a></li>
        <li><a href="faculty.html">Faculty</a></li>
        <li><a href="contact.html">Contact Us</a></li>
      </ul>
    </div>
    <div class="footer-column">
      <h3>Academics</h3>
      <ul class="footer-links">
        <li><a href="course-offered.html">Courses Offered</a></li>
        <li><a href="images/syllabus.pdf" target="_blank" rel="noopener noreferrer">Syllabus (PDF)</a></li>
        <li><a href="https://nagarjunauniversity.ac.in" target="_blank" rel="noopener noreferrer">ANU Main Website</a></li>
        <li><a href="contact.html">Apply Now</a></li>
      </ul>
    </div>
    <div class="footer-column">
      <h3>Newsletter</h3>
      <div class="newsletter-form"><input type="email" id="sharedNlEmail" placeholder="Your Email Address"><button type="button" onclick="(function(){var v=document.getElementById('sharedNlEmail').value;if(!v||!v.includes('@')){alert('Please enter a valid email address');return;}window.location='mailto:anusafetydept@gmail.com?subject=Newsletter%20Subscription&body=Please%20subscribe%20me%3A%20'+encodeURIComponent(v);})()">Sign Up</button></div>
      <span class="social-title">Follow Us</span>
      <div class="social-icons">
        <a href="https://www.instagram.com/nifsindia/" class="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
        <a href="https://twitter.com" class="social-icon" aria-label="Twitter / X" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
        <a href="https://facebook.com" class="social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
        <a href="https://youtube.com" class="social-icon" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a>
        <a href="https://linkedin.com" class="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="bottom-container">&copy; <span class="highlight">Acharya Nagarjuna University</span>, All Rights Reserved.</div>
    <a href="#top" class="back-to-top" aria-label="Back to top">&uarr;</a>
  </div>
</footer>`;

  document.addEventListener('DOMContentLoaded', function() {
    /* Inject header & footer */
    const hp = document.getElementById('site-header-ph');
    const fp = document.getElementById('site-footer-ph');
    if(hp) hp.outerHTML = HEADER;
    if(fp) fp.outerHTML = FOOTER;

    /* Sticky nav — IntersectionObserver on main-header; only visual props change, zero layout jank */
    const nav  = document.querySelector('.navigation-bar');
    const mhdr = document.querySelector('.main-header');
    if(nav && mhdr){
      new IntersectionObserver(entries => {
        nav.classList.toggle('stuck', !entries[0].isIntersecting);
      }, {threshold:0}).observe(mhdr);
    }

    /* Hamburger */
    const tog = document.getElementById('navToggle');
    const nl  = document.getElementById('navList');
    if(tog && nl){
      tog.addEventListener('click', () => {
        const o = nl.classList.toggle('open');
        tog.classList.toggle('open', o);
        tog.setAttribute('aria-expanded', String(o));
      });
    }

    /* Mobile tap dropdowns */
    document.querySelectorAll('.nav-item.dropdown .dropdown-toggle').forEach(btn => {
      btn.addEventListener('click', e => {
        if(window.innerWidth <= 768){
          e.preventDefault();
          const p = btn.closest('.nav-item');
          document.querySelectorAll('.nav-item.dropdown.active').forEach(el => { if(el !== p) el.classList.remove('active'); });
          p.classList.toggle('active');
        }
      });
    });

    /* Highlight active nav link */
    const path = window.location.pathname.replace(/\/$/, '') || '/index';
    document.querySelectorAll('.nav-link').forEach(a => {
      const href = a.getAttribute('href').replace(/\/$/, '') || '/index';
      if(path.endsWith(href) && href !== '#') a.style.borderBottom = '2px solid #00334e';
    });

    /* Back to top */
    document.addEventListener('click', e => {
      if(e.target.closest('.back-to-top')){ e.preventDefault(); window.scrollTo({top:0, behavior:'smooth'}); }
    });
  });
})();
