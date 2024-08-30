import React from 'react';
import { DribbbleLogo, XLogo, LinkedinLogo, GithubLogo } from "@phosphor-icons/react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">

                    {/* Brand and Copyright */}
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold text-white">Aan Ardiyana</h2>
                        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} AanArdiyana. All rights reserved.</p>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex space-x-6 mb-6 md:mb-0">
                        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <DribbbleLogo />
                        </a>
                        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <XLogo />
                        </a>
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <LinkedinLogo />
                        </a>
                        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <GithubLogo />
                        </a>
                    </div>

                    {/* Quick Links */}
                    <div className="flex space-x-6">
                        <a href="#about" className="text-gray-400 hover:text-white">About</a>
                        <a href="#services" className="text-gray-400 hover:text-white">Services</a>
                        <a href="#portfolio" className="text-gray-400 hover:text-white">Portfolio</a>
                        <a href="#contact" className="text-gray-400 hover:text-white">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
