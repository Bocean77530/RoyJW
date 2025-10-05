import ProductsList from "../components/ProductsList";
import Header from "../components/header";
import Navigation from "../components/navigation";
import Footer from "../components/Footer";

export default function ProductsPage() {
  return (
    <div>
      <Header />
      <div className='sticky top-0 z-50'>
        <Navigation />
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Our Products</h1>
        <ProductsList />
      </div>
      
      <Footer />
    </div>
  );
}
