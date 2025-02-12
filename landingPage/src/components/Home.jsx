import React from 'react';
import EMP_video from '../assets/EMP_video.mp4';

const Home = () => {
    return (
        <div className="relative min-h-screen">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute min-w-full min-h-full object-cover w-full h-full opacity-30"
                >
                    <source src={EMP_video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            {/* Content */}
            <div className="relative container mx-auto px-6 py-32 min-h-screen flex items-center justify-center">
                <div className="text-center max-w-4xl">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Transform Your Business with Modern Software Solutions
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
                        We deliver innovative software solutions to help your business thrive in the digital age
                    </p>
                    <div className="space-x-4">
                        <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Get Started
                        </button>
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;