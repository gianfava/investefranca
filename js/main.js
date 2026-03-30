(function () {
  'use strict';

  /* ============================
     ELEMENTOS DO DOM
  ============================ */
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const scrollTopBtn = document.getElementById('scrollTop');
  const sections = document.querySelectorAll('section[id]');
  const accordionItems = document.querySelectorAll('.accordion-item');

  /* ============================
     NAVBAR — SCROLL EFFECT
  ============================ */
  function handleNavbarScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  /* ============================
     NAVBAR — MENU MOBILE
  ============================ */
  function toggleMobileMenu() {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeMobileMenu() {
    navMenu.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  navToggle.addEventListener('click', toggleMobileMenu);

  // Fechar menu ao clicar em um link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Fechar menu ao clicar fora
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('open') &&
        !navMenu.contains(e.target) &&
        !navToggle.contains(e.target)) {
      closeMobileMenu();
    }
  });

  /* ============================
     NAVBAR — LINK ATIVO AO SCROLL
  ============================ */
  function updateActiveNavLink() {
    let currentSection = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href').replace('#', '');
      if (href === currentSection) {
        link.classList.add('active');
      }
    });
  }

  /* ============================
     SCROLL SUAVE — LINKS ÂNCORA
  ============================ */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const navHeight = navbar.offsetHeight;
      const targetTop = target.offsetTop - navHeight;

      window.scrollTo({
        top: targetTop,
        behavior: 'smooth'
      });
    });
  });

  /* ============================
     SCROLL TO TOP BUTTON
  ============================ */
  function handleScrollTopVisibility() {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ============================
     ACCORDION
  ============================ */
  // accordionItems.forEach((item, index) => {
  //   const header = item.querySelector('.accordion-header');
  //   const body = item.querySelector('.accordion-body');
  //   const toggleIcon = header.querySelector('.acc-toggle i');

  //   header.addEventListener('click', () => {
  //     const isActive = item.classList.contains('active');

  //     // Fechar todos os itens abertos
  //     accordionItems.forEach((otherItem) => {
  //       if (otherItem !== item && otherItem.classList.contains('active')) {
  //         const otherBody = otherItem.querySelector('.accordion-body');
  //         const otherHeader = otherItem.querySelector('.accordion-header');
  //         const otherToggleIcon = otherHeader.querySelector('.acc-toggle i');

  //         otherItem.classList.remove('active');
  //         otherBody.setAttribute('hidden', '');
  //         otherHeader.setAttribute('aria-expanded', 'false');

  //         // Mudar para ícone de "+"
  //         otherToggleIcon.classList.remove('fa-minus');
  //         otherToggleIcon.classList.add('fa-plus');
  //       }
  //     });

  //     // Alternar item atual
  //     if (isActive) {
  //       item.classList.remove('active');
  //       body.setAttribute('hidden', '');
  //       header.setAttribute('aria-expanded', 'false');
  //       toggleIcon.classList.remove('fa-minus');
  //       toggleIcon.classList.add('fa-plus');
  //     } else {
  //       item.classList.add('active');
  //       body.removeAttribute('hidden');
  //       header.setAttribute('aria-expanded', 'true');
  //       toggleIcon.classList.remove('fa-plus');
  //       toggleIcon.classList.add('fa-minus');

  //       // Scroll suave até o item aberto
  //       setTimeout(() => {
  //         const navHeight = navbar.offsetHeight;
  //         const itemTop = item.getBoundingClientRect().top + window.scrollY - navHeight - 16;
  //         window.scrollTo({ top: itemTop, behavior: 'smooth' });
  //       }, 50);
  //     }
  //   });
  // });

  accordionItems.forEach((item) => {
  const header = item.querySelector('.accordion-header');
  const body = item.querySelector('.accordion-body');
  const toggleIcon = header.querySelector('.acc-toggle i');

  header.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    // Fechar outros itens
    accordionItems.forEach((otherItem) => {
      if (otherItem !== item && otherItem.classList.contains('active')) {
        const otherBody = otherItem.querySelector('.accordion-body');
        const otherToggleIcon = otherItem.querySelector('.acc-toggle i');

        otherItem.classList.remove('active');
        otherBody.style.maxHeight = null; // Remove a altura para fechar suave
        otherToggleIcon.classList.replace('fa-minus', 'fa-plus');
      }
    });

    // Alternar item atual
    if (isActive) {
      item.classList.remove('active');
      body.style.maxHeight = null; // Fecha suave
      toggleIcon.classList.replace('fa-minus', 'fa-plus');
    } else {
      item.classList.add('active');
      // Define a altura máxima como a altura real do conteúdo interno
      body.style.maxHeight = body.scrollHeight + "px"; 
      toggleIcon.classList.replace('fa-plus', 'fa-minus');

      // Scroll suave até o item aberto
      setTimeout(() => {
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const itemTop = item.getBoundingClientRect().top + window.scrollY - navHeight - 16;
        window.scrollTo({ top: itemTop, behavior: 'smooth' });
      }, 300); // Espera um pouco a animação começar
    }
  });
});





  /* ============================
     INTERSECTION OBSERVER — ANIMAÇÕES
  ============================ */
  const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observar elementos animáveis
  const animatableSelectors = [
    '.feature-item',
    '.investe-card',
    '.person-photo',
    '.accordion-item',
    '.badge-item',
    '.recognition-photo-wrap',
    '.testimonial-quote',
    '.stat-item'
  ];

  animatableSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transitionDelay = `${i * 0.08}s`;
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(el);
    });
  });

  // Quando animado, remover as transformações
  const animObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        animObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  animatableSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      animObserver.observe(el);
    });
  });

  /* ============================
     CONTADOR NUMÉRICO (HERO STATS)
  ============================ */
  function animateCounter(el, target, suffix = '', duration = 1500) {
    let start = 0;
    const step = target / (duration / 16);
    const isDecimal = String(target).includes('.');

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      el.textContent = (isDecimal ? start.toFixed(1) : Math.floor(start)) + suffix;
    }, 16);
  }

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const statNums = entry.target.querySelectorAll('.stat-num');
        statNums.forEach(num => {
          const text = num.textContent;
          if (text.includes('%')) {
            animateCounter(num, parseFloat(text), '%');
          } else if (text.includes('+')) {
            animateCounter(num, parseInt(text), '+');
          } else if (text.includes('h')) {
            // Não animar "24h"
          }
        });
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) statsObserver.observe(heroStats);

  /* ============================
     EVENTO PRINCIPAL DE SCROLL
  ============================ */
  let scrollRAF = null;

  function onScroll() {
    if (scrollRAF) return;
    scrollRAF = requestAnimationFrame(() => {
      handleNavbarScroll();
      handleScrollTopVisibility();
      updateActiveNavLink();
      scrollRAF = null;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  /* ============================
     INICIALIZAÇÃO
  ============================ */
  handleNavbarScroll();
  handleScrollTopVisibility();
  updateActiveNavLink();

  // Keyboard Accessibility — fechar menu com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      closeMobileMenu();
      navToggle.focus();
    }
  });

  console.log('[Franca] Site iniciado com sucesso ✅');
})();


// Adicionar ao final do seu arquivo js/main.js
const aplicarEfeito3D = () => {
  const cards = document.querySelectorAll('.feature-item, .investe-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Aumentamos a intensidade para 20deg para o efeito ser bem visível
      const rotateX = ((y - centerY) / centerY) * -20; 
      const rotateY = ((x - centerX) / centerX) * 20;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
    });
  });
};

// Executa a função
aplicarEfeito3D();