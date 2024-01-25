import {Link} from "react-router-dom";
import {UserContext} from "../providers/user_provider";
import {useContext} from "react";

export function Header() {
    const {user, login, logout} = useContext(UserContext);

    return (
        <header style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/zna-big.jpg)`,
        }}
             className="sticky w-full flex flex-wrap justify-center items-center top-0 bg-inherit bg-fixed bg-center bg-cover bg-no-repeat">
                <Link className="font-semibold text-4xl p-1 text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-400 to-red-600" to="/">Uriya's Blog</Link>
            <nav className="flex flex-wrap items-center justify-center w-full mx-auto px-4 py-2 font-semibold">
                <div>
                    <ul className="flex space-x-2">
                        <li><Link className="text-2xl rounded-md px-2 py-1 hover:bg-cyan-600 hover:text-white"
                                  to="/">Home</Link></li>
                        <li><Link className="text-2xl rounded-md px-2 py-1 hover:bg-cyan-600 hover:text-white"
                                  to="/posts">Posts</Link></li>
                        <li><Link className="text-2xl rounded-md px-2 py-1 hover:bg-cyan-600 hover:text-white"
                                  to="/contact">Contact</Link></li>
                        {user && (<>
                            <li><Link className="text-2xl rounded-md px-2 py-1 hover:bg-cyan-600 hover:text-white"
                                      to="/admin">Admin</Link></li>
                            <li><span
                                className="text-2xl rounded-md px-2 py-1">
                                Welcome: {user.data.given_name}</span></li>
                        </>)}
                        <li><Link className="text-2xl rounded-md px-2 py-1 hover:bg-cyan-600 hover:text-white" to="#">
                            {user ? <button onClick={logout}>Sign out</button> :
                                <button onClick={login}>Sign in</button>}
                        </Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
