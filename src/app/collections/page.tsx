import ProductsList from "../components/ProductsList";
import Header from "../components/header";
import Navigation from "../components/navigation";
import Footer from "../components/Footer";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div>
      <Header />
      <div className='sticky top-0 z-50'>
        <Navigation />
      </div>
      <Link href='/collections' className='block bg-white py-4'>
        <div className='text-center'>
          <div className='font-bold text-lg uppercase text-gray-800 mb-1'>TENNIS CHAIN EVENT</div>
          <div className='text-gray-700'>
            Get up to 50% off our Tennis Chains & Bracelets. <span className='underline'>SHOP NOW</span>
          </div>
        </div>
      </Link>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Our Products</h1>
        <ProductsList />
      </div>
      
      <Footer />
    </div>
  );
}
