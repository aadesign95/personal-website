import React from 'react';
import { Palette, BracketsCurly, DeviceMobile } from "@phosphor-icons/react";


const ServicesSection = () => {
    return (
        <section id="services" className="bg-gray-100 text-gray-900 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold mb-10">My Services</h2>
                    <p className="text-lg max-w-2xl mx-auto mb-16">
                        I offer a range of services to help you achieve the results you’re after. Whether you’re looking for a stunning design, a robust website, or a seamless mobile app, I’ve got you covered.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* Layanan 1: UI/UX Design */}
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <Palette className="text-indigo-600 text-5xl mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold mb-4">UI/UX Design</h3>
                        <p className="text-gray-700">
                            I craft intuitive and beautiful interfaces that provide an enjoyable user experience. From wireframes to final designs, I ensure that every element is designed with the user in mind.
                        </p>
                    </div>

                    {/* Layanan 2: Web Development */}
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <BracketsCurly className="text-indigo-600 text-5xl mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
                        <p className="text-gray-700">
                            I build responsive and high-performance websites using the latest technologies. Whether you need a landing page or a full-fledged web application, I can deliver a solution tailored to your needs.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
