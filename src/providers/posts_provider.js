import {createContext, useEffect, useState} from "react";
import {json} from "react-router-dom";


export const PostsContext = createContext(null);

export function PostsProvider({children}) {
    const [postsArr, setPostsArr] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            // .then(json => setPostsArr(json));
            .then(jsonArr => {
                const postsWithDate = jsonArr.map(post => ({...post, date: (formatDateString(new Date()))}));
                setPostsArr(postsWithDate);
            })
    }, []);


    const addPost = (newPost) => {
        setPostsArr([newPost, ...postsArr]);
    }

    const removePost = (postId) => {
        setPostsArr(postsArr.filter((post) => post.id !== postId));
    }

    // const getPostIndex = (postId) => {
    //     console.log('@postIndex/!postsArr', postsArr);
    //     postsArr.findIndex(post => post.id === Number(postId));
    // }

    const getPostById = (postId) => {
        return postsArr.find(post => post.id.toString() === postId);
    }

    function formatDateString(date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();

        return `${year}-${month}-${day}`;
    }


    const postsProviderValues = {
        postsArr,
        setPostsArr,
        addPost,
        removePost,
        getPostById,
        formatDateString
    };


    return (
        <PostsContext.Provider value={postsProviderValues}>
            {children}
        </PostsContext.Provider>
    )
}

