import {createContext, useEffect, useState} from "react";

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
            const response = await fetch('/api/posts');
            const posts = await response.json();
            console.log([posts])
            posts.forEach(post => {
                const date = new Date(post.date);
                // date.setDate(date.getDate() + 1);
                post.date = formatDateString(date);
                // post.date = post.date.split('T')[0];
                console.log(post.date)
            })
            setPostsArr(posts);
        } catch (error) {
            console.error("Error fetching posts from the server:", error);
            alert("There was an error while fetching posts from the server");
        }
    }


    const addPost = async (post) => {
        try {
            await fetch('/api/posts', {
                method: "POST",
                body: JSON.stringify(post),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            await fetchPosts();
            alert("Post created");
        } catch (error) {
            console.error("Error adding post:", error);
        }
    }


    const removePost = async (postId) => {
        try {
            await fetch(`/api/posts/${postId}`, {
                method: "DELETE",
            });
            await fetchPosts();
            alert("Post deleted");
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    }


    const updatePost = async (updatedPost) => {
        try {
            await fetch(`/api/posts/${updatedPost.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedPost)
            });
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

