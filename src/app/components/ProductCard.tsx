import Link from "next/link";
import Image from "next/image";
import {Product} from "../utils/FakeData";

export default function ProductCard({product}: {product: Product}) {
    
    return (
        <div className="card">
            <Link href={`/product/${product.slug}`}>
                
                <Image 
                    src={product.image} 
                    alt={product.name} 
                    width={300} 
                    height={300} 
                    className="rounded shadow w-full h-64 object-cover" 
                />
                
            </Link>

            <div className="flex flex-col items-center justify-center p-5">
                <Link href={`/product/${product.slug}`}>
                    
                        <h2 className="text-lg">{product.name}</h2>
                    
                </Link>

                <p className="mb-2">{product.description}</p>
                <p className="mb-2">${product.price}</p>
                <button className="primary-button" type="button">Add to Cart</button>
            </div>
        </div>
    )
}