import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider} from "react-router-dom";
import {PostsProvider} from "./providers/posts_provider";
import {UserProvider} from "./providers/user_provider";
import {router} from "./routes";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <UserProvider>
            <PostsProvider>
                <RouterProvider router={router}/>
            </PostsProvider>
        </UserProvider>
    </React.StrictMode>
);


