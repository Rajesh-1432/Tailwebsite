import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import logo from '../assets/logo.png';

const Navbar = ({ scrollToSection }) => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Handle active section
            const sections = ['home', 'about', 'services', 'contact', 'products'];
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
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 
            ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white/50 backdrop-blur-sm'}`}
        >
            <div className="container mx-auto px-4 sm:px-6  h-[80px]">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img
                            src={logo}
                            alt="Think AI Labs"
                            className="h-12 w-auto object-contain"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <motion.div
                        className="hidden md:flex items-center space-x-8"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {['Home', 'About', 'Services', 'Products', 'Contact'].map((item) => (
                            <motion.button
                                key={item}
                                onClick={() => handleNavClick(item)}
                                className={`relative px-2 py-2 text-base font-medium transition-all duration-300 
                                    ${activeSection === item.toLowerCase()
                                        ? 'text-pink-600'
                                        : 'text-purple-700 hover:text-pink-600'
                                    }
                                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                                    after:w-full after:h-0.5 after:bg-pink-600 
                                    after:transform after:scale-x-0 after:transition-transform after:duration-300
                                    ${activeSection === item.toLowerCase() ? 'after:scale-x-100' : 'hover:after:scale-x-100'}
                                `}
                            >
                                {item}
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-md text-gray-700 hover:text-pink-600 focus:outline-none"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <motion.div
                    className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen
                        ? 'max-h-64 opacity-100'
                        : 'max-h-0 opacity-0 pointer-events-none'
                        } overflow-hidden`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isMenuOpen ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mb-4">
                        {['Home', 'About', 'Services', 'Products', 'Contact'].map((item) => (
                            <motion.button
                                key={item}
                                onClick={() => handleNavClick(item)}
                                className={`w-full text-left px-4 py-3 text-base font-medium rounded-md transition-colors
                                    ${activeSection === item.toLowerCase()
                                        ? 'text-pink-600 bg-pink-50'
                                        : 'text-purple-700 hover:text-pink-600 hover:bg-gray-50'
                                    }
                                `}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isMenuOpen ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {item}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.nav>
    );
};

export default Navbar;