"use client";

import { useState, useEffect, useRef } from "react";

const jewelry = [
        "Best Sellers","New Releases","Necklaces","Chains","Bracelets","Earrings",
        "Rings","Watches","Grillz","Accessories","Jewelry Care","Men","Women","Sale",
    ];


export default function MegaMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    return(
        <div ref={menuRef} className="absolute bottom-0 left-0" onClick={() => setIsOpen(!isOpen)}>
            <button
                type="button"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white px-4 py-2"
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                Shop
            </button>

            { isOpen && (
                <div className="absolute left-0 top-full w-screen bg-white shadow-xl ring-1 ring-black/5
                     translate-y-2 md:translate-y-3">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="text-gray-500 text-sm font-medium mb-2">JEWELRY</div>
                            {jewelry.map((item, index) => (
                                <div key={index} className="text-gray-900 hover:text-blue-600 cursor-pointer py-1">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
    

}