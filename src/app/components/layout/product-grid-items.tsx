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
                    <GridTileImage />
                </link>
            </Grid.Item>
        ))}
        </>
    )
}