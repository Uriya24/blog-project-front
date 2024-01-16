import {createContext, useEffect, useState} from "react";

// Creating a context for managing the posts
export const PostsContext = createContext(null);

export function PostsProvider({children}) {
    const [postsArr, setPostsArr] = useState([]);

    const fetchPosts = async () => {
        try {
            const response = await fetch('/api/posts');
            const posts = await response.json();
            posts.forEach(post => {
                // const date = new Date(post.date);
                // post.date = formatDateString(date);
                post.date = post.date.split('T')[0];
            });
            setPostsArr(posts);
        } catch {
            alert("there was an error while fetching posts from the server");
        }
    }


    useEffect(() => {
        fetchPosts();
    }, []);


    const addPost = (post) => {
        if (post.date) {
            console.log(post.date)
            const dateObj = new Date(post.date)
            dateObj.setDate(dateObj.getDate() + 1);
            post.date = dateObj.toJSON().split('T')[0]
        }
        const newPost = {
            "title": post.title,
            "content": post.content,
            "date": post.date,
        };

        fetch('/api/posts', {
            method: "POST",
            body: JSON.stringify(newPost),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(() => {
            alert("post created");
            fetchPosts();
        })
    }


    const removePost = (postId) => {

        fetch(`/api/posts/${postId}`, {
            method: "DELETE",
        }).then(() => {
            alert("post deleted");
            fetchPosts();
        })
    }


    const updatePost = (updatedPost) => {

        fetch(`/api/posts/${updatedPost.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedPost)
        })
            .then(response => {
                if (response.ok) {
                    const updatedPosts = postsArr.map(post =>
                        post.id === updatedPost.id ? updatedPost : post
                    );
                    setPostsArr(updatedPosts);
                    alert("post updated");
                }
            })
            .catch(error => {
                console.log(error);
            });

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

