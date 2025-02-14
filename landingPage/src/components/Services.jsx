import React from 'react';
import { motion } from 'framer-motion';

const services = [
    { title: 'Custom Software Development', description: 'Tailored solutions to meet your specific business needs' },
    { title: 'Cloud Solutions', description: 'Secure and scalable cloud infrastructure services' },
    { title: 'Digital Transformation', description: 'Modernize your business with cutting-edge technology' }
];

const Services = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-6 py-24"
        >
            <h2 className="text-4xl font-bold text-center text-purple-900 mb-12">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="bg-white shadow-md p-8 rounded-lg hover:shadow-xl transition-transform transform hover:scale-105"
                    >
                        <div className="w-16 h-16 bg-pink-800 text-white flex items-center justify-center rounded-full mb-4">
                            <span className="text-2xl font-bold">{index + 1}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-pink-800 mb-2">{service.title}</h3>
                        <p className="text-gray-900 text-sm">{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Services;