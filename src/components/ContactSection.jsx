import React from 'react';
import { EnvelopeSimple, PhoneCall, MapPinLine } from "@phosphor-icons/react";

const ContactSection = () => {
    return (
        <section id="contact" className="bg-gray-100 text-gray-900 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold">Get in Touch</h2>
                    <p className="text-lg max-w-2xl mx-auto">
                        Whether you want to discuss a project, ask a question, or just say hello, feel free to get in touch with me using the information below.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8">

                    {/* Email */}
                    <div className="flex items-center mb-6 md:mb-0">
                        <EnvelopeSimple className="text-indigo-600 text-4xl mr-4" />
                        <div>
                            <h3 className="text-2xl font-semibold">Email</h3>
                            <p className="text-gray-700">ardiyana.design@gmail.com</p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center mb-6 md:mb-0">
                        <PhoneCall className="text-indigo-600 text-4xl mr-4" />
                        <div>
                            <h3 className="text-2xl font-semibold">Phone</h3>
                            <p className="text-gray-700">0878 8559 4740</p>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center">
                        <MapPinLine className="text-indigo-600 text-4xl mr-4" />
                        <div>
                            <h3 className="text-2xl font-semibold">Location</h3>
                            <p className="text-gray-700">Jakarta, Indonesia</p>
                        </div>
                    </div>

                </div>

                {/* Contact Form */}
                <div className="mt-16 max-w-xl mx-auto">
                    <form className="bg-white shadow-lg rounded-lg p-8">
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="you@example.com"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                rows="4"
                                placeholder="Your message..."
                                required
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
