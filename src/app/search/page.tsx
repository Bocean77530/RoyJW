import { Grid } from "lucide-react";
import { sorting, defaultSort } from "../lib/constant";
export async function SearchPage({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined } }) {
    const { sort, q: searchValue } = searchParams as { [key: string]: string };
    const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
    const products = await getProducts({ sortKey, reverse, query: searchValue });
    return (
        <>
            {searchValue ? (
                <p>
                    {products.length === 0 ? "There are no products that match"
                        : `Showing ${products.length} ${resultsText} for`}

                    <span>&quot;{searchValue}&quot;</span>
                </p>
            ) : null}

            {ProductsList.length > 0 ? (
                <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <ProductGridItems product={products} />

                </Grid>
            ) : null}
        </>
    );
}

export default SearchPage;
