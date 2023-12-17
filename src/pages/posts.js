import {PostList} from "../components/post_list"
import {useEffect, useState} from "react";

export function Posts() {
    const [postsArr, setPostsArr] = useState([]);

    const addPost = (newPost) => {
        setPostsArr([...postsArr, newPost]);
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPostsArr(json))
    }, []);

    return (
        <div>
            <h5 className="text-white m-2">Number of posts: {postsArr.length}</h5>
            <PostList postsList={postsArr}/>
            <button>Load more posts</button>
        </div>
    )
}