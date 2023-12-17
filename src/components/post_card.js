import {Link} from "react-router-dom";

export function PostCard({singlePost}) {
    const curDate = new Date()
    const year = curDate.getFullYear();
    const month = curDate.getMonth() + 1;
    const day = curDate.getDate();

    return (
        <div className="flex flex-col max-w-3xl bg-rose-900 text-white border-2 border-gray-500 rounded-lg mx-1 my-4">
            <div className="border-b-2 border-gray-500 p-1 text-sm">{`${day}/${month}/${year}`}</div>
            <div className="pr-6 pl-2 pb-2">
                <h2 className="text-2xl font-semibold text-white">{singlePost.title}</h2>
                <p>{singlePost.body}.</p>
                <div className="flex justify-end">
                    <Link
                        className="inline-flex mt-2 px-3 py-2 text-sm font-semibold bg-blue-900 rounded-lg hover:bg-blue-950"
                        to={`/posts/${singlePost.id}`}>Read more
                    </Link>
                </div>
            </div>
        </div>
    )
}

// <div className="card">
//     <h5 className="card-header">Featured</h5>
//     <div className="card-body">
//         <h5 className="card-title">Special title treatment</h5>
//         <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
//         <a href="#" className="btn btn-primary">Go somewhere</a>
//     </div>
// </div>