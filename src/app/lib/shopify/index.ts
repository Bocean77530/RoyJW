import { ensureStartsWith } from "@/app/lib/utils";
import { SHOPIFY_GRAPHQL_API_ENDPOINT } from "@/app/lib/constant";
import { isShopifyError } from "@/app/lib/type-guards";

const domain = process.env.SHOPIFY_STORE_DOMAIN ? ensureStartsWith(process.env.SHOPIFY_STORE_DOMAIN, "https://") : "";

const endpoint = `${domain}${SHOPIFY_GRAPHQL_API_ENDPOINT}`;
const key = process.env.SHOPIFY_API_KEY; 

type ExtractVariables<T> = T extends { variables: object  } 
    ? T["variables"] 
    : never;

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
}): Promise<{status: number, body: T} | never > {

    try {
        const result = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Storefront-Access-Token': key,
                ...headers,
            },
            body: JSON.stringify({
                ...(query && {query}), 
                ...(variables && {variables}),
            }),
            cache,
            ...(tags && {next: {tags}}),
        });
        if (!result.ok) {
            throw new Error(`HTTP error! status: ${result.status}`);
        }
        const body = await result.json();
        
        if (body.errors) {
            throw body.errors[0];
        }
        return {status: result.status, body};
    } catch (error) {
        if(isShopifyError(error)) {
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





