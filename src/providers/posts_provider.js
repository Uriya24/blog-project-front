import {createContext, useEffect, useState} from "react";

// Creating a context for managing the posts
export const PostsContext = createContext(null);

export function PostsProvider({children}) {
    const [postsArr, setPostsArr] = useState([]);

    // Fetching posts data from an external API for the example, using useEffect to fetch them only once
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            // adding a date attribute to each post
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

    const getPostById = (postId) => {
        return postsArr.find(post => post.id.toString() === postId);
    }

    const formatDateString = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();

        return `${year}-${month}-${day}`;
    }

    // Values to be provided by the posts context
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

