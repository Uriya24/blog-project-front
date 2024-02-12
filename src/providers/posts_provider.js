import {createContext, useState} from "react";
import axios from 'axios';


// Creating a context for managing the posts
export const PostsContext = createContext(null);

export function PostsProvider({children}) {
    const numberOfPostsInPage = 2;
    const [memoryPosts, setMemoryPosts] = useState([]);
    const [displayPostsEnd, setDisplayPostsEnd] = useState(numberOfPostsInPage);
    const [totalNumberOfPosts, setTotalNumberOfPosts] = useState(0);



    const fetchPosts = async (from = undefined, to = undefined, filterText = "") => {
        let apiUrl = 'http://localhost:4000/api/posts';

        if (from !== undefined && to !== undefined) {
            apiUrl += `?from=${from}&to=${to}`;
        } else if (filterText !== "") {
            apiUrl += `?filterText=${filterText}`;
        }

        try {
            const response = await axios.get(apiUrl);
            const posts = await response.data;
            posts.forEach(post => {
                const date = new Date(post.date);
                post.date = formatDateString(date);
            })
            return posts;
        } catch (error) {
            console.error("Error fetching posts from the server:", error);
            alert("There was an error while fetching posts from the server");
        }
    }


    const addPost = async (post) => {
        try {
            const response = await axios.post('http://localhost:4000/api/posts', post, {withCredentials: true});
            alert(response.data.message);
        } catch (error) {
            console.error("Error adding post:", error);
        }
    }


    const removePost = async (postId) => {
        try {
            const response = await axios.delete(`http://localhost:4000/api/posts/${postId}`, {withCredentials: true});
            const fetchedPosts = await fetchPosts(0, numberOfPostsInPage);
            setMemoryPosts(fetchedPosts);
            setDisplayPostsEnd(numberOfPostsInPage);
            setTotalNumberOfPosts(totalNumberOfPosts - 1);
            alert(response.data.message);
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    }


    const updatePost = async (updatedPost) => {
        try {
            const response = await axios.put(`http://localhost:4000/api/posts/${updatedPost.id}`, updatedPost, {withCredentials: true});
            alert(response.data.message);
        } catch (error) {
            console.error("Error updating post:", error);
        }
    };


    const getPost = async (postId) => {
        try {
            const response = await axios.get(`http://localhost:4000/api/posts/${postId}`);
            const post = response.data;
            const date = new Date(post.date);
            post.date = formatDateString(date);
            return post;
        } catch (error) {
            console.error("Error fetching post:", error);
        }
    };

    const getNumberOfPosts = async () => {
        try {
            const response = await axios.post('http://localhost:4000/api/posts/count');
            return response.data.numberOfPosts;
        } catch (error) {
            console.error("Error fetching number of posts:", error);
        }
    }


    const formatDateString = (date) => {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');

        return `${year}-${month}-${day}`;
    };


    // Values to be provided by the posts context
    const postsProviderValues = {
        memoryPosts,
        setMemoryPosts,
        displayPostsEnd,
        setDisplayPostsEnd,
        totalNumberOfPosts,
        setTotalNumberOfPosts,
        numberOfPostsInPage,
        fetchPosts,
        addPost,
        removePost,
        updatePost,
        getPost,
        getNumberOfPosts,
        formatDateString
    };


    return (
        <PostsContext.Provider value={postsProviderValues}>
            {children}
        </PostsContext.Provider>
    )
}

