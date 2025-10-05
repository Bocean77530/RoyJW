export interface Product {
    id: number;
    name: string;
    slug: string;
    colors: string[];
    collections: string[];
    price: number;
    countInStock: number;
    rating: number;
    numReviews: number;
    description: string;
    image: string;
}

const FakeData: Product[] = [
    {
        id: 1,
        name: "Virgo Chain",
        slug: "virgo-chain",
        colors:["Black", "White", "Gray"],
        collections:["Chains", "Bracelets", "Virgo"],
        price: 100,
        countInStock: 10,
        rating: 4.5,
        numReviews: 10,
        description: "random description",
        image: "/FakeImage/virgochain.png"
    },
    {
        id: 2,
        name: "Virgo Bracelet",
        slug: "virgo-bracelet",
        colors:["Black", "White", "Gray"],
        collections:["Chains", "Bracelets", "Virgo"],
        price: 100,
        countInStock: 10,
        rating: 4.5,
        numReviews: 10,
        description: "random description",
        image: "/FakeImage/virgobrac.png"
    },
    {
        id: 3,
        name: "Virgo Earring",
        slug: "virgo-earring",
        colors:["Black", "White", "Gray"],
        collections:["Earrings", "Virgo"],
        price: 100,
        countInStock: 10,
        rating: 4.5,
        numReviews: 10,
        description: "random description",
        image: "/FakeImage/virgoearring.png"
    },
    {
        id: 4,
        name: "Virgo Ring",
        slug: "virgo-ring",
        colors:["Black", "White", "Gray"],
        collections:["Rings", "Virgo"],
        price: 100,
        countInStock: 10,
        rating: 4.5,
        numReviews: 10,
        description: "random description",
        image: "/FakeImage/virgoring.png"
    },
    {
        id: 5,
        name: "Tennis Earring",
        slug: "tennis-earring",
        colors:["Black", "White", "Gray"],
        collections:["Chains", "Bracelets", "Virgo"],
        price: 100,
        countInStock: 10,
        rating: 4.5,
        numReviews: 10,
        description: "random description",
        image: "/FakeImage/tennisearring.png"
    },
    {
        id: 6,
        name: "Tennis Chain",
        slug: "tennis-chain",
        colors:["Black", "White", "Gray"],
        collections:["Bracelets", "Virgo"],
        price: 100,
        countInStock: 10,
        rating: 4.5,
        numReviews: 10,
        description: "random description",
        image: "/FakeImage/tennischain.png"
    },
    {
        id: 7,
        name: "Tennis Ring",
        slug: "tennis-ring",
        colors:["Black", "White", "Gray"],
        collections:["Chains", "Virgo"],
        price: 100,
        countInStock: 10,
        rating: 4.5,
        numReviews: 10,
        description: "random description",
        image: "/FakeImage/tennisring.png"
    }
]

export default FakeData;