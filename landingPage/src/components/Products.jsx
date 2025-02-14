import React from 'react';
import { motion } from 'framer-motion';
import RuleEngine from '../assets/RuleEngine.jpg';
import LBLD from '../assets/LabelDesigner.jpg';
import r10 from '../assets/r10.jpg';
import EMP from '../assets/EMP.png';

const products = [
    { name: 'R10', description: 'A powerful tool for managing enterprise processes efficiently.', image: r10 },
    { name: 'Rule Engine', description: 'An advanced rule-based decision-making system for automation.', image: RuleEngine },
    { name: 'EMP', description: 'A comprehensive platform for managing employee records and operations.', image: EMP },
    { name: 'Label Designer', description: 'A dynamic label creation tool for streamlined product labeling.', image: LBLD }
];

const Products = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-6 py-24"
        >
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Products</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} index={index} />
                ))}
            </div>
        </motion.div>
    );
};

const ProductCard = ({ product, index }) => {
    return (
        <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition-transform transform hover:scale-105 flex flex-col items-center justify-between w-full max-w-xs mx-auto h-72"
        >
            <div className="flex flex-col items-center">
                <img src={product.image} alt="Product" className='rounded-full h-24 w-24 object-cover mb-4 fixed-image' />
                <h3 className="text-xl font-semibold text-pink-800 mb-2 text-center">{product.name}</h3>
                <p className="text-gray-800 text-sm text-center">{product.description}</p>
            </div>
        </motion.div>
    );
};

export default Products;