import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Products></Products>
            },
            {
                path: "/products",
                element: <Products></Products>
            },
            {
                path: "/product-details/:id",
                element: <ProductDetails></ProductDetails>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path:"/cart",
                element:<Cart></Cart>
            }
        ]
    }
])