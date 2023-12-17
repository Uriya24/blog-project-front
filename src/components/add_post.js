import {PostsContext} from "../providers/posts_provider";
import {useContext, useState} from "react";

export function AddPost() {
    const {addPost} = useContext(PostsContext);

    const [postTitleInputValue, setPostTitleInputValue] = useState("");
    const [postBodyInputValue, setPostBodyInputValue] = useState("");

    const handleNewPostSubmit = (event) => {
        event.preventDefault();

        const {title, body, picture} = event.target.elements;

        addPost({
            title: title.value,
            body: body.value,
            // picture: picture.value
        })

        setPostTitleInputValue("");
        setPostBodyInputValue("");
    }

    const handleTitleInputChange = (event) => {
        setPostTitleInputValue(event.target.value);
    };

    const handleBodyInputChange = (event) => {
        setPostBodyInputValue(event.target.value);
    };

    return (
        <div>
            <form className="text-black flex flex-col" onSubmit={handleNewPostSubmit}>
                {/*<label htmlFor="title">Post Title</label>*/}
                <input className="mb-4 px-1 border-2 rounded placeholder-black bg-gray-400"
                       id="title" name="title" type="text" placeholder="Post title" value={postTitleInputValue}
                       onChange={handleTitleInputChange}/>
                {/*<label htmlFor="content">Post Content</label>*/}
                <textarea className="mb-10 h-40 px-1 border-2 rounded placeholder-black bg-gray-400"
                          id="body" name="body" placeholder="Post content" value={postBodyInputValue}
                          onChange={handleBodyInputChange}></textarea>
                {/*<label htmlFor="picture">Add picture</label>*/}
                {/*<input id="picture" name="picture" type="file"/><br/>*/}
                <button className="px-4 py-1 font-semibold border-2 text-white bg-blue-900 rounded-lg hover:bg-blue-950"
                        type="submit">Create Post
                </button>
            </form>
        </div>
    )
}