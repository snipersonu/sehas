import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle, Star, Menu, X, Clock, Users, Award, Shield, Home, Building, Car, Zap, TreePine, GraduationCap, Guitar as Hospital, Train, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const galleryImages = [
    {
      src: "https://seshasindiaprivatelimited.com/wp-content/uploads/2025/07/Plots-For-Marimalai-nagar-_-Grass-1024x768.webp", 
      title: "Plots For Marimalai nagar - Grass",
      description: "Green landscaped areas in MM City development"
    },
    {
      src: "https://seshasindiaprivatelimited.com/wp-content/uploads/2025/07/Street-Lights-1024x768.webp", 
      title: "Street Lights",
      description: "Well-lit roads with modern street lighting system"
    },
    {
      src: "https://seshasindiaprivatelimited.com/wp-content/uploads/2025/07/ground-Water-Connections-1024x768.webp", 
      title: "Ground Water Connections", 
      description: "Individual water connections for every plot"
    },
    {
      src: "https://seshasindiaprivatelimited.com/wp-content/uploads/2025/07/33-feet-roads--1024x768.webp", 
      title: "33 Feet Roads",
      description: "Wide 33 feet concrete roads for easy access"
    },
    {
      src: "https://seshasindiaprivatelimited.com/wp-content/uploads/2025/07/Gated-Community--1024x768.webp", 
      title: "Gated Community",
      description: "Secure gated entrance with boundary walls"
    },
    {
      src: "https://seshasindiaprivatelimited.com/wp-content/uploads/2025/06/386f4e0f-ad51-4013-8d9a-ee55cf8e8878-1024x768.jpeg", 
      title: "Ready for Constructions",
      description: "DTCP approved plots ready for immediate construction"
    },
    {
      src: "https://seshasindiaprivatelimited.com/wp-content/uploads/2025/07/Plots-for-Sale-in-Maraimalai-nagar.svg", 
      title: "Plots for Sale in Maraimalai nagar",
      description: "Official layout plan showing plot arrangements"
    },
    {
      src: "https://seshasindiaprivatelimited.com/wp-content/uploads/2025/06/86c7db33-e1be-4b2e-b820-8ab476c34ed8-768x432.jpeg", 
      title: "Aerial Site View",
      description: "Bird's eye view of the complete MM City project"
    },
    {
      src: "https://seshasindiaprivatelimited.com/wp-content/uploads/2025/06/153A5538-768x512.jpg", 
      title: "Site Development Progress",
      description: "Current development and construction progress"
    }
  ];

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
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
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

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://seshasindiaprivatelimited.com/wp-content/uploads/2025/06/82f8bef9-4302-4a41-badd-360f7694cf85.jpeg')`
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              DTCP Approved Plots for sale in Maraimalai Nagar
              <span className="block text-yellow-400 mt-2">Secure Yours Today</span>
            </h1>
            
            <div className="mb-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
                Request Call Back →
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
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">Well-Developed Gated Community</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">DTCP & RERA Approved</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
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

      {/* MM City Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">MM City Overview</h2>
              <div className="prose prose-lg text-gray-600">
                <blockquote className="border-l-4 border-blue-600 pl-6">
                  <p className="mb-4">
                    <strong>Seshas India Private Limited</strong> proudly introduces <em>MM City</em>, 
                    a premium gated community offering <a href="#" className="text-blue-600">plots for sale in Maraimalai Nagar</a>. 
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
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Download Brouchure →
              </button>
            </div>

            {/* Contact Form - Fixed Width for Desktop */}
            <div className="bg-gray-50 p-6 lg:p-8 rounded-xl shadow-lg w-full">
              <div className="w-full max-w-none lg:max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">For enquiry:</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        placeholder="First name here" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="tel" 
                        placeholder="Phone number here" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      placeholder="Add email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Looking for <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      placeholder="Comments" 
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                  >
                    Send Message
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
            <div className="bg-white p-6 rounded-lg shadow-md">
              <GraduationCap className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-bold text-lg mb-3">SCHOOLS</h3>
              <p className="text-gray-600">
                Govt School- 1.2km, St. Joseph Higher Sec Schools, 
                Shankara Vidhalya Schools – 4.7 Km, Govt High Schools Thirukachur-4.5k
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Building className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-bold text-lg mb-3">COLLEGES</h3>
              <p className="text-gray-600">
                Valliammai Engineering College – 8km, SRM Arts & Science- 4km, 
                CSI Edward Women's Christian College – 4km
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Hospital className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-bold text-lg mb-3">HOSPITALS</h3>
              <p className="text-gray-600">
                SRM Global Hospital – 7.5KM, RKP Multi Speciality Hospitals- 12 Km, 
                SRM General Hospitals – 4.5 Km
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Train className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-bold text-lg mb-3">TRANSIT</h3>
              <p className="text-gray-600">
                Maraimalai Nagar Railway Stations-3 km, Maraimalar Nagar Bus Stand -3Km, 
                Kilambakkam Bus stand 15 KM.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <TreePine className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-bold text-lg mb-3">TEMPLES</h3>
              <p className="text-gray-600">
                Kachabeshwarar Temple-750Km, Marudheeswarar Temple-300m, 
                Singaperumal Kovil -2.km
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Building className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-bold text-lg mb-3">COMPANIES</h3>
              <p className="text-gray-600">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="text-sm text-gray-600">
                <strong>Property Name</strong>: MM CITY
              </div>
              <div className="text-sm text-gray-600">
                <strong>Sq.ft Rate</strong>: 2800 to 3000 Per Sq.ft (Negotiable)
              </div>
              <div className="text-sm text-gray-600">
                <strong>Feet Road</strong>: 33 Feet
              </div>
              <div className="text-sm text-gray-600">
                <strong>Loan Limit</strong>: 100%
              </div>
              <div className="text-sm text-gray-600">
                <strong>Total No Available Plots</strong>: 30+
              </div>
              <div className="text-sm text-gray-600">
                <strong>Unit Type</strong>: Residential Plots and Villas
              </div>
              <div className="text-sm text-gray-600">
                <strong>Price Starts From</strong>: ₹ 20 lakhs
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-sm text-gray-600">
                <strong>Plots Size</strong>: 800 to 1600 Sq.ft
              </div>
              <div className="text-sm text-gray-600">
                <strong>Approved By</strong>: DTCP Layout, RERA
              </div>
              <div className="text-sm text-gray-600">
                <strong>Plots Facing</strong>: North & West, North, South, West, South & West
              </div>
              <div className="text-sm text-gray-600">
                <strong>Location</strong>: Thirukachur Villages, Maraimalai Nagar
              </div>
              <div className="text-sm text-gray-600">
                <strong>House Site S.No</strong>: 384/4, 503/3, 503/4
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-sm text-gray-600">
                <strong>Ground Water Connection</strong>: Yes
              </div>
              <div className="text-sm text-gray-600">
                <strong>Electric Connection</strong>: Yes
              </div>
              <div className="text-sm text-gray-600">
                <strong>Project Developer</strong>: SESHAS INDIA PRIVATE LIMITED
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Site Gallery - ALL Images from HTML */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Site Gallery</h2>
            <p className="text-gray-600">Explore our premium development with authentic site photos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow">
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
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
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
              <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
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
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
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

      {/* Blog Section */}
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

      {/* Minimal Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
            {/* Company Logo and Info */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <img 
                src="https://seshasindiaprivatelimited.com/wp-content/uploads/2024/03/cropped-Seshass-india-logo-1-1-1.png" 
                alt="Seshas India" 
                className="h-8 mb-2 brightness-0 invert"
              />
              <p className="text-gray-400 text-xs">
                © 2025 Seshas India Private Limited
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-col items-center space-y-2 text-sm md:flex-row md:space-y-0 md:space-x-6">
              <a href="tel:+919042004359" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Phone className="h-4 w-4 mr-2" />
                +91 90420 04359
              </a>
              <a href="mailto:info@seshasindiaprivatelimited.com" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Mail className="h-4 w-4 mr-2" />
                <span className="hidden md:inline">info@seshasindiaprivatelimited.com</span>
                <span className="md:hidden">Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/919042004359" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
};

export default App;