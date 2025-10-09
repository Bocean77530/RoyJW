

export default async function categoryPage({params,
    searchParams,
}: {
    params: {collection: string};
    searchParams?: {[key: string]: string | string[] | undefined};
}) {
    
    const { sort } = searchParams as { [key: string]: string };
    
}