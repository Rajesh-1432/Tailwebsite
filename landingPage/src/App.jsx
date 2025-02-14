import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Products from './components/Products';
import office from './assets/office1.jpg';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 p-3 bg-gradient-to-tl from-purple-600 to-pink-800 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
    >
      <ArrowUp size={24} />
    </button>
  ) : null;
};

const App = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="relative">
      <Navbar scrollToSection={scrollToSection} />
      <div style={{ backgroundImage: `url(${office})`, backgroundSize: 'contain', backgroundPosition: 'center' }}>
        <section id="home" className="min-h-screen pt-20 bg-gradient-to-r from-blue-50 to-indigo-50">
          <Home />
        </section>
        <section id="about" className=" bg-white">
          <About />
        </section>
        <section id="services" className=" bg-gray-50">
          <Services />
        </section>
        <section id="products" className=" bg-white">
          <Products />
        </section>
        <section id="contact" className=" ">
          <Contact />
        </section>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;