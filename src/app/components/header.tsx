"use client";

import Link from 'next/link';
import Navigation from './navigation';
import { useState, useEffect } from 'react';

const messages = [
  { text: "Buy now and pay later with Shop Pay", link: "https://www.google.com" },
  { text: "Fast and easy returns", link: "https://www.google.com" },
  "Free shipping on orders over $50",
];

export default function Header() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 5000); // Change message every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div >
      <header className='text-center bg-black text-white py-2 px-4 '>
        <div className='animate-pulse'>
          {!isClient ? (
            // Show first message during SSR to prevent hydration mismatch
            typeof messages[0] === 'string' ? (
              messages[0]
            ) : (
              <Link 
                href={messages[0].link} 
                className='hover:underline hover:text-gray-300 transition-colors'
              >
                {messages[0].text}
              </Link>
            )
          ) : (
            typeof messages[currentMessage] === 'string' ? (
              messages[currentMessage]
            ) : (
              <Link 
                href={messages[currentMessage].link} 
                className='hover:underline hover:text-gray-300 transition-colors'
              >
                {messages[currentMessage].text}
              </Link>
            )
          )}
        </div>
      </header>
      
      
    </div>
  );
}
