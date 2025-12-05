// MAIN.JS — funções simples para a landing page

// ===== Smooth Scroll do botão CTA =====
const ctaBtn = document.querySelector('.cta-button');
if (ctaBtn) {
  ctaBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector('#pricing');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
}

// ===== Pequena animação ao rolar =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.testimonial-card, .feature-card, .pricing-card, .choice-card').forEach((el) => {
  el.classList.add('hidden');
  observer.observe(el);
});
