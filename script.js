// Location cycling animation
const locations = [
    'Maraimalai Nagar',
    'Singaperumal Kovil', 
    'Mahindra World City',
    'Pothri',
    'Guduvanchery'
];

let currentLocationIndex = 0;

function animateLocationText() {
    const locationElement = document.getElementById('locationText');
    if (!locationElement) return;
    
    locationElement.classList.add('animate');
    
    setTimeout(() => {
        currentLocationIndex = (currentLocationIndex + 1) % locations.length;
        locationElement.textContent = locations[currentLocationIndex];
    }, 200);
    
    setTimeout(() => {
        locationElement.classList.remove('animate');
    }, 2000);
}

// Start location animation
setInterval(animateLocationText, 4000);

// WhatsApp and Call functions
function openWhatsApp() {
    const message = encodeURIComponent(`Hi! I'm interested in DTCP approved plots in ${locations[currentLocationIndex]}. Can you share more details?`);
    window.open(`https://wa.me/919042004359?text=${message}`, '_blank');
}

function makeCall() {
    window.open('tel:+919042004359', '_self');
}

// Enhanced scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Stagger animation for grid items
                if (entry.target.classList.contains('features-grid') ||
                    entry.target.classList.contains('amenities-grid') ||
                    entry.target.classList.contains('gallery-grid')) {
                    staggerGridAnimation(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observe elements
    const elementsToAnimate = document.querySelectorAll(`
        .feature-card, .amenity-card, .gallery-item, 
        .testimonial-card, .faq-item, .spec-card,
        .features-grid, .amenities-grid, .gallery-grid,
        .fade-in-on-scroll, .slide-in-left, .slide-in-right
    `);
    
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
}

function staggerGridAnimation(container) {
    const items = container.children;
    Array.from(items).forEach((item, index) => {
        const delay = index * 100;
        setTimeout(() => {
            item.style.animation = `slideInUp 0.6s ease forwards`;
        }, delay);
    });
}

// Enhanced sticky CTA behavior
function initStickyCTA() {
    const stickyCTA = document.querySelector('.sticky-cta');
    const hero = document.querySelector('.hero');
    const footer = document.querySelector('.footer');
    
    if (!stickyCTA || !hero || !footer) return;
    
    const handleScroll = () => {
        const heroRect = hero.getBoundingClientRect();
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Show CTA after hero section
        if (heroRect.bottom < 0) {
            stickyCTA.style.opacity = '1';
            stickyCTA.style.visibility = 'visible';
        } else {
            stickyCTA.style.opacity = '0';
            stickyCTA.style.visibility = 'hidden';
        }
        
        // Hide CTA when footer is visible
        if (footerRect.top < windowHeight) {
            stickyCTA.style.transform = 'translateY(-50%) translateX(100px)';
        } else {
            stickyCTA.style.transform = 'translateY(-50%) translateX(0)';
        }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial state
    stickyCTA.style.opacity = '0';
    stickyCTA.style.visibility = 'hidden';
    stickyCTA.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
}

// Modern JavaScript with enhanced functionality
class ModernRealEstateLanding {
    constructor() {
        this.currentTestimonial = 0;
        this.totalTestimonials = 3;
        this.init();
    }

    init() {
        this.setupEventListeners();
        initScrollAnimations();
        initStickyCTA();
        this.initFloatingElements();
        this.initTestimonialSlider();
        this.initFormHandling();
        this.initNavigation();
        
        // Start location animation after a short delay
        setTimeout(() => {
            animateLocationText();
        }, 2000);
    }

    setupEventListeners() {
        // Navigation scroll effect
        window.addEventListener('scroll', this.handleScroll.bind(this));
        
        // Form submissions
        document.getElementById('heroLeadForm')?.addEventListener('submit', this.handleFormSubmit.bind(this));
        document.getElementById('modalLeadForm')?.addEventListener('submit', this.handleFormSubmit.bind(this));
        
        // Form validation
        this.initFormValidation();
        
        // Phone number formatting
        const phoneInputs = document.querySelectorAll('input[type="tel"]');
        phoneInputs.forEach(input => {
            input.addEventListener('input', this.formatPhoneNumber.bind(this));
        });

        // Auto-start testimonial slider
        this.startTestimonialAutoplay();
    }

    handleScroll() {
        const scrollY = window.scrollY;
        
        this.animateOnScroll();
        this.updateFloatingElements();
    }

    initFloatingElements() {
        const hero = document.querySelector('.hero');
        
        const formSection = document.querySelector('.hero');
        // Mouse move parallax effect
        hero.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            
            const xPercent = (clientX / innerWidth - 0.5) * 2;
            const yPercent = (clientY / innerHeight - 0.5) * 2;
            
            const shapes = hero.querySelectorAll('.floating-shape');
            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 0.02;
                const xMove = xPercent * 30 * speed;
                const yMove = yPercent * 30 * speed;
                
                shape.style.transform = `translate(${xMove}px, ${yMove}px)`;
            });
        });
    }

    updateFloatingElements() {
        // Update floating elements based on scroll
        const scrollY = window.scrollY;
        const shapes = document.querySelectorAll('.floating-shape');
        
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.0005;
            const yMove = scrollY * speed;
            shape.style.transform = `translateY(${yMove}px)`;
        });
    }

    initTestimonialSlider() {
        this.showTestimonial(0);
    }

    showTestimonial(index) {
        const cards = document.querySelectorAll('.testimonial-card');
        const dots = document.querySelectorAll('.dot');
        
        cards.forEach((card, i) => {
            card.classList.toggle('active', i === index);
        });
        
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        
        this.currentTestimonial = index;
    }

    nextTestimonial() {
        this.currentTestimonial = (this.currentTestimonial + 1) % this.totalTestimonials;
        this.showTestimonial(this.currentTestimonial);
    }

    previousTestimonial() {
        this.currentTestimonial = (this.currentTestimonial - 1 + this.totalTestimonials) % this.totalTestimonials;
        this.showTestimonial(this.currentTestimonial);
    }

    startTestimonialAutoplay() {
        setInterval(() => {
            this.nextTestimonial();
        }, 6000);
    }

    initFormHandling() {
        // Enhanced form validation and submission
        const forms = document.querySelectorAll('.hero-form, .lead-form');
        
        forms.forEach(form => {
            const inputs = form.querySelectorAll('input, select, textarea');
            
            inputs.forEach(input => {
                input.addEventListener('focus', this.handleInputFocus);
                input.addEventListener('blur', this.handleInputBlur);
                input.addEventListener('input', this.handleInputChange.bind(this));
            });
        });
    }

    initFormValidation() {
        // Real-time validation setup
        const emailInputs = document.querySelectorAll('input[type="email"]');
        const phoneInputs = document.querySelectorAll('input[type="tel"]');
        
        emailInputs.forEach(input => {
            input.addEventListener('blur', (e) => this.validateEmail(e.target));
        });
        
        phoneInputs.forEach(input => {
            input.addEventListener('blur', (e) => this.validatePhone(e.target));
        });
    }

    handleInputFocus(e) {
        e.target.closest('.form-group').classList.add('focused');
    }

    handleInputBlur(e) {
        e.target.closest('.form-group').classList.remove('focused');
        if (e.target.value) {
            e.target.closest('.form-group').classList.add('filled');
        } else {
            e.target.closest('.form-group').classList.remove('filled');
        }
    }

    handleInputChange(e) {
        const input = e.target;
        const formGroup = input.closest('.form-group');
        
        if (input.value) {
            formGroup.classList.add('filled');
        } else {
            formGroup.classList.remove('filled');
        }
        
        // Real-time validation
        this.validateInput(input);
    }

    validateInput(input) {
        const value = input.value.trim();
        const type = input.type;
        let isValid = true;
        
        if (input.hasAttribute('required') && !value) {
            isValid = false;
        } else if (type === 'email' && value && !this.isValidEmail(value)) {
            isValid = false;
        } else if (type === 'tel' && value && !this.isValidPhone(value)) {
            isValid = false;
        }
        
        input.style.borderColor = isValid ? 'var(--color-gray-200)' : 'var(--color-error)';
        return isValid;
    }

    validateEmail(input) {
        const isValid = this.isValidEmail(input.value);
        input.style.borderColor = isValid ? 'var(--color-success)' : 'var(--color-error)';
        return isValid;
    }

    validatePhone(input) {
        const isValid = this.isValidPhone(input.value);
        input.style.borderColor = isValid ? 'var(--color-success)' : 'var(--color-error)';
        return isValid;
    }

    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    isValidPhone(phone) {
        return /^[\d\s\-\+\(\)]{10,}$/.test(phone);
    }

    formatPhoneNumber(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.startsWith('91')) {
            value = value.substring(2);
        }
        if (value.length > 10) {
            value = value.substring(0, 10);
        }
        e.target.value = value;
    }

    handleFormSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Validate form
        if (!this.validateForm(form)) {
            return;
        }
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalContent = submitBtn.innerHTML;
        
        submitBtn.innerHTML = `
            <div class="loading-spinner"></div>
            <span>Submitting...</span>
        `;
        submitBtn.disabled = true;
        
        // Add loading spinner styles
        if (!document.getElementById('loading-styles')) {
            const style = document.createElement('style');
            style.id = 'loading-styles';
            style.textContent = `
                .loading-spinner {
                    width: 20px;
                    height: 20px;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    border-top-color: white;
                    animation: spin 1s ease-in-out infinite;
                }
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
        }
        
        // Simulate form submission
        setTimeout(() => {
            this.showSuccessMessage();
            form.reset();
            submitBtn.innerHTML = originalContent;
            submitBtn.disabled = false;
            this.sendToWhatsApp(data);
            this.trackConversion('form_submission', data);
        }, 2000);
    }

    validateForm(form) {
        const requiredInputs = form.querySelectorAll('[required]');
        let isValid = true;
        
        requiredInputs.forEach(input => {
            if (!this.validateInput(input)) {
                isValid = false;
            }
        });
        
        return isValid;
    }

    showSuccessMessage() {
        const notification = document.createElement('div');
        notification.className = 'success-notification';
        notification.innerHTML = `
            <div class="notification-content">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <div>
                    <h4>Thank you!</h4>
                    <p>We'll contact you within 24 hours</p>
                </div>
                <button class="close-notification" onclick="this.closest('.success-notification').remove()">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                </button>
            </div>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            z-index: 3000;
            background: var(--color-success);
            color: white;
            padding: var(--space-lg);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-2xl);
            animation: slideInRight 0.5s ease;
            max-width: 400px;
        `;
        
        if (!document.getElementById('notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = `
                .notification-content {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
                .notification-content svg:first-child {
                    width: 2rem;
                    height: 2rem;
                    color: rgba(255, 255, 255, 0.8);
                    flex-shrink: 0;
                }
                .notification-content h4 {
                    margin: 0;
                    font-weight: 700;
                    font-size: 1rem;
                }
                .notification-content p {
                    margin: 0;
                    opacity: 0.9;
                    font-size: 0.875rem;
                }
                .close-notification {
                    background: rgba(255, 255, 255, 0.2);
                    border: none;
                    color: white;
                    border-radius: 50%;
                    width: 30px;
                    height: 30px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    margin-left: auto;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .close-notification:hover {
                    background: rgba(255, 255, 255, 0.3);
                }
                @keyframes slideInRight {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (notification.parentElement) {
                notification.style.animation = 'slideInRight 0.5s ease reverse';
                setTimeout(() => {
                    notification.remove();
                }, 500);
            }
        }, 5000);
    }

    sendToWhatsApp(data) {
        const message = `New Lead for ${locations[currentLocationIndex]} Plots:
Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email || 'Not provided'}
Location: ${data.location || 'Not specified'}
Budget: ${data.budget || 'Not specified'}
Message: ${data.message || 'No additional message'}`;
        
        const whatsappUrl = `https://wa.me/919042004359?text=${encodeURIComponent(message)}`;
        
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
        }, 3000);
    }

    trackConversion(eventName, data) {
        // Google Analytics tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, {
                'event_category': 'engagement',
                'event_label': data.location || 'general',
                'value': 1
            });
        }
        
        // Facebook Pixel tracking
        if (typeof fbq !== 'undefined') {
            fbq('track', 'Lead', {
                content_name: 'Plot Inquiry',
                content_category: 'Real Estate',
                value: 1,
                currency: 'INR'
            });
        }
        
        console.log('Conversion tracked:', eventName, data);
    }

    initNavigation() {
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    const headerHeight = 80;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    initIntersectionObserver() {
        // Advanced intersection observer for performance
        const observerOptions = {
            rootMargin: '50px',
            threshold: 0.1
        };

        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        }, observerOptions);

        // Observe lazy load images
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    animateOnScroll() {
        const elements = document.querySelectorAll('.fade-in-on-scroll');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    }
}

