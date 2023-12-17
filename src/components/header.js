import {Link} from "react-router-dom";
import {UserContext} from "../providers/user_provider";
import {useContext} from "react";

export function Header() {
    const {user, signIn} = useContext(UserContext);

    return (
        <div className="sticky top-0 bg-cyan-800 text-gray-200">
            <nav className="w-full flex flex-wrap items-center justify-between mx-auto px-4 py-3">
                <Link className="hover:text-rose-900" to="/">My Blog</Link>
                <div>
                    <ul className="flex space-x-6">
                        <li><Link className="rounded-md px-2 py-1 hover:bg-rose-900 hover:text-white"
                                  to="/">Home</Link></li>
                        <li><Link className="rounded-md px-2 py-1 hover:bg-rose-900 hover:text-white"
                                  to="/about">About</Link></li>
                        <li><Link className="rounded-md px-2 py-1 hover:bg-rose-900 hover:text-white"
                                  to="/posts">Posts</Link></li>
                        <li><Link className="rounded-md px-2 py-1 hover:bg-rose-900 hover:text-white"
                                  to="/contact">Contact</Link></li>
                        {user && (<li><Link className="rounded-md px-2 py-1 hover:bg-rose-900 hover:text-white"
                                            to="/admin">Admin</Link></li>)}
                        <li><Link className="rounded-md px-2 py-1 hover:bg-rose-900 hover:text-white" to="#">
                            {user ? `Welcome: ${user.userName}` : <button onClick={signIn}>Sign in</button>}
                        </Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
