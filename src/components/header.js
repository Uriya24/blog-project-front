import {Link} from "react-router-dom";

export function Header() {
    return (
        <div className="sticky top-0 bg-cyan-800 text-gray-200">
            <nav className="w-full flex flex-wrap items-center justify-between mx-auto px-4 py-3">
                <Link className="hover:text-rose-900" to="/">My Blog</Link>
                <div>
                    <ul className="flex space-x-6">
                        <li><Link className="rounded-md px-2 py-1 hover:bg-rose-900 hover:text-white" to="/">Home</Link></li>
                        <li><Link className="rounded-md px-2 py-1 hover:bg-rose-900 hover:text-white" to="/about">About</Link></li>
                        <li><Link className="rounded-md px-2 py-1 hover:bg-rose-900 hover:text-white" to="/posts">Posts</Link></li>
                        <li><Link className="rounded-md px-2 py-1 hover:bg-rose-900 hover:text-white" to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}


//         <nav className="navbar navbar-expand-sm bg-dark-subtle sticky-top" data-bs-theme="dark">
//             <div className="container-fluid">
//                 <Link className="navbar-brand" to="/">Home</Link>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
//                         data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
//                         aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                     <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
//                     <li className="nav-item"><Link to="/posts" className="nav-link">Posts</Link></li>
//                     <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
//                 </ul>
//                     <form className="d-flex" role="search">
//                         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//                         <button className="btn btn-outline-light" type="submit">Search</button>
//                     </form>
//                 </div>
//             </div>
//         </nav>
//     )
// }

//         <div>
//             <h1>Header</h1>
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/about">About</Link></li>
//                 <li><Link to="/posts">Posts</Link></li>
//                 <li><Link to="/contact">Contact</Link></li>
//             </ul>
//         </div>
//     )
// }