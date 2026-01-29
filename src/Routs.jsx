import {
    createBrowserRouter
} from "react-router";
import Root from "./Root";
import Home from "./components/home/Home";
import AddProduct from "./components/add-product/AddProduct";
import ProductDetails from "./product_details/ProductDetails";
import Update from "./product_details/update/Update";

let router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path:'new-product-add',
                Component: AddProduct
            },
            {
                path: 'product-details/:id',
                Component: ProductDetails
            },
            {
                path: 'product-update/:id',
                Component: Update
            }

        ]
    }
]);
export { router }
