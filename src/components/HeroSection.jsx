import React from 'react';

const HeroSection = () => {
    return (
        <section className="bg-gray-900 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                <h1 className="text-5xl font-extrabold mb-4">
                    Hi, I'm Aan Ardiyana
                </h1>
                <p className="text-xl max-w-2xl mb-6">
                    A passionate <span className="text-indigo-500">UI/UX Designer</span> & <span className="text-indigo-500">Web Developer</span> who creates intuitive and beautiful digital experiences. Let's build something amazing together!
                </p>
                <div className="flex space-x-4">
                    <a href="#portfolio" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                        View My Work
                    </a>
                    <a href="#contact" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                        Get In Touch
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