// FAQ Toggle Function
function toggleFAQ(element) {
    const faqItem = element.closest('.faq-item');
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Toggle current item
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Testimonial Functions
function showTestimonial(index) {
    window.landingPage.showTestimonial(index);
}

function nextTestimonial() {
    window.landingPage.nextTestimonial();
}

function previousTestimonial() {
    window.landingPage.previousTestimonial();
}

function scrollToForm() {
    const heroForm = document.querySelector('.hero');
    if (heroForm) {
        heroForm.scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
        });
        
        // Focus on first input after scroll
        setTimeout(() => {
            const firstInput = document.querySelector('.hero-form input[type="text"]');
            if (firstInput) {
                firstInput.focus();
            }
        }, 800);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.landingPage = new ModernRealEstateLanding();
    initStickyMainCTA();
    initFormFocusEffect();
    
    // Start location animation after a short delay
    setTimeout(() => {
        animateLocationText();
    }, 2000);
});

// Sticky Main CTA functionality
function initStickyMainCTA() {
    const stickyCTA = document.querySelector('.sticky-main-cta');
    const hero = document.querySelector('.hero');
    const footer = document.querySelector('.footer');
    
    // Add null checks to prevent errors
    if (!stickyCTA || !hero || !footer) {
        return;
    }
    
    const handleScroll = () => {
        // Defensive check to prevent error if stickyCTA somehow becomes null
        if (!stickyCTA) {
            return;
        }

        const heroRect = hero.getBoundingClientRect();
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Show after hero section
        if (heroRect.bottom < 0) {
            stickyCTA.classList.add('visible');
        } else {
            stickyCTA.classList.remove('visible');
        }
        
        // Hide when footer is visible
        if (footerRect.top < windowHeight) {
            stickyCTA.classList.remove('visible');
        }
    };
    
    window.addEventListener('scroll', handleScroll);
}

