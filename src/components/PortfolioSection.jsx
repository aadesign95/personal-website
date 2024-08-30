import React from 'react';
import EcommerceImage from '../assets/porfolio/portfolio-1.jpeg'
import MobileAppImage from '../assets/porfolio/portfolio-2.jpg'
import WebPortoImage from '../assets/porfolio/portfolio-3.webp'
const PortfolioSection = () => {


    // Contoh data proyek
    const projects = [
        {
            id: 1,
            title: 'E-commerce Website',
            description: 'A fully responsive e-commerce platform built with React and Node.js, featuring a clean UI/UX and integrated payment gateway.',
            imageUrl: EcommerceImage,
            projectUrl: 'https://example.com/ecommerce'
        },
        {
            id: 2,
            title: 'Mobile Banking App',
            description: 'A secure and user-friendly mobile banking application developed for both iOS and Android platforms using React Native.',
            imageUrl: MobileAppImage,
            projectUrl: 'https://example.com/mobile-banking'
        },
        {
            id: 3,
            title: 'Portfolio Website',
            description: 'A sleek and modern portfolio website designed to showcase a designer’s work with a focus on simplicity and elegance.',
            imageUrl: WebPortoImage,
            projectUrl: 'https://example.com/portfolio'
        },
        // Tambahkan proyek lainnya sesuai kebutuhan
    ];

    return (
        <section id="portfolio" className="bg-white text-gray-900 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold">My Portfolio</h2>
                    <p className="text-lg max-w-2xl mx-auto">
                        Here are some of the projects I’ve worked on recently. Each one demonstrates my skills and experience in web and mobile development, design, and more.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                            <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-700 mb-4">{project.description}</p>
                                <a
                                    href={project.projectUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 hover:text-indigo-800 font-semibold"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
