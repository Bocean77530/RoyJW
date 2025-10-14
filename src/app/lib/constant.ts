export const TAGS = {
    collections: 'collections',
    products: 'products',
    cart: 'cart',
}

export type SortFilterItem = {
    title: string;
    slug: string | null;
    sortKey: 'BEST_SELLING' | 'CREATED_AT' | 'PRICE' | 'RELEVANCE';
    reverse: boolean;
}

export const defaultSort: SortFilterItem = {
    title: 'Relevance',
    slug: null,
    sortKey: 'RELEVANCE',
    reverse: false,
}

export const SHOPIFY_GRAPHQL_API_ENDPOINT = "/api/2025-10/graphql.json";
export const HIDDEN_PRODUCT_TAG = "nextjs-hidden";

export const sorting: SortFilterItem[] = [
    defaultSort,
    { title: 'Trending', slug: 'trending-desc', sortKey: 'BEST_SELLING', reverse: false },
    { title: 'Latest arrivals', slug: 'latest-desc', sortKey: 'CREATED_AT', reverse: true },
    { title: 'Price: Low to High', slug: 'trending-asc', sortKey: 'PRICE', reverse: false },
    { title: 'Price: High to Low', slug: 'trending-desc', sortKey: 'PRICE', reverse: true },
]