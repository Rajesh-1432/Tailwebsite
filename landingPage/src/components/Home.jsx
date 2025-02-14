import React from 'react';
import { motion } from 'framer-motion';
import EMP_video from '../assets/EMP_video.mp4';

const Home = () => {
    return (
        <div className="relative h-[calc(100vh-80px)]">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute min-w-full min-h-full object-contain w-full h-full opacity-30"
                >
                    <source src={EMP_video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative container mx-auto px-6 py-32 flex items-center justify-center"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-center max-w-4xl"
                >
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Transform Your Business with Modern <span className='font-bold text-black'>Software Solutions</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
                        We deliver innovative software solutions to help your business thrive in the digital age
                    </p>
                    <div className="space-x-4">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-3xl transition-all duration-300 shadow-lg"
                        >
                            Get Started
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-white text-blue-600 px-8 py-4 rounded-3xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
                        >
                            Learn More
                        </motion.button>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Home;