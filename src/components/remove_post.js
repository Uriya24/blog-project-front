// not included in final project
import {PostsContext} from "../providers/posts_provider";
import {useContext, useState} from "react";

export function RemovePost() {
    const {removePost} = useContext(PostsContext);

    const [postIdInputValue, setPostIdInputValue] = useState(""); // State to keep track of the input value

    const handleRemovePostSubmit = (event) => {
        event.preventDefault();

        const {postId} = event.target.elements;

        removePost(postId.value)

        setPostIdInputValue(""); // Reset the input value
    }

    const handlePostIdInputChange  = (event) => {
        setPostIdInputValue(event.target.value);
    };

    return (
        <div>
            <form className="text-black flex flex-col" onSubmit={handleRemovePostSubmit}>
                <input className="mb-4 mt-10 px-1 border-2 rounded placeholder-black bg-gray-400"
                       id="postId" name="postId" type="text" placeholder="Post ID" value={postIdInputValue}
                       onChange={handlePostIdInputChange}/>
                <button className="px-4 py-1 font-semibold border-2 text-white bg-blue-900 rounded-lg hover:bg-blue-950"
                        type="submit">Remove Post
                </button>
            </form>
        </div>
    )
}