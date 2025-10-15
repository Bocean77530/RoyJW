import { Product } from "@/app/lib/shopify/types";
import { Grid } from "lucide-react";

export default function ProductGridItems(
    {products}: {products: Product[]}
){
    return(
        <>
        {products.map(product) =>(
            <Grid.Item key={product.handle}></Grid.Item>
        )}
        </>
    )
}