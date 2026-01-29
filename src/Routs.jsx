import {
    createBrowserRouter
} from "react-router";
import Root from "./Root";
import Home from "./components/home/Home";
import AddProduct from "./components/add-product/AddProduct";

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
            }

        ]
    }
]);
export { router }
