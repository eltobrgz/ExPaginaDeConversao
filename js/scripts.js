/**
 * Segredos da Obsessão Masculina - Scripts
 * Versão: 1.0
 */

// Espera até que o DOM esteja completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Inicializa AOS Animation
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true
        });
    }
    
    // Contador Regressivo
    initCountdown();
    
    // FAQ Toggle
    initFaqToggle();
    
    // Menu Mobile
    initMobileMenu();
    
    // Smooth Scroll
    initSmoothScroll();
    
    // Botão Voltar ao Topo
    initBackToTopButton();
});

/**
 * Inicializa o contador regressivo
 */
function initCountdown() {
    function updateCountdown() {
        const now = new Date();
        const hours = 23 - now.getHours();
        const minutes = 59 - now.getMinutes();
        const seconds = 59 - now.getSeconds();
        
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        
        if (hoursEl && minutesEl && secondsEl) {
            hoursEl.innerText = hours < 10 ? '0' + hours : hours;
            minutesEl.innerText = minutes < 10 ? '0' + minutes : minutes;
            secondsEl.innerText = seconds < 10 ? '0' + seconds : seconds;
        }
    }
    
    setInterval(updateCountdown, 1000);
    updateCountdown();
}

/**
 * Inicializa o toggle das perguntas frequentes
 */
function initFaqToggle() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            question.classList.toggle('active');
            const icon = question.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-chevron-down');
                icon.classList.toggle('fa-chevron-up');
            }
        });
    });
}

/**
 * Inicializa o menu mobile
 */
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const closeMenu = document.querySelector('.close-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
    
    if (hamburger && mobileMenuOverlay && closeMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        closeMenu.addEventListener('click', () => {
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuOverlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
    }
}

/**
 * Inicializa o scroll suave para os links de âncora
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetEl = document.querySelector(this.getAttribute('href'));
            if (targetEl) {
                targetEl.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Inicializa o botão Voltar ao Topo
 */
function initBackToTopButton() {
    const backToTopButton = document.querySelector('.back-to-top');
    
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });
    }
}
