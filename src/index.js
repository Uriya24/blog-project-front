import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider} from "react-router-dom";
import {PostsProvider} from "./providers/posts_provider";
import {UserProvider} from "./providers/user_provider";
import {router} from "./routes";
import {GoogleOAuthProvider} from "@react-oauth/google";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
            <UserProvider>
                <PostsProvider>
                    <RouterProvider router={router}/>
                </PostsProvider>
            </UserProvider>
        </GoogleOAuthProvider>
    </React.StrictMode>
);


