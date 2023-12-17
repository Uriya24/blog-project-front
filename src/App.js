import './App.css';
import {Header} from "./components/header";
import {Footer} from "./components/footer";
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


