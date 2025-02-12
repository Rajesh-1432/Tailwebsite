import React from 'react';
import { Mail, Phone, MapPin, LinkedinIcon, TwitterIcon, FacebookIcon, Instagram } from 'lucide-react';

const ContactInfoItem = ({ icon: Icon, title, value }) => (
    <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
        <div className="text-blue-600">
            <Icon size={24} />
        </div>
        <div>
            <h4 className="font-semibold text-gray-900">{title}</h4>
            <p className="text-gray-600 text-sm">{value}</p>
        </div>
    </div>
);

const SocialIcon = ({ icon: Icon, href }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
    >
        <Icon size={24} />
    </a>
);

const Contact = () => {
    return (
        <div className="container mx-auto px-6 py-24">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Have questions? We'd love to hear from you. Fill out the form below, and we'll get back to you as soon as possible.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                            <div className="space-y-4">
                                <ContactInfoItem icon={Mail} title="Email" value="contact@drssoftware.com" />
                                <ContactInfoItem icon={Phone} title="Phone" value="+1 (555) 123-4567" />
                                <ContactInfoItem icon={MapPin} title="Address" value="123 Tech Street, Silicon Valley, CA" />
                            </div>
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <h4 className="text-sm font-semibold text-gray-900 mb-4">Follow Us</h4>
                                <div className="flex space-x-4">
                                    <SocialIcon icon={LinkedinIcon} href="#linkedin" />
                                    <SocialIcon icon={TwitterIcon} href="#twitter" />
                                    <SocialIcon icon={FacebookIcon} href="#facebook" />
                                    <SocialIcon icon={Instagram} href="#instagram" />
                                </div>
                            </div>
                        </div>
                    </div>

                   
                </div>
            </div>
        </div>
    );
};

export default Contact;