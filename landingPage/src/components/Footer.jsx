import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">DRS Software Solutions</h3>
                        <p className="text-gray-400">
                            Empowering businesses through innovative software solutions
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>contact@drssoftware.com</li>
                            <li>+1 (555) 123-4567</li>
                            <li>123 Tech Street, Silicon Valley, CA</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 DRS Software Solutions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer