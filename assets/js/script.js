document.addEventListener("DOMContentLoaded", function () {

  // Highlight active page link in navbar only
  const navLinks = document.querySelectorAll(".navbar .nav-link");
  const path = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === path) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Tab scroll for Solutions page only
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('#v-pills-tab .nav-link').forEach((link) => {
      link.addEventListener('shown.bs.tab', function () {
        const target = document.querySelector(link.getAttribute('data-bs-target'));
        if (target) {
          const rect = target.getBoundingClientRect();

          // Only scroll if the top of the tab pane is below the viewport
          if (rect.top > window.innerHeight || rect.bottom < 0) {
            const offset = window.scrollY + rect.top - 80;
            window.scrollTo({
              top: offset,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  });


  // Swiper slider
  var swiper = new Swiper(".trustedSwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 5 },
    }
  });

  // Fade-in observer for all pages
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("invisible");

        if (entry.target.classList.contains("client-logo")) {
          entry.target.classList.add("fadeInUp");
        } else if (entry.target.classList.contains("solution-card")) {
          entry.target.classList.add("fadeInUp");
        } else {
          entry.target.classList.add("fadeInRight");
        }

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".solution-card, .original-logos .client-logo, .contact-page .col-lg-5, .contact-page .col-lg-7, .about-hero, .about-content .col-lg-6, .py-5 .col-lg-4, .py-5.text-center, .services-hero, .service-card, .partners-hero, .partner-card").forEach(el => {
    observer.observe(el);
  });

  // Scroll to top button
  window.addEventListener("scroll", () => {
    document.getElementById("scrollTop").style.display =
      window.scrollY > 300 ? "block" : "none";
  });

  document.getElementById("scrollTop")?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

document.querySelectorAll('.client-logo').forEach((logo) => {
  // using Intersection Observer or your scroll logic
  logo.classList.add('visible');
});


