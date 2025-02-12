import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Navbar from './components/Navbar';


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
      className="fixed bottom-6 right-6 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
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
      <section id="home" className="min-h-screen pt-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <Home />
      </section>
      <section id="about" className="min-h-screen bg-white">
        <About />
      </section>
      <section id="services" className="min-h-screen bg-gray-50">
        <Services />
      </section>
      <section id="contact" className="min-h-screen bg-white">
        <Contact />
      </section>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;