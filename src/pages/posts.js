import {useContext, useState} from "react";
import {PostsContext} from "../providers/posts_provider";
import {PostCard} from "../components/post_card";

export function Posts() {
    const {postsArr} = useContext(PostsContext);

    const [searchInputValue, setSearchInputValue] = useState("");

    const handleSearchInputChange = (event) => {
        setSearchInputValue(event.target.value);
    };

    const filteredPostsArr = postsArr.filter((post) =>
        post.title.toLowerCase().includes(searchInputValue.toLowerCase())
    );

    return (
        <div>
            <h5 className="text-white m-2">Number of posts: {filteredPostsArr.length}</h5>
            <input className="text-black mx-2 my-4 px-2 border-2 rounded placeholder-black bg-gray-400" name="search" type="text"
                   placeholder="Search post" value={searchInputValue}
                   onChange={handleSearchInputChange}/>
            {filteredPostsArr.map((post) => <PostCard singlePost={post}/>)}
            {/*<button>Load more posts</button>*/}
        </div>
    )
}