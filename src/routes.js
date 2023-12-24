import {App} from "./App";
import {Home} from "./pages/home";
import {Posts} from "./pages/posts";
import {Post} from "./pages/post";
import {About} from "./pages/about";
import {Contact} from "./pages/contact";
import {Admin} from "./pages/admin";
import {createBrowserRouter} from "react-router-dom";
import {EditPost} from "./components/edit_post";

// Creating the router configuration using createBrowserRouter from react-router-dom
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/posts",
                element: <Posts/>,
            },
            {
                path: "/posts/:id",
                element: <Post/>,
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>,
            },
            {
                path: '/admin',
                element: <Admin/>
            },
            {
                path: '/edit/:id',
                element: <EditPost/>
            }
        ],
    },
]);