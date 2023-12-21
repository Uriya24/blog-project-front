import {useContext, useState} from "react";
import {PostsContext} from "../providers/posts_provider";
import {PostCard} from "../components/post_card";
import {PostList} from "../components/post_list";

export function Posts() {
    const {postsArr} = useContext(PostsContext);
    const [searchInputValue, setSearchInputValue] = useState("");
    const [displayPostsCount, setDisplayPostsCount] = useState(3);


    const handleSearchInputChange = (event) => {
        setSearchInputValue(event.target.value);
    };

    const handleLoadMore = () => {
        setDisplayPostsCount(displayPostsCount + 3)
    }

    const filteredPostsArr = () => {
        return postsArr.filter((post) =>
            post.title.toLowerCase().includes(searchInputValue.toLowerCase()))
            .map((post) => <PostCard singlePost={post}/>);
    };

    const displayPosts = searchInputValue === "" ? filteredPostsArr().slice(0, displayPostsCount) : filteredPostsArr();

    return (
        <div>
            <input className="text-black mx-2 px-2 border-2 rounded placeholder-black bg-gray-400"
                   name="search" type="text"
                   placeholder="Search post"
                   onChange={handleSearchInputChange}/>
            <PostList>
                {displayPosts}
            </PostList>
            <div className="inline-flex items-center justify-center w-full">
                {searchInputValue === "" && <button
                    className="m-2 px-3 py-2 text-sm font-semibold bg-blue-900 rounded-lg hover:bg-blue-950"
                    onClick={handleLoadMore}>Load more</button>}
                {postsArr.length <= displayPostsCount && <span
                    className="m-2 font-semibold text-sky-500"
                >No more posts</span>}
            </div>
        </div>
    )
}