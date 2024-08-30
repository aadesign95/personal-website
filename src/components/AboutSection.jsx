import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className="bg-white text-gray-900 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center">

                    {/* Foto Profil */}
                    <div className="md:w-1/3 mb-8 md:mb-0">
                        <img
                            src="/aan_ic.png"
                            alt="Profile Picture"
                        />
                    </div>

                    {/* Konten Teks */}
                    <div className="md:w-2/3 md:pl-10">
                        <h2 className="text-4xl font-extrabold mb-4">About Me</h2>
                        <p className="text-lg leading-relaxed mb-4">
                            I'm Aan Ardiyana, a passionate <span className="text-indigo-600">UI/UX Designer</span> and <span className="text-indigo-600">Web Developer</span> with over 3 years of experience in creating intuitive and beautiful digital experiences. My journey began with a love for design and technology, and over the years, I've honed my skills to blend creativity with functionality.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            My approach to design is user-centered, ensuring that every product I work on is not only visually appealing but also provides a seamless and enjoyable user experience. I have a deep understanding of both the aesthetic and technical aspects of web development, allowing me to create responsive, high-performance websites and applications.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Whether you're looking for a new website, an app, or just some design consultation, I'm here to help bring your ideas to life. Let's collaborate and create something extraordinary together.
                        </p>
                        <div className="mt-6">
                            <a href="#portfolio" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                                View My Work
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
