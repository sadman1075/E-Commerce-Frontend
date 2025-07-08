import { useAllProductsQuery } from "../../Redux/api/baseApi";
import Product from "../Product/Product";


const Products = () => {
    const { data, isLoading } = useAllProductsQuery(undefined)

    if (isLoading) {
        return <p>Loading.....</p>
    }
    console.log(data);
    return (
        <div className=" max-w-7xl mx-auto">
            <h1 className="text-3xl lg:text-5xl font-bold text-center mb-7">ALL PRODUCTS</h1>

            <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                {
                    !isLoading && data?.map((product) => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;