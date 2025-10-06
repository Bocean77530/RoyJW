import FakeData from "../utils/FakeData";
import ProductCard from "./ProductCard";


export default function ProductsList() {
    return (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
            {FakeData.map((product) => (
                <ProductCard key={product.slug} product={product} />
            ))}
        </div>
    )
}