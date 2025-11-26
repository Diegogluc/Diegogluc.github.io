// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll (maintain consistent color)
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.style.background = 'rgba(64, 71, 86, 0.95)';
    navbar.style.boxShadow = window.scrollY > 50
        ? '0 2px 20px rgba(0, 0, 0, 0.35)'
        : 'none';
});

// Active navigation link highlighting
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

// Intersection Observer for animations
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.project-card, .about-text, .skills');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
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

// Adicione esta função ao seu script existente
function handleMobileDropdown() {
    const dropdownToggle = document.querySelector('.nav-dropdown .nav-link');
    const dropdownContent = document.querySelector('.dropdown-content');
    
    if (window.innerWidth <= 768) {
        dropdownToggle.addEventListener('click', (e) => {
            e.preventDefault();
            dropdownContent.classList.toggle('mobile-active');
        });
    }
}

// Chame a função quando o documento carregar
document.addEventListener('DOMContentLoaded', handleMobileDropdown);

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Removed parallax effect on hero section to keep background/content in sync

// Add hover effects to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Contact form validation (if you add a form later)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Add click tracking for analytics (optional)
function trackClick(element, action) {
    // Add your analytics tracking code here
    console.log(`Tracked: ${action} on ${element}`);
}

// Add event listeners for tracking
document.querySelectorAll('.btn, .project-link, .contact-link').forEach(element => {
    element.addEventListener('click', (e) => {
        trackClick(e.target, 'click');
    });
});

// Lazy loading for images (if you add images later)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
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
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Add a simple loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Console welcome message
console.log(`
🚀 Welcome to your personal website!
📧 Feel free to customize the content and styling
🔗 Don't forget to update the contact links with your real information
`);

// Add some fun easter eggs
let clickCount = 0;
document.querySelector('.profile-image').addEventListener('click', () => {
    clickCount++;
    if (clickCount === 5) {
        alert('🎉 You found the easter egg! This website is built with love ❤️');
        clickCount = 0;
    }
});
