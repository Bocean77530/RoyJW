import FakeData from "../utils/FakeData";
import ProductCard from "./ProductCard";


export default function ProductsList() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FakeData.map((product) => (
                <ProductCard key={product.slug} product={product} />
            ))}
        </div>
    )
}