import React from "react";
import Image from "next/image";
import Header from "./components/header"; 
import MainShowcase from "./components/MainShowcase";
import Navigation from "./components/navigation";
import Popup from "./components/Popup";
import HorizontalScroll from "./components/HorizontalScroll";
import SubShowcase from "./components/SubShowcase";
import Footer from "./components/Footer";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className='sticky top-0 z-50'><Navigation/></div>
      
      <Link href='/collections' className='block bg-white py-4'>
        <div className='text-center'>
          <div className='font-bold text-lg uppercase text-gray-800 mb-1'>TENNIS CHAIN EVENT</div>
          <div className='text-gray-700'>
            Get up to 50% off our Tennis Chains & Bracelets. <span className='underline'>SHOP NOW</span>
          </div>
        </div>
      </Link>

      <div>
        <MainShowcase />
      </div>
      <div>
        <HorizontalScroll />
      </div>
      <div>
        <SubShowcase />
      </div>
      <div>
        <Popup />
      </div>
      
      <div>
        <Footer />
      </div>
    </div>
  );
}
