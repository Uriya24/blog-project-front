import './App.css';
import {Header} from "./components/header";
import {Footer} from "./components/footer";
import {Outlet} from "react-router-dom";

export function App() {

    return (
        <div style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/zna-big.jpg)`,
        }} className="relative bg-fixed bg-center bg-cover bg-no-repeat overflow-auto w-screen h-screen text-white text-xl">
            <Header/>
            <div className=" mb-12">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
}

