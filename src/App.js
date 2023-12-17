import './App.css';
// import {Home} from "./pages/home";
// import {Posts} from "./pages/posts";
// import {Post} from "./pages/post";
// import {About} from "./pages/about";
// import {Contact} from "./pages/contact";
// import {Admin} from "./pages/admin";
import {Header} from "./components/header";
import {Footer} from "./components/footer";
// import {useState} from "react";
import {Outlet} from "react-router-dom";

export function App() {



    return (
        <div className="bg-cyan-950 text-white">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}


