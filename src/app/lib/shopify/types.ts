


export type Money = {
    amount: string;
    currencyCode: string;
}

export type Edge<T> = {
    node: T;
}

export type ProductVariant = {
    id: string;
    title: string;
    price: Money;
    selectedOptions: {
        name: string;
        value: string;
    }[];
    availableForSale: boolean;
}

export type Image = {
    url: string;
    altText: string;
    width: number;
    height: number;
}

export type Connection<T> = {
    edges: Array<Edge<T>>
}

export type SEO = {
    title: string;
    description: string;
}

export type ProductOption = {
    id: string;
    name: string;
    values: string[];
}

export type ShopifyProduct = {
    id: string;
    handle: string;
    title: string;
    description: string;
    descriptionHtml: string;
    priceRange: {
        maxVariantPrice: Money;
        minVariantPrice: Money;
    };
    variants: Connection<ProductVariant>;
    featuredImage: string;
    images: Connection<Image>;
    seo: SEO;
    tags: string[];
    updatedAt: string;
    options: ProductOption[];
}

export type Product = Omit<ShopifyProduct, "variants" | "images"> & {
    variants: ProductVariant[];
    images: Image[];
};

export type ShopifyProductsOperation = {
    data: {
        products: Connection<ShopifyProduct>;
    };
    variables: {
        query?: string;
        reverse?: boolean;
        sortKey?: string;
    };
}