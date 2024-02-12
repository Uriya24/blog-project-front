import {Link} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../providers/user_provider";
import {PostsContext} from "../providers/posts_provider";

export function PostCard({singlePost}) {
    const {user} = useContext(UserContext);
    const {removePost} = useContext(PostsContext);

    const handleRemovePost = () => {
        removePost(singlePost.id);
    }

    const shortContent = (content, maxWords) => {
        if (content){
            const words = content.split(" ");
            if (words.length > maxWords) {
                return words.slice(0, maxWords).join(" ") + " ...";
            }
        }
        return content;
    }

    return (
        <div
            className="flex flex-col border-2 border-gray-500 rounded-lg mx-2 my-2 min-w-full max-w-xl 2xl:max-w-3xl">
            <span
                className="border-b-2 border-gray-500 p-1 text-sm">{singlePost.date.split("-").reverse().join("/")}</span>
            <div className="pr-6 pl-2 pb-2">
                <h2 className="text-xl font-semibold">{singlePost.title}</h2>
                <p className="text-base">{shortContent(singlePost.content, 15)}</p>
                <div className="flex justify-end">
                    <Link
                        className="inline-flex mt-2 px-3 py-2 text-sm font-semibold bg-blue-900 rounded-lg hover:bg-blue-950"
                        to={`/posts/${singlePost.id}`}>Read more
                    </Link>
                    {/*if user is admin, display the edit and remove buttons*/}
                    {user && (user.admin &&
                        <>
                            <Link
                                className="ml-2 inline-flex mt-2 px-3 py-2 text-sm font-semibold bg-blue-900 rounded-lg hover:bg-blue-950"
                                to={`/edit/${singlePost.id}`}>Edit
                            </Link>
                            <button
                                className="ml-2 inline-flex mt-2 px-3 py-2 text-sm font-semibold bg-red-500 rounded-lg hover:bg-red-600"
                                onClick={handleRemovePost}>Remove
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

