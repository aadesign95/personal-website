import React, { useState } from 'react'
import { List } from "@phosphor-icons/react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeMenu, setActiveMenu] = useState('Home')

    const menuItems = [
        { name: "Home", href: "#" },
        { name: "About", href: "#about" },
        { name: "Service", href: "#service" },
        { name: "Porfolio", href: "#portfolio" },
        { name: "Contnact", href: "#contact" },
    ]

    const menuItemClass = "active:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
    const activeClass = "bg-gray-100 text-gray-800"

    return (
        <div className='p-4 bg-white border-b mb-5'>
            <div className="container mx-auto flex items-center justify-between">
                <a href="#" className='font-extrabold text-4xl rotate-x-180'>VVN.</a>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none"
                    aria-label="Main menu"
                    aria-expanded="false"
                >
                    <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        {isOpen ? (
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6 18L18 6M6 6l12 12"
                                stroke="currentColor"
                                strokeWidth={2}
                            />
                        ) : (
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4 6h16M4 12h16M4 18h16"
                                stroke="currentColor"
                                strokeWidth={2}
                            />
                        )}
                    </svg>
                </button>
                <ul className='hidden md:flex items-start gap-6'>
                    {menuItems.map((item) => (
                        <li>
                            <a
                                href={item.href}
                                key={item.name}
                                className={`${menuItemClass} ${activeMenu === item.name ? activeClass : ""}`}
                                onClick={() => setActiveMenu(item.name)}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

            </div>
            {isOpen && (
                <div className="container mx-auto md:mt-5">
                    <ul className='md:hidden transition-all duration-300 ease-in-out flex flex-col gap-4'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            )}
        </div>
    )
}
