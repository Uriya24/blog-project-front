import {createContext, useEffect, useState} from "react";
import axios from 'axios';


// Creating a context for managing the posts
export const PostsContext = createContext(null);

export function PostsProvider({children}) {
    const [postsArr, setPostsArr] = useState([]);

    useEffect(() => {
        fetchPosts();
        // eslint-disable-next-line
    }, []);


    const fetchPosts = async () => {
        try {
            const response = await axios.get('/api/posts');
            const posts = await response.data;
            posts.forEach(post => {
                const date = new Date(post.date);
                post.date = formatDateString(date);
            })
            setPostsArr(posts);
        } catch (error) {
            console.error("Error fetching posts from the server:", error);
            alert("There was an error while fetching posts from the server");
        }
    }


    const addPost = async (post) => {
        try {
            await axios.post('/api/posts', post);
            await fetchPosts();
            alert("Post created");
        } catch (error) {
            console.error("Error adding post:", error);
        }
    }


    const removePost = async (postId) => {
        try {
            await axios.delete(`/api/posts/${postId}`);
            await fetchPosts();
            alert("Post deleted");
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    }


    const updatePost = async (updatedPost) => {
        try {
            await axios.put(`/api/posts/${updatedPost.id}`, updatedPost);
            await fetchPosts();
            alert("Post updated");
        } catch (error) {
            console.error("Error updating post:", error);
        }
    };


    const getPostById = (postId) => {
        return postsArr.find(post => post.id.toString() === postId);
    }

    const formatDateString = (date) => {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');

        return `${year}-${month}-${day}`;
    };


    // Values to be provided by the posts context
    const postsProviderValues = {
        postsArr,
        setPostsArr,
        addPost,
        removePost,
        updatePost,
        getPostById,
        formatDateString
    };


    return (
        <PostsContext.Provider value={postsProviderValues}>
            {children}
        </PostsContext.Provider>
    )
}

