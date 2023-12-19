import './App.css';
import {Header} from "./components/header";
import {Footer} from "./components/footer";
import {Outlet} from "react-router-dom";

export function App() {



    return (
        <div style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/zna_bg.jpg)`,
        }} className= " bg-no-repeat w- text-white">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}


