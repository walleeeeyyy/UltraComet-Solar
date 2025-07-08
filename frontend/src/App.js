import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scrolling for navigation links
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-3"></div>
                <span className="text-xl font-bold">Ultra Comet</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</button>
                <button onClick={() => scrollToSection('packages')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Packages</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">About</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</button>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
              >
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-md">
              <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</button>
              <button onClick={() => scrollToSection('packages')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Packages</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d')`
          }}
        ></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.477.859h4z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <h1 className="text-4xl md:text-6xl font-bold mb-2">
                    <span className="text-white">Ultra</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Comet</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 font-medium">Energy Company</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-lg mb-8">
                <p className="text-lg md:text-xl font-semibold text-white">
                  ENERGY THAT CARES FOR THE PLANET
                </p>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Harness the power of the sun with our premium solar energy solutions. 
              From residential to commercial installations, we provide cutting-edge solar technology 
              that reduces your carbon footprint and energy costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('packages')}
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
              >
                View Solar Packages
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Packages Section */}
      <section id="packages" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Solar Packages
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive range of solar energy solutions designed to meet your specific needs and budget.
            </p>
          </div>

          {/* Premium Packages */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-white">Premium Packages</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Gold Package */}
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold mb-2">GOLD PACKAGE</h4>
                  <div className="text-4xl font-bold mb-4">$849.99</div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• 1KVA/3.5kva Hybrid MPPT Inverter</li>
                  <li>• 12V 100Ah LiFePO4 Lithium Battery</li>
                  <li>• 2 x 435W/440W Solar Panels</li>
                  <li>• Rails and Anti-theft Protection</li>
                  <li>• AC & DC Protection Kit</li>
                  <li>• Accessories & Cables</li>
                  <li>• Transport Free Within Harare</li>
                  <li>• LOAD</li>
                  <li>• TV, Decoder, Lights, Security, WiFi, Small Fridge (No Daytime Entertainment)</li>
                </ul>
              </div>

              {/* Platinum Package */}
              <div className="bg-gradient-to-br from-gray-400 to-gray-600 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold mb-2">PLATINUM PACKAGE</h4>
                  <div className="text-4xl font-bold mb-4">$1299.99</div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• 3KVA Hybrid MPPT Inverter</li>
                  <li>• 25.6V 100Ah Lithium Battery</li>
                  <li>• 4 x 445W/450W Solar Panels</li>
                  <li>• Rails and Anti-theft Protection</li>
                  <li>• AC & DC Protection Kit</li>
                  <li>• Accessories & Cables</li>
                  <li>• Transport Free Within Harare</li>
                  <li>• LOAD</li>
                  <li>• 2 x TVs, Decoder, Lights, WiFi, Laptop, Fridge, 2 x Full Pump Set, 1.5 HP Pump Set, Booster Pump (0.5 HP), Entertainment</li>
                </ul>
              </div>

              {/* Diamond Package */}
              <div className="bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold mb-2">DIAMOND PACKAGE</h4>
                  <div className="text-4xl font-bold mb-4">$2199.99</div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• 5KVA/8KVA Hybrid MPPT Inverter</li>
                  <li>• 51.2V 100Ah LiFePO4 Battery Bank</li>
                  <li>• 6 x 450W/460W Solar Panels</li>
                  <li>• Rails and Anti-theft Protection</li>
                  <li>• AC & DC Protection Kit</li>
                  <li>• Accessories & Cables</li>
                  <li>• Transport Free Within Harare</li>
                  <li>• LOAD</li>
                  <li>• 2 TVs, Decoder, Lights, WiFi, Security Lights, 2 x Upright Fridge, 2 x Deep Freezers, 1.5 HP Pump Set, Booster Pump (0.5 HP)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Lite Home Packages */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12 text-white">Lite Home Packages</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Lite Gold */}
              <div className="bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold mb-2">LITE GOLD</h4>
                  <div className="text-3xl font-bold mb-2">1KVA/1.5KVA</div>
                  <div className="text-4xl font-bold mb-4">$650</div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• 1KVA Hybrid Mppt Inverter</li>
                  <li>• 12V 100Ah Lithium Battery</li>
                  <li>• 2 x 435W/440Watts Mono Panels</li>
                  <li>• Rails and Antitheft Clamps</li>
                  <li>• AC & DC Protection Kit</li>
                  <li>• Accessories & Cables</li>
                </ul>
              </div>

              {/* Lite Platinum */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold mb-2">LITE PLATINUM</h4>
                  <div className="text-3xl font-bold mb-2">3KVA</div>
                  <div className="text-4xl font-bold mb-4">$1100</div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• 3KVA Hybrid Mppt Inverter</li>
                  <li>• 25.6V 100Ah Lithium Battery</li>
                  <li>• 4 x 435W/440Watts Mono Panels</li>
                  <li>• Rails and Antitheft Clamps</li>
                  <li>• AC & DC Protection Kit</li>
                  <li>• Accessories & Cables</li>
                </ul>
              </div>

              {/* Lite Diamond */}
              <div className="bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold mb-2">LITE DIAMOND</h4>
                  <div className="text-3xl font-bold mb-2">5KVA</div>
                  <div className="text-4xl font-bold mb-4">$1850</div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• 5KVA Hybrid Mppt Inverter</li>
                  <li>• 51.2V 100Ah Lithium Battery</li>
                  <li>• 6-440W/450Watts no Panels</li>
                  <li>• Rails and Antitheft Clamps</li>
                  <li>• AC & DC Protection Kit</li>
                  <li>• Accessories & Cables</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  About Ultra Comet
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                At Ultra Comet Energy Company, we are committed to providing sustainable energy solutions 
                that care for our planet. With years of experience in solar technology, we offer 
                comprehensive packages designed to meet every energy need.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-green-400">Expert Installation</h3>
                  <p className="text-gray-300">Professional installation team with certified technicians</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-blue-400">Premium Components</h3>
                  <p className="text-gray-300">High-quality solar panels and lithium battery systems</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-green-400">Free Transport</h3>
                  <p className="text-gray-300">Complimentary delivery within Harare for all packages</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-blue-400">24/7 Support</h3>
                  <p className="text-gray-300">Round-the-clock customer support and maintenance</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1648135327756-b606e2eb8caa" 
                  alt="Solar Installation" 
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-sm text-white opacity-90">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Contact Us
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to make the switch to solar energy? Get in touch with our team for a free consultation and quote.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="bg-gray-900 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Phone Numbers</h4>
                      <p className="text-green-400">+263 78 799 0900</p>
                      <p className="text-green-400">+263 78 302 9070</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Address</h4>
                      <p className="text-gray-300">Cnr Nelson Mandela and 3rd Street</p>
                      <p className="text-gray-300">Club Chambers Building</p>
                      <p className="text-gray-300">Eastern Wing Suite 1112</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Business Hours</h4>
                      <p className="text-gray-300">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-300">Saturday: 9:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-900 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-white">Request a Quote</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Package</label>
                    <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white">
                      <option>Select a package</option>
                      <option>Gold Package - $849.99</option>
                      <option>Platinum Package - $1299.99</option>
                      <option>Diamond Package - $2199.99</option>
                      <option>Lite Gold - $650</option>
                      <option>Lite Platinum - $1100</option>
                      <option>Lite Diamond - $1850</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea 
                      rows="4" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400"
                      placeholder="Tell us about your energy needs..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.477.859h4z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Ultra Comet Energy Company</h3>
                  <p className="text-green-400 font-medium">ENERGY THAT CARES FOR THE PLANET</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Leading provider of sustainable solar energy solutions. We are committed to 
                reducing carbon footprint through innovative solar technology.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-green-400 transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('packages')} className="hover:text-green-400 transition-colors">Solar Packages</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-green-400 transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-green-400 transition-colors">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Solar Installation</li>
                <li>Battery Systems</li>
                <li>Maintenance</li>
                <li>Consultation</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Ultra Comet Energy Company. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;