import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, CheckCircle, Star, Menu, X, Clock, Users, Award, Shield, Home, Building, Car, Zap, TreePine, GraduationCap, Heart as Hospital, Train, ChevronDown, ChevronUp, MessageCircle, Play, Pause } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentLocation, setCurrentLocation] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const testimonialIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Location cycling from original script.js
  const locations = [
    'Maraimalai Nagar',
    'Singaperumal Kovil', 
    'Mahindra World City',
    'Pothri',
    'Guduvanchery'
  ];

  // Start location animation
  useEffect(() => {
    const startAnimation = () => {
      intervalRef.current = setInterval(() => {
        setCurrentLocation(prev => (prev + 1) % locations.length);
      }, 4000);
    };

    // Start after 2 seconds like original
    const timeout = setTimeout(startAnimation, 2000);

    return () => {
      clearTimeout(timeout);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Testimonial auto-play
  useEffect(() => {
    testimonialIntervalRef.current = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 6000);

    return () => {
      if (testimonialIntervalRef.current) clearInterval(testimonialIntervalRef.current);
    };
  }, []);

  // WhatsApp and Call functions from script.js
  const openWhatsApp = () => {
    const message = encodeURIComponent(`Hi! I'm interested in DTCP approved plots in ${locations[currentLocation]}. Can you share more details?`);
    window.open(`https://wa.me/919042004359?text=${message}`, '_blank');
  };

  const makeCall = () => {
    window.open('tel:+919042004359', '_self');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Form submission handler
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFormSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    setTimeout(() => {
      setIsFormSubmitting(false);
      setShowSuccess(true);
      (e.target as HTMLFormElement).reset();
      
      // Send to WhatsApp
      sendToWhatsApp(data);
      
      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    }, 2000);
  };

  const sendToWhatsApp = (data: any) => {
    const message = `New Lead for ${locations[currentLocation]} Plots:
Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email || 'Not provided'}
Location: ${data.location || 'Not specified'}
Budget: ${data.budget || 'Not specified'}
Message: ${data.message || 'No additional message'}`;
    
    const whatsappUrl = `https://wa.me/919042004359?text=${encodeURIComponent(message)}`;
    setTimeout(() => window.open(whatsappUrl, '_blank'), 3000);
  };

  // ALL Gallery Images from HTML page with context
  const galleryImages = [
    {
      src: "https://seshasindiaprivatelimited.com/wp-content/uploads/2025/07/Plots-For-Marimalai-nagar-_-Grass-1024x768.webp",
      title: "Grass Ground",
      description: "Well-maintained green spaces throughout the community"
    },
    {
      src: "https://seshasindiaprivatelimited.com/wp-content/uploads/2025/07/Street-Lights-1024x768.webp",
      title: "Street Lights",
      description: "Well-lit roads ensuring safety and security"
    },
    {
      src: "https://seshasindiaprivatelimited.com/wp-content/uploads/2025/07/ground-Water-Connections-1024x768.webp",
      title: "Ground Water Connections",
      description: "Reliable water supply infrastructure"
    },
    {
      src: "https://seshasindiaprivatelimited.com/wp-content/uploads/2025/07/33-feet-roads--1024x768.webp",
      title: "33 Feet Road",
      description: "Wide concrete roads for easy accessibility"
    },
    {
      src: "https://seshasindiaprivatelimited.com/wp-content/uploads/2025/07/Gated-Community--1024x768.webp",
      title: "Gated Community",
      description: "Secure entrance with 24/7 security"
    },
    {
      src: "https://seshasindiaprivatelimited.com/wp-content/uploads/2025/06/386f4e0f-ad51-4013-8d9a-ee55cf8e8878-1024x768.jpeg",
      title: "Ready for Construction",
      description: "Plots ready for immediate construction"
    },
    {
      src: "https://seshasindiaprivatelimited.com/wp-content/uploads/2025/07/Plots-for-Sale-in-Maraimalai-nagar.svg",
      title: "Site Layout Plan",
      description: "Detailed layout of the MM City project"
    },
    {
      src: "https://seshasindiaprivatelimited.com/wp-content/uploads/2025/06/86c7db33-e1be-4b2e-b820-8ab476c34ed8-768x432.jpeg",
      title: "Project Overview",
      description: "Complete view of the development"
    },
    {
      src: "https://seshasindiaprivatelimited.com/wp-content/uploads/2025/06/153A5538-768x512.jpg",
      title: "Site Development",
      description: "Latest construction progress"
    }
  ];

  // ALL Blog Posts with actual images from HTML
  const blogPosts = [
    {
      title: "Residential Plots in Maraimalai Nagar by Seshas – Invest Smart, Live Better",
      image: "https://seshasindiaprivatelimited.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-21-at-15.23.42_433e51c1-300x169.jpg",
      excerpt: "Residential Plots in Maraimalai Nagar by Seshas – Invest Smart, Live Better...",
      date: "July 21, 2025"
    },
    {
      title: "Plots Near Maraimalai Nagar – Smart Investment for a Secure Future",
      image: "https://seshasindiaprivatelimited.com/wp-content/uploads/2025/07/Website-300x128.png",
      excerpt: "Plots near Maraimalai Nagar—The Best Investment You Can Make...",
      date: "July 17, 2025"
    },
    {
      title: "Land for Sale in Maraimalai Nagar – The Smart Investment You've Been Waiting For",
      image: "https://seshasindiaprivatelimited.com/wp-content/uploads/2025/07/Gated-Community--300x225.webp",
      excerpt: "Land for Sale in Maraimalai Nagar – The Smart Investment...",
      date: "July 14, 2025"
    }
  ];

  // Customer testimonials from original page
  const testimonials = [
    {
      name: "Sneha S",
      rating: 5,
      text: "Buying land for the first time is usually stressful, but Seshas Groups made it easy. On-road location, and the site is ready for construction. Their team helped with loan options too. Thank you for helping me take the first step towards building my dream home! Highly recommended!",
      date: "2025-07-19"
    },
    {
      name: "Anuja Fernando",
      rating: 4,
      text: "I had a great experience with Seshas Groups. Everything was explained clearly, from plot size to legal process. No hidden charges, and the booking process was simple. Would definitely recommend them to friends and family",
      date: "2025-07-19"
    },
    {
      name: "Juliet Kitty",
      rating: 5,
      text: "Visited the Thirukachur site last week. Excellent location with direct access from the main road. I was impressed with the security, layout quality, and nearby development. The staff were friendly, honest, and didn't pressure us. Worth checking out!",
      date: "2025-07-19"
    }
  ];

  // FAQ data from original page
  const faqs = [
    {
      question: "Is EMI or loan facility available for plot purchase?",
      answer: "Yes, up to 90% bank loan is available from leading financial institutions. EMI options are also offered based on your eligibility"
    },
    {
      question: "Are the plots in MM City DTCP and RERA approved?",
      answer: "Yes, all plots in MM City are fully DTCP and RERA approved, ensuring complete legal compliance and peace of mind."
    },
    {
      question: "Can I start construction immediately after purchase?",
      answer: "Yes, since the layout is fully approved and developed, you can begin construction right after registration and loan approval (if applicable)."
    },
    {
      question: "How do I book a plot in MM City, Maraimalai Nagar?",
      answer: "You can book a plot by scheduling a site visit with our sales team, selecting your preferred plot, and paying the initial booking amount. Documentation and payment plans will follow"
    },
    {
      question: "What documents are required to buy a plot?",
      answer: "You will need a valid ID proof, address proof, PAN card, and photographs. Our team will assist you with the full documentation process."
    },
    {
      question: "What is the size of the plots available in MM City?",
      answer: "Plots are available in various sizes, typically ranging from 800 sq. ft. to 1600 sq. ft., suitable for different budgets and construction plans."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Success Notification */}
      {showSuccess && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white p-4 rounded-lg shadow-lg flex items-center space-x-3 max-w-md">
          <CheckCircle className="h-6 w-6" />
          <div>
            <h4 className="font-semibold">Thank you!</h4>
            <p className="text-sm">We'll contact you within 24 hours</p>
          </div>
          <button 
            onClick={() => setShowSuccess(false)}
            className="text-white hover:text-gray-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      )}

      {/* Header - Using actual logo from HTML */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo from HTML page */}
            <div className="flex-shrink-0">
              <img 
                src="https://seshasindiaprivatelimited.com/wp-content/uploads/2024/04/cropped-Seshas-india-trans-logo.png" 
                alt="Seshas India" 
                className="h-8 sm:h-10 lg:h-12 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About us</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Property</a>
              <a href="#" className="text-blue-600 font-medium">MM City</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact Us</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Blogs</a>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About us</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Property</a>
                <a href="#" className="block px-3 py-2 text-blue-600 font-medium">MM City</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact Us</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Blogs</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section - Using actual background from HTML */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://seshasindiaprivatelimited.com/wp-content/uploads/2025/06/82f8bef9-4302-4a41-badd-360f7694cf85.jpeg')`
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              DTCP Approved Plots for sale in{' '}
              <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent animate-pulse">
                {locations[currentLocation]}
              </span>
              <span className="block text-yellow-400 mt-2">Secure Yours Today</span>
            </h1>
            
            <div className="mb-8 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <button 
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto"
              >
                Request Call Back →
              </button>
              <button 
                onClick={openWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Now
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
              <p className="text-xl md:text-2xl font-semibold">
                2800 Rs sq ft - Plots Starts From 22 Lakhs Onwards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DTCP Approval Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              DTCP No 223/2023 , TN 35/ Layout/0225/2025
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Shield className="h-8 w-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Well-Developed Gated Community</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Award className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">DTCP & RERA Approved</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Home className="h-8 w-8 text-orange-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Ready for Constructions</h3>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Exclusive Plots Available in Maraimalai Nagar - DTCP Approved Listings
            </h2>
            
            <div className="flex items-center justify-center text-gray-600 mb-6">
              <MapPin className="h-5 w-5 mr-2" />
              <span>503/3 ,Thirukachur Village Maraimalai Nagar</span>
            </div>
          </div>
        </div>
      </section>

      {/* MM City Overview - PROFESSIONAL FORM WIDTH FIXED */}
      <section id="contact-form" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">MM City Overview</h2>
              <div className="prose prose-lg text-gray-600">
                <blockquote className="border-l-4 border-blue-600 pl-6">
                  <p className="mb-4">
                    <strong>Seshas India Private Limited</strong> proudly introduces <em>MM City</em>, 
                    a premium gated community offering plots for sale in Maraimalai Nagar. 
                    This meticulously developed township is <strong>DTCP</strong> and <strong>RERA</strong> approved, 
                    ensuring legal clarity and investment security.
                  </p>
                  <p className="mb-4">
                    Ready for immediate construction, the site features wide 33 ft and 24 ft fully compounded concrete roads, 
                    modern drainage, and well-lit roadways for safe, seamless living.
                  </p>
                  <p className="mb-4">
                    MM City, a self-sufficient layout in Chennai's fastest-growing suburbs, offers ideal locations for families and professionals. 
                    With loan availability up to 90%, owning a dream plot is now easier.
                  </p>
                  <div className="text-center my-6">
                    <img 
                      src="https://seshasindiaprivatelimited.com/wp-content/uploads/2025/06/approved-removebg-preview-1.png" 
                      alt="DTCP-approved Plots in maraimalai nagar" 
                      className="inline-block w-24 h-20"
                    />
                  </div>
                </blockquote>
              </div>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full sm:w-auto">
                  Download Brochure →
                </button>
                <button 
                  onClick={makeCall}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full sm:w-auto flex items-center justify-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </button>
              </div>
            </div>

            {/* PROFESSIONAL FORM WIDTH - FIXED! */}
            <div className="bg-gray-50 p-6 lg:p-8 rounded-xl shadow-lg">
              <div className="w-full max-w-2xl mx-auto"> {/* INCREASED WIDTH FROM max-w-md TO max-w-2xl */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Get Expert Consultation</h3>
                <form onSubmit={handleFormSubmit} className="space-y-6"> {/* INCREASED SPACING */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        name="name"
                        placeholder="Enter your first name" 
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        placeholder="Enter your phone number" 
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Enter your email address" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select 
                      name="budget"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select budget range</option>
                      <option value="20-30 lakhs">₹20-30 Lakhs</option>
                      <option value="30-50 lakhs">₹30-50 Lakhs</option>
                      <option value="50-1 crore">₹50 Lakhs - 1 Crore</option>
                      <option value="1+ crore">₹1+ Crore</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Requirements
                    </label>
                    <textarea 
                      name="message"
                      placeholder="Tell us about your requirements" 
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={isFormSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center text-lg" /* INCREASED PADDING AND FONT SIZE */
                  >
                    {isFormSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      'Send Message & Get Free Consultation'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Where Everything You Need is Just Around the Corner
            </h2>
            <h3 className="text-xl text-gray-600">Plots for Sale in Maraimalai Nagar</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <GraduationCap className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-bold text-lg mb-3">SCHOOLS</h3>
              <p className="text-gray-600 text-sm">
                Govt School- 1.2km, St. Joseph Higher Sec Schools, 
                Shankara Vidhalya Schools – 4.7 Km, Govt High Schools Thirukachur-4.5k
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <Building className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-bold text-lg mb-3">COLLEGES</h3>
              <p className="text-gray-600 text-sm">
                Valliammai Engineering College – 8km, SRM Arts & Science- 4km, 
                CSI Edward Women's Christian College – 4km
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <Hospital className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-bold text-lg mb-3">HOSPITALS</h3>
              <p className="text-gray-600 text-sm">
                SRM Global Hospital – 7.5KM, RKP Multi Speciality Hospitals- 12 Km, 
                SRM General Hospitals – 4.5 Km
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <Train className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-bold text-lg mb-3">TRANSIT</h3>
              <p className="text-gray-600 text-sm">
                Maraimalai Nagar Railway Stations-3 km, Maraimalar Nagar Bus Stand -3Km, 
                Kilambakkam Bus stand 15 KM.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <TreePine className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-bold text-lg mb-3">TEMPLES</h3>
              <p className="text-gray-600 text-sm">
                Kachabeshwarar Temple-750Km, Marudheeswarar Temple-300m, 
                Singaperumal Kovil -2.km
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <Building className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-bold text-lg mb-3">COMPANIES</h3>
              <p className="text-gray-600 text-sm">
                Zoho Company -8.5km, Mahindra World City -9Km, 
                Valeo Friction Materials India Pvt Ltd -5.5km
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plot Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              DTCP & RERA Approval Plots with 90% Loan Facilities
            </h2>
            <h3 className="text-2xl font-semibold text-gray-700 mb-8">
              Plot Availability & Details in Maraimalai Nagar (MM City)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <div className="text-sm text-gray-600">
                <strong className="text-gray-900">Property Name</strong>: MM CITY
              </div>
              <div className="text-sm text-gray-600">
                <strong className="text-gray-900">Sq.ft Rate</strong>: 2800 to 3000 Per Sq.ft (Negotiable)
              </div>
              <div className="text-sm text-gray-600">
                <strong className="text-gray-900">Feet Road</strong>: 33 Feet
              </div>
              <div className="text-sm text-gray-600">
                <strong className="text-gray-900">Loan Limit</strong>: 100%
              </div>
              <div className="text-sm text-gray-600">
                <strong className="text-gray-900">Total No Available Plots</strong>: 30+
              </div>
              <div className="text-sm text-gray-600">
                <strong className="text-gray-900">Unit Type</strong>: Residential Plots and Villas
              </div>
              <div className="text-sm text-gray-600">
                <strong className="text-gray-900">Price Starts From</strong>: ₹ 20 lakhs
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-sm text-gray-600">
                <strong className="text-gray-900">Plots Size</strong>: 800 to 1600 Sq.ft
              </div>
              <div className="text-sm text-gray-600">
                <strong className="text-gray-900">Approved By</strong>: DTCP Layout, RERA
              </div>
              <div className="text-sm text-gray-600">
                <strong className="text-gray-900">Plots Facing</strong>: North & West, North, South, West, South & West
              </div>
              <div className="text-sm text-gray-600">
                <strong className="text-gray-900">Location</strong>: Thirukachur Villages, Maraimalai Nagar
              </div>
              <div className="text-sm text-gray-600">
                <strong className="text-gray-900">House Site S.No</strong>: 384/4, 503/3, 503/4
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-sm text-gray-600">
                <strong className="text-gray-900">Ground Water Connection</strong>: Yes
              </div>
              <div className="text-sm text-gray-600">
                <strong className="text-gray-900">Electric Connection</strong>: Yes
              </div>
              <div className="text-sm text-gray-600">
                <strong className="text-gray-900">Project Developer</strong>: SESHAS INDIA PRIVATE LIMITED
              </div>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <button 
                onClick={openWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp for Details
              </button>
              <button 
                onClick={makeCall}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call for Site Visit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Site Gallery - ALL IMAGES FROM HTML PAGE */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Site Gallery</h2>
            <p className="text-gray-600">Explore our premium development with authentic site photos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-all">
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.title} 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{image.title}</h3>
                  <p className="text-gray-600 text-sm">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://seshasindiaprivatelimited.com/wp-content/uploads/2025/06/153A5538-768x512.jpg" 
                alt="Site Development Progress" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Project Highlights: Seshas Groups MM City
              </h2>
              <p className="text-gray-600 mb-6">
                Situated in the tranquil surroundings of Thirukachur, MM City, one of our most well-liked projects, 
                is only a short distance from the center of Maraimalai Nagar. These plots for sale in Maraimalai Nagar 
                are surrounded by green spaces and are close to educational institutions, industry, and spiritual centers 
                such as the renowned <strong>Thirukachur Temple</strong>.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">South-facing plots with increased acreage</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Wide internal roadways and drainage system</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Patta-ready with a clear title</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Close proximity to schools, universities, and offices</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Peaceful and pollution-free atmosphere</span>
                </div>
              </div>
              <button 
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Buy Plots in Maraimalai Nagar – Thirukachur?
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">1. Strategic location</h3>
                  <p className="text-gray-600">Maraimalai Nagar is located on <strong>GST Road (NH45)</strong>, one of Chennai's main arterial highways.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2. Rapid Infrastructure Growth</h3>
                  <p className="text-gray-600">Maraimalai Nagar has had constant infrastructure growth over the years, with highways, flyovers, schools, colleges, and healthcare facilities sprouting up in and around the region.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">3. Reasonable Land Prices</h3>
                  <p className="text-gray-600">With great potential for appreciation, Maraimalai Nagar land rate is relatively reasonable when compared to other areas of Chennai.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Loan Assistance</h3>
                  <p className="text-gray-600">Seshas Groups offers exceptional deals that increase the value of your investment, such as <strong>free interior work or extra 240-square-foot plots</strong> on certain reservations.</p>
                </div>
              </div>
              <button 
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Book Now
              </button>
            </div>
            <div className="order-first lg:order-last">
              <img 
                src="https://seshasindiaprivatelimited.com/wp-content/uploads/2025/06/86c7db33-e1be-4b2e-b820-8ab476c34ed8-768x432.jpeg" 
                alt="Maraimalai Nagar Development" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Customers says...</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`bg-gray-50 p-6 rounded-lg shadow-md transition-all ${
                  index === currentTestimonial ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">{testimonial.date}</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">Verified Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions (FAQs)
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{index + 1}. {faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section - Using actual images from HTML */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest News & Updates</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Location</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 mb-8">
              <div>
                <strong>Address</strong>: 503/3, Thirukachur Village Maraimalai Nagar<br />
                <strong>Zip</strong>: 603209
              </div>
              <div>
                <strong>City</strong>: Chennai<br />
                <strong>Country</strong>: India
              </div>
              <div>
                <strong>Area</strong>: Marai Malai Nagar
              </div>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://maps.google.com/maps?q=%20503%2F3%2C%20Thirukkachur%2C%20Maraimalai%20Nagar%2C%20Kattankolatur%20R.F.%2C%20Tamil%20Nadu%20603209&t=m&z=14&output=embed&iwloc=near"
              width="100%" 
              height="400" 
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MM City Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* MINIMAL RESPONSIVE FOOTER - COMPLETELY REDESIGNED */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info - Mobile First */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1 text-center md:text-left">
              <img 
                src="https://seshasindiaprivatelimited.com/wp-content/uploads/2024/03/cropped-Seshass-india-logo-1-1-1.png" 
                alt="Seshas India" 
                className="h-12 mx-auto md:mx-0 mb-4 brightness-0 invert"
              />
              <p className="text-gray-300 text-sm mb-6 max-w-xs mx-auto md:mx-0">
                Your gateway to affordable housing in Chennai's fastest-growing suburbs.
              </p>
            </div>

            {/* Quick Links - Mobile Optimized */}
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Properties</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">MM City</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blogs</a></li>
              </ul>
            </div>

            {/* Contact Info - Mobile Friendly */}
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-lg mb-4 text-white">Contact</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-center md:justify-start">
                  <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                  <a href="tel:+919042004359" className="text-gray-300 hover:text-white transition-colors">+91 90420 04359</a>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                  <a href="mailto:info@seshasindiaprivatelimited.com" className="text-gray-300 hover:text-white transition-colors">info@seshas.com</a>
                </div>
                <div className="flex items-start justify-center md:justify-start">
                  <MapPin className="h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-300 text-xs max-w-xs">Chennai, Tamil Nadu</span>
                </div>
              </div>
            </div>

            {/* CTA Section - Mobile Optimized */}
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-lg mb-4 text-white">Get Started</h3>
              <div className="space-y-3">
                <button 
                  onClick={openWhatsApp}
                  className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </button>
                <button 
                  onClick={makeCall}
                  className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </button>
              </div>
            </div>
          </div>

          {/* Minimal Bottom Bar */}
          <div className="border-t border-gray-800 mt-8 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Seshas India Private Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={openWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110 animate-pulse"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default App;