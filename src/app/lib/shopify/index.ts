import { ensureStartsWith } from "@/app/lib/utils";
import { SHOPIFY_GRAPHQL_API_ENDPOINT } from "@/app/lib/constant";
import { isShopifyError } from "@/app/lib/type-guards";
import { TAGS, HIDDEN_PRODUCT_TAG } from "@/app/lib/constant";
import { ShopifyProductsOperation, Product, Connection, ShopifyProduct, Image } from "./types";
import { getProductsQuery } from "./queries/products";
const domain = process.env.SHOPIFY_STORE_DOMAIN ? ensureStartsWith(process.env.SHOPIFY_STORE_DOMAIN, "https://") : "";

const endpoint = `${domain}${SHOPIFY_GRAPHQL_API_ENDPOINT}`;
const key = process.env.SHOPIFY_API_KEY;

type ExtractVariables<T> = T extends { variables: object }
    ? T["variables"]
    : never;


function removeEdgesAndNodes<T>(array: Connection<T>): T[] {
    return array.edges.map((edge) => edge?.node);
}

function reshapeImages(images: Connection<Image>, title: string){
    const flattened = removeEdgesAndNodes(images);
    return flattened.map((image)=>{
        const filename = image.url.match(/.*\/(.*)\..*/)?.[1];

        return{
            ...image,
            altText: image.altText || `${title} - ${filename}`,
        }
    })
}

function reshapeProduct(product: ShopifyProduct, hidenProducts: boolean = true){
    if(!product || (hidenProducts && product.tags.includes(HIDDEN_PRODUCT_TAG))){
        return undefined;
    }

    const {images, variants, ...rest} = product;
    return {
        ...rest,
        images: reshapeImages(images, product.title),
        variants: removeEdgesAndNodes(variants),
    }
}

function reshapeProducts(products: ShopifyProduct[]){
    const reshapedProducts = [];

    for(const product of products){
        if(product){
            const reshapedProduct = reshapeProduct(product);

            if(reshapedProduct){
                reshapedProducts.push(reshapedProduct);
            }
        }
    }

    return reshapedProducts;
}



export async function shopifyFetch<T>({
    cache = 'force-cache',
    headers,
    query,
    tags,
    variables,
}: {
    cache?: RequestCache;
    headers?: HeadersInit;
    query?: string;
    tags?: string[];
    variables?: ExtractVariables<T>;
}): Promise<{ status: number, body: T } | never> {

    try {
        const result = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Storefront-Access-Token': key,
                ...headers,
            },
            body: JSON.stringify({
                ...(query && { query }),
                ...(variables && { variables }),
            }),
            cache,
            ...(tags && { next: { tags } }),
        });
        if (!result.ok) {
            throw new Error(`HTTP error! status: ${result.status}`);
        }
        const body = await result.json();

        if (body.errors) {
            throw body.errors[0];
        }
        return { status: result.status, body };
    } catch (error) {
        if (isShopifyError(error)) {
            throw {
                cause: error.cause?.toString() || 'Unknown error',
                message: error.message,
                query,
                status: error.status || 500,

            };
        }
        throw {
            error,
            query,
        }
    };
}




export async function getProducts({ 
    query, 
    reverse, 
    sortKey }: { 
        query?: string, 
        reverse?: boolean, 
        sortKey?: string }) : Promise<Product[]>  {
            const res = await shopifyFetch<ShopifyProductsOperation>({
                query: getProductsQuery,
                tags: [TAGS.products],
                variables: {
                    query,
                    reverse,
                    sortKey,
                },
            });

            return reshapeProducts(removeEdgesAndNodes(res.body.data.products))
}
