import Link from "next/link";
import {Product} from "../utils/FakeData";

export default function ProductCard({product}: {product: Product}) {
    return (
        <div>
            <Link href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} width={300} height={300} />
            </Link>
        </div>
    )
}