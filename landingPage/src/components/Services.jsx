import React from 'react'

const Services = () => {
    return (
        <div className="container mx-auto px-6 py-32">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    {
                        title: 'Custom Software Development',
                        description: 'Tailored solutions to meet your specific business needs'
                    },
                    {
                        title: 'Cloud Solutions',
                        description: 'Secure and scalable cloud infrastructure services'
                    },
                    {
                        title: 'Digital Transformation',
                        description: 'Modernize your business with cutting-edge technology'
                    }
                ].map((service, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services