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
        setPostsArr([newPost, ...postsArr]);
    }

    const removePost = (postId) => {
        setPostsArr(postsArr.filter((post) => post.id !== postId));
    };

    const getPostIndex = (postId) => {
        console.log('@postIndex/!postsArr', postsArr);
        postsArr.findIndex(post => post.id === Number(postId));
    }

    const getPostById = (postId) => {
        return postsArr.find(post => post.id.toString() === postId);
    }


    const postsProviderValues = { postsArr, addPost, removePost, getPostIndex, setPostsArr, getPostById };


    return (
        <PostsContext.Provider value={postsProviderValues}>
            {children}
        </PostsContext.Provider>
    )
}

