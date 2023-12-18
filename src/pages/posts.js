import {useContext, useState} from "react";
import {PostsContext} from "../providers/posts_provider";
import {PostCard} from "../components/post_card";
import {PostList} from "../components/post_list";

export function Posts() {
    const {postsArr} = useContext(PostsContext);

    const [searchInputValue, setSearchInputValue] = useState("");

    const handleSearchInputChange = (event) => {
        setSearchInputValue(event.target.value);
    };

    const filteredPostsArr = () => {
        return postsArr.filter((post) =>
            post.title.toLowerCase().includes(searchInputValue.toLowerCase()))
            .map((post) => <PostCard singlePost={post}/>);
    };

    return (
        <div>
            <h5 className="text-white m-2">Number of posts: {filteredPostsArr().length}</h5>
            <input className="text-black mx-2 my-4 px-2 border-2 rounded placeholder-black bg-gray-400"
                   name="search" type="text"
                   placeholder="Search post"
                   onChange={handleSearchInputChange}/>
            <PostList>
                {filteredPostsArr()}
            </PostList>
            {/*<button>Load more posts</button>*/}
        </div>
    )
}