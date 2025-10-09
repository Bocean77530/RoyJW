
export async function shopifyFetch<T>({
    cache = 'force-cache',
    header,
    query,
    tags,
    variables,
}: {
    cache?: RequestCache;
    header?: HeadersInit;
    query?: string;
    tags?: string[];
    variables?: ExtractVariables<T>;
}): Promise<{status: number, body: T} | never > {

    try {
        const result = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
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





