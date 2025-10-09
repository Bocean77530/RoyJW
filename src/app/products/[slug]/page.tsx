import Navigation from "@/app/components/navigation";
import FakeData from "../../utils/FakeData";
import Header from "@/app/components/header";
import Link from "next/link";

interface ProductPageProps {
    params: {
        slug: string;
    };
}

export default function ProductPage({ params }: ProductPageProps) {
    const { slug } = params;
    const product = FakeData.find(x => x.slug === slug);

    if (!product) {
        return <div>
            <h1>Product not found</h1>
        </div>
    }

    return (
        <div>
            <Header />
        <div className='sticky top-0 z-50'>
            <Navigation />
        </div>
        <Link href='/collection' className='block bg-white py-4'>
        <div className='text-center'>
          <div className='font-bold text-lg uppercase text-gray-800 mb-1'>TENNIS CHAIN EVENT</div>
          <div className='text-gray-700'>
            Get up to 50% off our Tennis Chains & Bracelets. <span className='underline'>SHOP NOW</span>
          </div>
        </div>
      </Link>
            <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-96 object-cover rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="space-y-6">
                        <h1 className="text-3xl font-bold">{product.name}</h1>
                        <p className="text-2xl font-semibold text-gray-800">${product.price}</p>
                        <p className="text-gray-600">{product.description}</p>
                        
                        <div className="space-y-2">
                            <h3 className="font-semibold">Colors:</h3>
                            <div className="flex flex-wrap gap-2">
                                {product.colors.map((color, index) => (
                                    <span key={index} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                                        {color}
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                        <div className="space-y-2">
                            <h3 className="font-semibold">Collections:</h3>
                            <div className="flex flex-wrap gap-2">
                                {product.collections.map((collection, index) => (
                                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                                        {collection}
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                            <span className="text-yellow-500">★ {product.rating}</span>
                            <span className="text-gray-500">({product.numReviews} reviews)</span>
                            <span className="text-gray-500">Stock: {product.countInStock}</span>
                        </div>
                        
                        <button className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    )
}