// Form focus effect for side CTAs
function initFormFocusEffect() {
    const sideCTAs = document.getElementById('side-ctas');
    const formSection = document.querySelector('[data-form-section="true"]');
    
    if (!formSection || !sideCTAs) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const heroElement = document.querySelector('.hero');
            const footerElement = document.querySelector('.footer');
            
            // Add null checks before calling getBoundingClientRect()
            if (!heroElement || !footerElement) return;
            
            const formRect = formSection.getBoundingClientRect();
            const heroRect = heroElement.getBoundingClientRect();
            const footerRect = footerElement.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Show after hero section but hide when form or footer is visible
            if (heroRect.bottom < 0 && formRect.bottom < 0 && footerRect.top > windowHeight) {
                sideCTAs.classList.add('form-focused');
            } else {
                sideCTAs.classList.remove('form-focused');
            }
        });
    }, {
        threshold: 0.3
    });
    
    observer.observe(formSection);
}

// Main lead form function
function openMainLeadForm() {
    const formSection = document.querySelector('[data-form-section="true"]');
    if (formSection) {
        formSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
        });
        
        // Focus on first input after scroll
        setTimeout(() => {
            const firstInput = formSection.querySelector('input[type="text"]');
            if (firstInput) {
                firstInput.focus();
            }
        }, 800);
    }
}

// Service Worker Registration for PWA capabilities
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Preload critical resources
const preloadCriticalResources = () => {
    const criticalImages = [
        'https://seshasindiaprivatelimited.com/wp-content/uploads/2024/04/cropped-Seshas-india-trans-logo.png',
        'https://seshasindiaprivatelimited.com/wp-content/uploads/2025/07/Plots-for-Sale-in-Maraimalai-nagar.svg'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
};

// Initialize preloading
preloadCriticalResources();