import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = ({ scrollToSection }) => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Handle active section
            const sections = ['home', 'about', 'services', 'contact'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }

            // Handle navbar background
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (item) => {
        scrollToSection(item.toLowerCase());
        setActiveSection(item.toLowerCase());
        setIsMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 
      ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white/50 backdrop-blur-sm'}`}>
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img
                            src={logo}
                            alt="DRS Software Solutions"
                            className="h-12 w-auto object-contain"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {['Home', 'About', 'Services', 'Contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => handleNavClick(item)}
                                className={`relative px-3 py-2 text-base font-medium transition-all duration-300 
                  ${activeSection === item.toLowerCase()
                                        ? 'text-blue-600'
                                        : 'text-gray-700 hover:text-blue-600'
                                    }
                  after:content-[''] after:absolute after:left-0 after:bottom-0 
                  after:w-full after:h-0.5 after:bg-blue-600 
                  after:transform after:scale-x-0 after:transition-transform after:duration-300
                  ${activeSection === item.toLowerCase() ? 'after:scale-x-100' : 'hover:after:scale-x-100'}
                `}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen
                        ? 'max-h-64 opacity-100'
                        : 'max-h-0 opacity-0 pointer-events-none'
                        } overflow-hidden`}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mb-4">
                        {['Home', 'About', 'Services', 'Contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => handleNavClick(item)}
                                className={`w-full text-left px-4 py-3 text-base font-medium rounded-md transition-colors
                  ${activeSection === item.toLowerCase()
                                        ? 'text-blue-600 bg-blue-50'
                                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                                    }
                `}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;