import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Home, Calendar, CheckCircle, Award, Users, Star, X, Menu, ArrowRight, Mail, ChevronDown, ChevronUp } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const locations = [
    'Maraimalai Nagar',
    'Singaperumal Kovil', 
    'Mahindra World City',
    'Pothri',
    'Guduvanchery'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLocation((prev) => (prev + 1) % locations.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hi! I'm interested in DTCP approved plots in ${locations[currentLocation]}. Can you share more details?`);
    window.open(`https://wa.me/919042004359?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+919042004359', '_self');
  };

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 md:py-4">
            <div className="flex items-center">
              <img 
                src="https://seshasindiaprivatelimited.com/wp-content/uploads/2024/04/cropped-Seshas-india-trans-logo.png" 
                alt="Seshas India Private Limited" 
                className="h-8 md:h-12 w-auto"
              />
            </div>
            
            <nav className="hidden lg:flex space-x-6 xl:space-x-8">
              <a href="#overview" className="text-gray-700 hover:text-blue-600 font-medium text-sm xl:text-base">Home</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium text-sm xl:text-base">About us</a>
              <a href="#gallery" className="text-gray-700 hover:text-blue-600 font-medium text-sm xl:text-base">Property</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium text-sm xl:text-base">MM City</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium text-sm xl:text-base">Contact Us</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium text-sm xl:text-base">Blogs</a>
            </nav>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4">
              <nav className="flex flex-col space-y-2">
                <a href="#overview" className="text-gray-700 hover:text-blue-600 font-medium py-2">Home</a>
                <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium py-2">About us</a>
                <a href="#gallery" className="text-gray-700 hover:text-blue-600 font-medium py-2">Property</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium py-2">MM City</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium py-2">Contact Us</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium py-2">Blogs</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://seshasindiaprivatelimited.com/wp-content/uploads/2025/06/82f8bef9-4302-4a41-badd-360f7694cf85.jpeg')`
          }}
        />
        
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            DTCP Approved Plots for sale in<br/>
            <span className="block mt-2">Maraimalai Nagar</span><br/>
            <span className="text-yellow-400">Secure Yours Today</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 md:mb-8">
            <button 
              onClick={() => setShowModal(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>Request Call Back</span>
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
            </button>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-gray-200">
            2800 Rs sq ft<br/>
            Plots Starts From 22 Lakhs Onwards
          </p>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-blue-600 text-white py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-center">
            <div className="flex items-center gap-2 w-full sm:w-auto mb-2 sm:mb-0">
              <span className="font-semibold text-sm md:text-base">DTCP No 223/2023, TN 35/Layout/0225/2025</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 md:h-5 md:w-5" />
              <span className="font-semibold text-sm md:text-base">Well-Developed Gated Community</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 md:h-5 md:w-5" />
              <span className="font-semibold text-sm md:text-base">DTCP & RERA Approved</span>
            </div>
            <div className="flex items-center gap-2">
              <Home className="h-4 w-4 md:h-5 md:w-5" />
              <span className="font-semibold text-sm md:text-base">Ready for Constructions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Exclusive Plots Available in Maraimalai Nagar - DTCP Approved Listings</h2>
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-700">Features Listing</h3>
            <div className="flex items-center justify-center mt-3 md:mt-4">
              <MapPin className="h-4 w-4 md:h-5 md:w-5 text-blue-600 mr-2" />
              <span className="text-gray-600 text-sm md:text-base">503/3, Thirukachur Village Maraimalai Nagar</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">MM City Overview</h2>
              <div className="prose prose-sm md:prose-lg text-gray-700">
                <blockquote className="border-l-4 border-blue-600 pl-4 md:pl-6 mb-4 md:mb-6">
                  <p className="mb-3 md:mb-4 text-sm md:text-base">
                    <strong>Seshas India Private Limited</strong> proudly introduces <em>MM City</em>, 
                    a premium gated community offering <a href="https://en.wikipedia.org/wiki/Maraimalai_Nagar" target="_blank" rel="noopener" className="text-blue-600">plots for sale in Maraimalai Nagar</a>. This meticulously 
                    developed township is <strong>DTCP</strong> and <strong>RERA</strong> approved, ensuring 
                    legal clarity and investment security.
                  </p>
                  <p className="mb-3 md:mb-4 text-sm md:text-base">
                    Ready for immediate construction, the site features wide 33 ft and 24 ft fully 
                    compounded concrete roads, modern drainage, and well-lit roadways for safe, seamless living.
                  </p>
                  <p className="mb-4 md:mb-6 text-sm md:text-base">
                    MM City, a self-sufficient layout in Chennai's fastest-growing suburbs, offers ideal locations for families and professionals. With loan availability up to 90%, owning a dream plot is now easier. Explore the best plots for sale in Maraimalai Nagar today.
                  </p>
                  <p className="text-center mb-3 md:mb-4 font-bold text-sm md:text-base">Approved By DTCP & RERA</p>
                  <div className="flex items-center justify-center mb-4 md:mb-6">
                    <img 
                      src="https://seshasindiaprivatelimited.com/wp-content/uploads/2025/06/approved-removebg-preview-1.png" 
                      alt="DTCP Approved Plots in Maraimalai Nagar" 
                      className="h-16 w-16 md:h-20 md:w-20"
                    />
                  </div>
                </blockquote>
              </div>
              <button 
                onClick={() => setShowModal(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 text-sm md:text-base"
              >
                <span>Download Brochure</span>
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
              </button>
            </div>
            
            <div className="bg-gray-50 p-6 md:p-8 rounded-2xl">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">For enquiry:</h3>
              <form className="space-y-3 md:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <input
                    type="text"
                    placeholder="First name here"
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number here"
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Add email"
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                />
                <textarea
                  placeholder="Comments"
                  rows={4}
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 md:py-3 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Where Everything You Need is Just Around the Corner
            </h2>
            <p className="text-lg md:text-xl text-gray-600">Plots for Sale in Maraimalai Nagar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "SCHOOLS",
                description: "Govt School- 1.2km, St. Joseph Higher Sec Schools, Shankara Vidhalya Schools – 4.7 Km, Govt High Schools Thirukachur-4.5k"
              },
              {
                title: "COLLEGES", 
                description: "Valliammai Engineering College – 8km SRM Arts& Science- 4km CSI Edward Women's Christian College – 4km"
              },
              {
                title: "HOSPITALS",
                description: "SRM Global Hospital – 7.5KM, RKP Multi Speciality Hospitals- 12 Km, SRM General Hospitals – 4.5 Km"
              },
              {
                title: "TRANSIT",
                description: "Maraimalai Nagar Railway Stations-3 km Maraimalar Nagar Bus Stand -3Km, Kilambakkam Bus stand 15 KM."
              },
              {
                title: "TEMPLES",
                description: "Kachabeshwarar Temple-750Km, Marudheeswarar Temple-300m, Singaperumal Kovil -2.km"
              },
              {
                title: "COMPANIES",
                description: "Zoho Company -8.5km, Mahindra World City -9Km, Valeo Friction Materials India Pvt Ltd -5.5km"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DTCP & RERA Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              DTCP & RERA Approval Plots with 90% Loan Facilities
            </h2>
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-700">
              Plot Availability & Details in Maraimalai Nagar (MM City)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="space-y-3 md:space-y-4">
              <div className="text-xs md:text-sm text-gray-600 space-y-1 md:space-y-2">
                <p><strong>Property Name:</strong> MM CITY</p>
                <p><strong>Sq.ft Rate:</strong> 2800 to 3000 Per Sq.ft (Negotiable)</p>
                <p><strong>Feet Road:</strong> 33 Feet</p>
                <p><strong>Loan Limit:</strong> 100%</p>
                <p><strong>Total No Available Plots:</strong> 30+</p>
                <p><strong>Unit Type:</strong> Residential Plots and Villas</p>
                <p><strong>Price Starts From:</strong> ₹ 20 lakhs</p>
              </div>
            </div>
            
            <div className="space-y-3 md:space-y-4">
              <div className="text-xs md:text-sm text-gray-600 space-y-1 md:space-y-2">
                <p><strong>Plots Size:</strong> 800 to 1600 Sq.ft</p>
                <p><strong>Approved By:</strong> DTCP Layout, RERA</p>
                <p><strong>Plots Facing:</strong> North & West, North, South, West, South & West</p>
                <p><strong>Location:</strong> Thirukachur Villages, Maraimalai Nagar</p>
                <p><strong>House Site S.No:</strong> 384/4, 503/3, 503/4</p>
              </div>
            </div>
            
            <div className="space-y-3 md:space-y-4">
              <div className="text-xs md:text-sm text-gray-600 space-y-1 md:space-y-2">
                <p><strong>Ground Water Connection:</strong> Yes</p>
                <p><strong>Electric Connection:</strong> Yes</p>
                <p><strong>Project Developer:</strong> SESHAS INDIA PRIVATE LIMITED</p>
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-12 bg-gray-50 p-6 md:p-8 rounded-2xl">
            <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Maraimalar Nagar (MM city) Site Address</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-xs md:text-sm text-gray-600">
              <div className="space-y-1">
                <p><strong>Address:</strong> 503/3, Thirukachur Village Maraimalai Nagar</p>
                <p><strong>Zip:</strong> 603209</p>
              </div>
              <div className="space-y-1">
                <p><strong>City:</strong> Chennai</p>
                <p><strong>Country:</strong> India</p>
              </div>
              <div className="space-y-1">
                <p><strong>Area:</strong> Marai Malai Nagar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Site Gallery Section - ALL IMAGES FROM HTML */}
      <section id="gallery" className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Site Gallery</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {[
              {
                src: "https://seshasindiaprivatelimited.com/wp-content/uploads/2025/06/82f8bef9-4302-4a41-badd-360f7694cf85.jpeg",
                caption: "Aerial Site View",
                alt: "Aerial view of plots in Maraimalai Nagar"
              },
              {
                src: "https://seshasindiaprivatelimited.com/wp-content/uploads/2025/07/Plots-For-Marimalai-nagar-_-Grass-1024x768.webp",
                caption: "Grass Ground",
                alt: "Plots For Marimalai nagar Grass"
              },
              {
                src: "https://seshasindiaprivatelimited.com/wp-content/uploads/2025/07/Street-Lights-1024x768.webp",
                caption: "Street Lights",
                alt: "Street Lights"
              },
              {
                src: "https://seshasindiaprivatelimited.com/wp-content/uploads/2025/07/ground-Water-Connections-1024x768.webp",
                caption: "Ground Water connections",
                alt: "ground Water Connections"
              },
              {
                src: "https://seshasindiaprivatelimited.com/wp-content/uploads/2025/07/33-feet-roads--1024x768.webp",
                caption: "33 Feet Road",
                alt: "33 feet roads"
              },
              {
                src: "https://seshasindiaprivatelimited.com/wp-content/uploads/2025/07/Gated-Community--1024x768.webp",
                caption: "Gated Community",
                alt: "Land for Sale in Maraimalai Nagar"
              },
              {
                src: "https://seshasindiaprivatelimited.com/wp-content/uploads/2025/06/386f4e0f-ad51-4013-8d9a-ee55cf8e8878-1024x768.jpeg",
                caption: "Ready for constructions",
                alt: "Plots for Sale in Maraimalai Nagar"
              },
              {
                src: "https://seshasindiaprivatelimited.com/wp-content/uploads/2025/07/Plots-for-Sale-in-Maraimalai-nagar.svg",
                caption: "Site Layout Plan",
                alt: "Plots for Sale in Maraimalai nagar"
              },
              {
                src: "https://seshasindiaprivatelimited.com/wp-content/uploads/2025/06/86c7db33-e1be-4b2e-b820-8ab476c34ed8-768x432.jpeg",
                caption: "Plots for Sale in Maraimalai Nagar",
                alt: "Plots for Sale in Maraimalai Nagar"
              },
              {
                src: "https://seshasindiaprivatelimited.com/wp-content/uploads/2025/06/153A5538-768x512.jpg",
                caption: "Site Development Progress",
                alt: "Plots for Sale in Maraimalai Nagar"
              },
              {
                src: "https://seshasindiaprivatelimited.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-21-at-15.23.42_433e51c1-300x169.jpg",
                caption: "Residential Plots Development",
                alt: "Residential Plots in Maraimalai Nagar"
              },
              {
                src: "https://seshasindiaprivatelimited.com/wp-content/uploads/2025/07/Website-300x128.png",
                caption: "Project Overview",
                alt: "plots near maraimalai nagar"
              }
            ].map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-48 md:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-white">
                  <p className="font-semibold text-sm md:text-base">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://seshasindiaprivatelimited.com/wp-content/uploads/2025/07/Plots-for-Sale-in-Maraimalai-nagar.svg" 
                alt="Plots for Sale in Maraimalai Nagar Layout"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Project Highlights: Seshas Groups MM City
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-4 md:mb-6">
                Situated in the tranquil surroundings of Thirukachur, MM City, one of our most 
                well-liked projects, is only a short distance from the center of Maraimalai Nagar. 
                These plots for sale in Maraimalai Nagar are surrounded by green spaces and are close 
                to educational institutions, industry, and spiritual centers such as the renowned 
                <strong> Thirukachur Temple</strong>.
              </p>
              <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                <div className="flex items-start gap-2 md:gap-3">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-600 mt-0.5" />
                  <span className="text-sm md:text-base">South-facing plots with increased acreage</span>
                </div>
                <div className="flex items-start gap-2 md:gap-3">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-600 mt-0.5" />
                  <span className="text-sm md:text-base">Wide internal roadways and drainage system</span>
                </div>
                <div className="flex items-start gap-2 md:gap-3">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-600 mt-0.5" />
                  <span className="text-sm md:text-base">Patta-ready with clear title</span>
                </div>
                <div className="flex items-start gap-2 md:gap-3">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-600 mt-0.5" />
                  <span className="text-sm md:text-base">Close proximity to schools, universities, and offices</span>
                </div>
                <div className="flex items-start gap-2 md:gap-3">
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-600 mt-0.5" />
                  <span className="text-sm md:text-base">Peaceful and pollution-free atmosphere</span>
                </div>
              </div>
              <button 
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Advantages of Investing in Maraimalai Nagar plots
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-6 md:mb-8">
                Maraimalai Nagar, a rapidly growing neighborhood in Chennai, offers high ROI potential 
                due to strong property price appreciation. Land allows for freedom to build your own home, 
                with Seshas Groups providing villa construction services. Near employment hubs and a clean, 
                green environment, it offers a peaceful lifestyle.
              </p>
              <button 
                onClick={() => setShowModal(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base"
              >
                Contact Us
              </button>
            </div>
            <div>
              <img 
                src="https://seshasindiaprivatelimited.com/wp-content/uploads/2025/06/86c7db33-e1be-4b2e-b820-8ab476c34ed8-768x432.jpeg" 
                alt="Plots for Sale in Maraimalai Nagar"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Buy Plots Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <img 
                src="https://seshasindiaprivatelimited.com/wp-content/uploads/2025/07/Gated-Community--1024x768.webp" 
                alt="Land for Sale in Maraimalai Nagar"
                className="w-full h-auto rounded-xl shadow-lg"
              />
              <img 
                src="https://seshasindiaprivatelimited.com/wp-content/uploads/2025/06/153A5538-768x512.jpg" 
                alt="Plots for Sale in Maraimalai Nagar"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Why Buy Plots in Maraimalai Nagar – Thirukachur?
              </h2>
              <div className="space-y-3 md:space-y-4 text-gray-700 text-sm md:text-base">
                <p>Before we get into our plot offerings, let's look at what makes <a href="https://en.wikipedia.org/wiki/Maraimalai_Nagar" target="_blank" rel="noopener" className="text-blue-600">plots for sale in Maraimalai Nagar</a> such a great location.</p>
                
                <div>
                  <h4 className="font-bold text-gray-900 text-sm md:text-base">1. Strategic location.</h4>
                  <p className="text-sm md:text-base">Maraimalai Nagar is located on <strong>GST Road (NH45)</strong>, one of Chennai's main arterial highways.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 text-sm md:text-base">2. Rapid Infrastructure Growth.</h4>
                  <p className="text-sm md:text-base">Maraimalai Nagar has had constant infrastructure growth over the years, with highways, flyovers, schools, colleges, and healthcare facilities sprouting up in and around the region.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 text-sm md:text-base">3. Reasonable Land Prices</h4>
                  <p className="text-sm md:text-base">With great potential for appreciation, Maraimalai Nagar land rate is relatively reasonable when compared to other areas of Chennai.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 text-sm md:text-base">DTCP-Approved Plots</h4>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 text-sm md:text-base">Complete Loan Assistance</h4>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 text-sm md:text-base">Free Deals & Advantages</h4>
                  <p className="text-sm md:text-base">Seshas Groups offers exceptional deals that increase the value of your investment, such as <strong>free interior work or extra 240-square-foot plots</strong> on certain reservations</p>
                </div>
              </div>
              <button 
                onClick={() => setShowModal(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold transition-all duration-300 mt-4 md:mt-6 text-sm md:text-base"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Our Customers says...</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {[
              {
                name: "Sneha S",
                date: "2025-07-19",
                rating: 5,
                text: "Buying land for the first time is usually stressful, but Seshas Groups made it easy. On-road location, and the site is ready for construction. Their team helped with loan options too. Thank you for helping me take the first step towards building my dream home! Highly recommended!"
              },
              {
                name: "anuja fernando",
                date: "2025-07-19",
                rating: 4,
                text: "I had a great experience with Seshas Groups. Everything was explained clearly, from plot size to legal process. No hidden charges, and the booking process was simple. Would definitely recommend them to friends and family"
              },
              {
                name: "juliet Kitty",
                date: "2025-07-19",
                rating: 5,
                text: "Visited the Thirukachur site last week. Excellent location with direct access from the main road. I was impressed with the security, layout quality, and nearby development. The staff were friendly, honest, and didn't pressure us. Worth checking out!"
              },
              {
                name: "Pavi Pavi",
                date: "2025-07-19",
                rating: 5,
                text: "We were looking for a peaceful location to build our family home — and Thirukachur was perfect. Calm surroundings, well-connected, and very safe. Thanks to Seshas Groups for helping us find the right plot at the right time!"
              },
              {
                name: "Pushpa Latha",
                date: "2025-07-16",
                rating: 4,
                text: "Property located near Gst road from maraimalai nagar with all transport amenities especially train and bus facility i suggest this the best place to build home for Chennai and near by areas working professional...."
              },
              {
                name: "suganya Umarani",
                date: "2025-07-15",
                rating: 5,
                text: "very good customer service nice place to buy Very good support service with seshas"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-4 md:p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm md:text-base">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-2 md:ml-3">
                    <h4 className="font-semibold text-gray-900 text-sm md:text-base">{testimonial.name}</h4>
                    <p className="text-xs md:text-sm text-gray-500">{testimonial.date}</p>
                  </div>
                </div>
                <div className="flex mb-2 md:mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 md:h-4 md:w-4 ${
                        i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-xs md:text-sm lg:text-base">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Frequently Asked Questions (FAQs)</h2>
          </div>

          <div className="space-y-3 md:space-y-4">
            {[
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
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-4 md:px-6 py-3 md:py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900 text-sm md:text-base pr-2">{faq.question}</span>
                  {activeAccordion === index ? (
                    <ChevronUp className="h-4 w-4 md:h-5 md:w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-4 w-4 md:h-5 md:w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {activeAccordion === index && (
                  <div className="px-4 md:px-6 pb-3 md:pb-4">
                    <p className="text-gray-700 text-sm md:text-base">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <iframe 
              src="https://maps.google.com/maps?q=%20503%2F3%2C%20Thirukkachur%2C%20Maraimalai%20Nagar%2C%20Kattankolatur%20R.F.%2C%20Tamil%20Nadu%20603209&t=m&z=14&output=embed&iwloc=near"
              title="503/3, Thirukkachur, Maraimalai Nagar, Kattankolatur R.F., Tamil Nadu 603209"
              className="w-full h-64 md:h-80 lg:h-96"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Blog Posts Section - ALL BLOG IMAGES FROM HTML */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {[
              {
                src: "https://seshasindiaprivatelimited.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-21-at-15.23.42_433e51c1-300x169.jpg",
                title: "Residential Plots in Maraimalai Nagar by Seshas – Invest Smart, Live Better",
                excerpt: "Residential Plots in Maraimalai Nagar by Seshas – Invest Smart,...",
                date: "July 21, 2025",
                author: "seshasindiaprivatelimited"
              },
              {
                src: "https://seshasindiaprivatelimited.com/wp-content/uploads/2025/07/Website-300x128.png",
                title: "Plots Near Maraimalai Nagar – Smart Investment for a Secure Future",
                excerpt: "Plots near Maraimalai Nagar—The Best Investment You Can Make...",
                date: "July 17, 2025",
                author: "seshasindiaprivatelimited"
              },
              {
                src: "https://seshasindiaprivatelimited.com/wp-content/uploads/2025/06/86c7db33-e1be-4b2e-b820-8ab476c34ed8-300x169.jpeg",
                title: "Maraimalai Nagar Land Rate Looks Promising in 2025",
                excerpt: "Understanding the Maraimalai Nagar Land Rate – A Complete Guide...",
                date: "July 14, 2025",
                author: "seshasindiaprivatelimited"
              },
              {
                src: "https://seshasindiaprivatelimited.com/wp-content/uploads/2025/07/Gated-Community--300x225.webp",
                title: "Land for Sale in Maraimalai Nagar – The Smart Investment You've Been Waiting For",
                excerpt: "Land for Sale in Maraimalai Nagar – The Smart Investment...",
                date: "July 14, 2025",
                author: "seshasindiaprivatelimited"
              }
            ].map((post, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src={post.src} 
                    alt={post.title}
                    className="w-full h-32 md:h-40 lg:h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300" />
                </div>
                <div className="p-3 md:p-4 lg:p-6">
                  <h3 className="font-bold text-gray-900 mb-1 md:mb-2 line-clamp-2 text-sm md:text-base">{post.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm mb-2 md:mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="truncate">{post.author}</span>
                    <span className="mx-1 md:mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            <div className="sm:col-span-2 md:col-span-1">
              <img 
                src="https://seshasindiaprivatelimited.com/wp-content/uploads/2024/03/cropped-Seshass-india-logo-1-1-1.png" 
                alt="Seshas India Logo" 
                className="h-8 md:h-10 w-auto mb-3 md:mb-4"
              />
            </div>
            
            <div>
              <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">Quick Links</h3>
              <ul className="space-y-1 md:space-y-2 text-gray-400 text-sm md:text-base">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Properties</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">Features Listing</h3>
              <ul className="space-y-1 md:space-y-2 text-gray-400 text-sm md:text-base">
                <li><a href="#" className="hover:text-white transition-colors">Smart Apartment</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Millenial Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Modern Architecture</a></li>
              </ul>
              <div className="mt-3 md:mt-4 space-y-1 md:space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="h-3 w-3 md:h-4 md:w-4" />
                  <a href="tel:+918925011184" className="hover:text-white transition-colors text-sm md:text-base">+91 89250 11184</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-3 w-3 md:h-4 md:w-4" />
                  <a href="https://wa.me/919042004359" className="hover:text-white transition-colors text-sm md:text-base">+91 90420 04359</a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">Contact</h3>
              <div className="space-y-2 md:space-y-3 text-gray-400 text-xs md:text-sm">
                <div className="flex items-start gap-2">
                  <MapPin className="h-3 w-3 md:h-4 md:w-4 mt-1 flex-shrink-0" />
                  <span>No.1, MP Ave, Velayutham Colony, Saligramam, Chennai, Tamil Nadu 600093.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-3 w-3 md:h-4 md:w-4" />
                  <span>info@seshasindiaprivatelimited.com</span>
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-base">Sales Manager</p>
                  <div className="flex items-center gap-2">
                    <Phone className="h-3 w-3 md:h-4 md:w-4" />
                    <a href="tel:+917358329389" className="hover:text-white transition-colors">+91 7358329389</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">Open House</h3>
              <p className="text-gray-400 text-sm md:text-base">
                Monday To Saturday<br/>
                10:00 AM to 6:00 PM
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-400 text-xs md:text-sm">
            <p>© 2025 Ganapthy Civil Constructions. | 
              <a href="#" className="hover:text-white ml-1 transition-colors">Privacy Policy</a> | 
              <a href="#" className="hover:text-white ml-1 transition-colors">Terms of Service</a> | 
              Contact: info@seshasindiaprivatelimited
            </p>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full relative max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5 md:h-6 md:w-6" />
            </button>
            
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Your Details</h3>
            <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">Let us know how to get back to you.</p>
            
            <form className="space-y-3 md:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <input
                  type="text"
                  placeholder="John"
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                />
                <input
                  type="tel"
                  placeholder="+(602) 448 763 22"
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Location *</label>
                <div className="space-y-2">
                  {['Maraimalai Nagar', 'Chengal Pattu', 'SP Kovil', 'Mahindra world city', 'Other Locations'].map((location) => (
                    <label key={location} className="flex items-center">
                      <input type="radio" name="location" value={location} className="mr-2" />
                      <span className="text-sm md:text-base">{location}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget?</label>
                <select className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base">
                  <option>Choose your Budget Range?</option>
                  <option>₹20 - ₹30 Lakhs</option>
                  <option>₹30 - ₹40 Lakhs</option>
                  <option>Others</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 md:py-3 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Action Buttons */}
      <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 flex flex-col gap-2 md:gap-3 z-40">
        <button 
          onClick={handleWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
          aria-label="WhatsApp"
        >
          <Phone className="h-5 w-5 md:h-6 md:w-6" />
        </button>
        <button 
          onClick={handleCall}
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
          aria-label="Call"
        >
          <Phone className="h-5 w-5 md:h-6 md:w-6" />
        </button>
      </div>
    </div>
  );
}

export default App;