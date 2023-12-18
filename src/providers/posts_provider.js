import {createContext, useEffect, useState} from "react";

export const PostsContext = createContext(null);

export function PostsProvider({children}) {
    const [postsArr, setPostsArr] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPostsArr(json))
    }, []);


    const addPost = (newPost) => {
        setPostsArr([...postsArr, newPost]);
    }

    const removePost = (postId) => {
        setPostsArr(postsArr.filter((post) => post.id !== postId));
    };

    const value = { postsArr, addPost, removePost };


    return (
        <PostsContext.Provider value={value}>
            {children}
        </PostsContext.Provider>
    )
}

