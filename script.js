let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  slides.forEach(slide => slide.classList.remove("active"));
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}

setInterval(showSlides, 3000); // tukar setiap 3 saat

let testiIndex = 0;
const testiSlides = document.querySelectorAll(".testimonial-slide");

function showTestimonial() {
  testiSlides.forEach(slide => slide.classList.remove("active"));
  testiIndex = (testiIndex + 1) % testiSlides.length;
  testiSlides[testiIndex].classList.add("active");
}

setInterval(showTestimonial, 4000); // tukar setiap 4 saat
const faders = document.querySelectorAll('.fade-in');

function fadeInOnScroll() {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', fadeInOnScroll);
fadeInOnScroll(); // trigger awal
const texts = ["Logo Yang Menjual...", "Identiti Yang Kukuh...", "Rekaan Profesional Bajet!"];
let textIndex = 0;
let charIndex = 0;
const typingSpeed = 100;
const typeText = document.getElementById("type-text");

function typeEffect() {
  if (charIndex < texts[textIndex].length) {
    typeText.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, typingSpeed);
  } else {
    setTimeout(() => {
      typeText.textContent = "";
      charIndex = 0;
      textIndex = (textIndex + 1) % texts.length;
      typeEffect();
    }, 2000);
  }
}

typeEffect();
// Auto-set tahun
document.getElementById("year").textContent = new Date().getFullYear();
