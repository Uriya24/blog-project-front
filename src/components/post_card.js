import {Link} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../providers/user_provider";
import {PostsContext} from "../providers/posts_provider";

export function PostCard({singlePost}) {
    const {user} = useContext(UserContext);
    const {removePost} = useContext(PostsContext);


    const curDate = new Date()
    const year = curDate.getFullYear();
    const month = curDate.getMonth() + 1;
    const day = curDate.getDate();

    const postDate = () => {
        return singlePost.date ? singlePost.date : `${day}/${month}/${year}`
    }

    return (
        <div className="flex flex-col max-w-3xl bg-rose-900 text-white border-2 border-gray-500 rounded-lg mx-2 my-4">
            <div className="border-b-2 border-gray-500 p-1 text-sm">{postDate()}</div>
            <div className="pr-6 pl-2 pb-2">
                <h2 className="text-2xl font-semibold text-white">{singlePost.title}</h2>
                <p>{singlePost.body}.</p>
                <div className="flex justify-end">
                    <Link
                        className="inline-flex mt-2 px-3 py-2 text-sm font-semibold bg-blue-900 rounded-lg hover:bg-blue-950"
                        to={`/posts/${singlePost.id}`}>Read more
                    </Link>

                    {user &&
                        <>
                            <Link
                                className="ml-2 inline-flex mt-2 px-3 py-2 text-sm font-semibold bg-blue-900 rounded-lg hover:bg-blue-950"
                                to={`/edit/${singlePost.id}`}>Edit
                            </Link>
                            <button
                                onClick={() => removePost(singlePost.id)}
                                className="ml-2 inline-flex mt-2 px-3 py-2 text-sm font-semibold bg-red-500 rounded-lg hover:bg-red-600"
                            >
                                Remove
                            </button>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

