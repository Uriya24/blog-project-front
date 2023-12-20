import {Link} from "react-router-dom";
import {UserContext} from "../providers/user_provider";
import {useContext} from "react";

export function Header() {
    const {user, signIn, signOut} = useContext(UserContext);

    return (
        <div className="sticky flex flex-wrap justify-center items-center top-0 bg-transparent">
                <Link className="font-bold text-3xl" to="/">Uriya's Blog</Link>
            <nav className="flex flex-wrap items-center justify-center w-full mx-auto px-4 py-2 font-bold">
                <div>
                    <ul className="flex space-x-2">
                        <li><Link className="rounded-md px-2 py-1 hover:bg-rose-900 hover:text-white"
                                  to="/">Home</Link></li>
                        <li><Link className="rounded-md px-2 py-1 hover:bg-rose-900 hover:text-white"
                                  to="/about">About</Link></li>
                        <li><Link className="rounded-md px-2 py-1 hover:bg-rose-900 hover:text-white"
                                  to="/posts">Posts</Link></li>
                        <li><Link className="rounded-md px-2 py-1 hover:bg-rose-900 hover:text-white"
                                  to="/contact">Contact</Link></li>
                        {user && (<>
                            <li><Link className="rounded-md px-2 py-1 hover:bg-rose-900 hover:text-white"
                                      to="/admin">Admin</Link></li>
                            <li><span
                                className="rounded-md px-2 py-1">
                                Welcome: {user.userName}</span></li>
                        </>)}
                        <li><Link className="rounded-md px-2 py-1 hover:bg-rose-900 hover:text-white" to="#">
                            {user ? <button onClick={signOut}>Sign out</button> :
                                <button onClick={signIn}>Sign in</button>}
                        </Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
