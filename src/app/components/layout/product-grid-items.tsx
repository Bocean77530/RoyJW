import { Product } from "@/app/lib/shopify/types";
import Grid from "../grid"
import { GridTileImage } from "../grid/tile"
export default function ProductGridItems(
    {products}: {products: Product[]}
){
    return(
        <>
        {products.map((product) =>(
            <Grid.Item key={product.handle}>
                <link href ={`/products/${product.handle}`} className="relative inline-block w-full h-full">
                    <GridTileImage alt={product.title}
                        label={{
                            title: product.title,
                            amount: product.priceRange.maxVariantPrice.amount,
                            currencyCode: product.priceRange.maxVariantPrice.currencyCode,
                        }}
                        src={product.featuredImage}
                        fill
                        sizes="(max-width: 768px) 33vw, (min-width:640px) 50vw, 100vw"
                    />
                </link>
            </Grid.Item>
        ))}
        </>
    )
}