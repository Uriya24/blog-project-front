import './App.css';
import {Header} from "./components/header";
import {Footer} from "./components/footer";
import {Outlet} from "react-router-dom";

export function App() {


    return (
        <div>
            <div style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/zna-big.jpg)`,
            }} className=" bg-center w-full h-full top-0 left-0 bg-cover resize content-none text-white">
                <Header/>
                <Outlet/>
                <Footer/>
            </div>
        </div>
    );
}


