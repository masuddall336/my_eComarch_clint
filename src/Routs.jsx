import {
    createBrowserRouter
} from "react-router";
import Root from "./Root";
import Home from "./components/home/Home";

let router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            }

        ]
    }
]);
export { router }
