/**
 * Diego G. de Lucena - Portfolio Website
 * Main JavaScript File
 */

// =====================================================================
// MOBILE NAVIGATION TOGGLE
// =====================================================================

const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (!navMenu || !navToggle) return;
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// =====================================================================
// SMOOTH SCROLLING FOR NAVIGATION LINKS
// =====================================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#projects') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// =====================================================================
// NAVBAR STYLING ON SCROLL
// =====================================================================

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.boxShadow = window.scrollY > 50
            ? '0 2px 20px rgba(0, 0, 0, 0.35)'
            : 'none';
    }
});

// =====================================================================
// ACTIVE NAVIGATION LINK HIGHLIGHTING
// =====================================================================

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// =====================================================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// =====================================================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll(
        '.project-card, .about-text, .skills'
    );
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// =====================================================================
// TYPING ANIMATION FOR HERO TITLE
// =====================================================================

function typeWriter(element, text, speed = 100) {
    if (!element) return;
    
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});

// =====================================================================
// HOVER EFFECTS FOR PROJECT CARDS
// =====================================================================

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// =====================================================================
// EMAIL VALIDATION UTILITY
// =====================================================================

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// =====================================================================
// EASTER EGG - Profile Image Click Counter
// =====================================================================

let clickCount = 0;
const profileImage = document.querySelector('.profile-image');

if (profileImage) {
    profileImage.addEventListener('click', () => {
        clickCount++;
        if (clickCount === 5) {
            alert('🎉 You found the easter egg! This website is built with love ❤️');
            clickCount = 0;
        }
    });
}

// =====================================================================
// CONSOLE WELCOME MESSAGE
// =====================================================================

console.log(`
🚀 Welcome to Diego's Portfolio!
📧 Feel free to customize the content and styling
🔗 Don't forget to update the contact links with real information
📱 Responsive design tested on all major browsers
`);

// =====================================================================
// PAGE LOAD ANIMATION
// =====================================================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// =====================================================================
// UTILITY: Track Navigation Events (Optional - for Analytics)
// =====================================================================

function trackEvent(category, action, label = '') {
    // Implement your analytics tracking here
    // Example for Google Analytics, Mixpanel, etc.
    console.log(`[Analytics] ${category} > ${action} ${label}`);
}

// Uncomment to enable event tracking
// document.querySelectorAll('.btn, .project-link, .contact-link').forEach(element => {
//     element.addEventListener('click', (e) => {
//         trackEvent('engagement', 'click', e.target.textContent);
//     });
// });

// =====================================================================
// LAZY LOADING FOR IMAGES (if data-src attribute is used)
// =====================================================================

function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

document.addEventListener('DOMContentLoaded', lazyLoadImages);

// =====================================================================
// ACCESSIBILITY: Skip to Main Content
// =====================================================================

const skipLink = document.querySelector('.skip-to-main');
if (skipLink) {
    skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        const mainContent = document.querySelector('main') || document.querySelector('.projects');
        if (mainContent) {
            mainContent.focus();
            mainContent.scrollIntoView();
        }
    });
}

// =====================================================================
// LIGHTBOX - Image Zoom Functionality
// =====================================================================

document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');
    
    if (!lightbox || !lightboxImg) return;
    
    // Torna as imagens clicáveis
    const clickableImages = document.querySelectorAll('.screenshot-image');
    
    clickableImages.forEach(img => {
        img.classList.add('clickable');
        
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Função para fechar
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Fecha ao clicar no X
    lightboxClose.addEventListener('click', closeLightbox);
    
    // Fecha ao clicar fora da imagem
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    
    // Fecha ao pressionar ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
    });
});