import React from 'react'

const About = () => {
    return (
        <div className="container mx-auto px-6 py-32">
            <h2 className="text-4xl font-bold text-center text-purple-800 mb-12">About Us</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-2xl font-semibold mb-4 text-pink-800">Our Story</h3>
                    <p className="text-purple-600 leading-relaxed">
                        Think AI Labs has been at the forefront of digital transformation since our inception.
                        We combine technical expertise with industry knowledge to deliver solutions that drive business growth.
                    </p>
                </div>
                <div className="bg-purple-100 p-8 rounded-lg">
                    <h3 className="text-2xl font-semibold mb-4 text-pink-800" >Our Values</h3>
                    <ul className="space-y-4">
                        <li className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                            <span className="text-purple-600">Innovation at Core</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                            <span className="text-purple-600">Customer-Centric Approach</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                            <span className="text-purple-600">Quality Commitment</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About