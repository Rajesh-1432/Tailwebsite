import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfoItem = ({ icon: Icon, title, value }) => (
    <div className="flex items-center space-x-4 p-4 border-b">
        <Icon size={24} className="text-pink-600" />
        <div>
            <h4 className="font-semibold text-gray-900">{title}</h4>
            <p className="text-gray-600 text-sm">{value}</p>
        </div>
    </div>
);

const Contact = () => {
    return (
        <div className="container mx-auto px-6 py-24">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
                <h2 className="text-3xl font-bold text-pink-800 mb-6 text-center">Contact Us</h2>
                <p className="text-gray-600 text-center mb-8">We’d love to hear from you! Reach out to us using the form below or contact us directly.</p>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <ContactInfoItem icon={Mail} title="Email" value="contact@drssoftware.com" />
                        <ContactInfoItem icon={Phone} title="Phone" value="+1 (555) 123-4567" />
                        <ContactInfoItem icon={MapPin} title="Address" value="123 Tech Street, Silicon Valley, CA" />
                    </div>

                    <form className="space-y-4">
                        <input type="text" placeholder="Your Name" className="w-full text-gray-800 p-3 border rounded-2xl focus:ring focus:ring-blue-300" />
                        <input type="email" placeholder="Your Email" className="w-full text-gray-800 p-3 border rounded-2xl focus:ring focus:ring-blue-300" />
                        <textarea placeholder="Your Message" rows="4" className="w-full text-gray-800 p-3 border rounded-2xl focus:ring focus:ring-blue-300"></textarea>
                        <button type="submit" className="w-full bg-pink-800 text-white py-3 rounded-2xl hover:bg-pink-700 transition">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;