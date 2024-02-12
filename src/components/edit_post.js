import {useContext, useEffect, useState} from "react";
import {PostsContext} from "../providers/posts_provider";
import {useForm} from "react-hook-form";
import {useParams, useNavigate} from "react-router-dom";
import {UserContext} from "../providers/user_provider";

export function EditPost() {
    const navigate = useNavigate()
    const {id} = useParams();
    const {user} = useContext(UserContext);
    const {getPost, updatePost} = useContext(PostsContext);
    const {register, handleSubmit, formState, setValue} = useForm();
    const [initialPost, setInitialPost] = useState();

    useEffect(() => {
        const fetchPostData = async () => {
            try {
                const originalPost = await getPost(id);
                setInitialPost(originalPost)
                // Set the default values for the form fields using setValue
                setValue("title", originalPost.title);
                setValue("content", originalPost.content);
                setValue("date", originalPost.date);
            } catch (error) {
                console.error("Error fetching post data:", error);
            }
        };

        fetchPostData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!user) {
        return <p className="text-center text-red-500 text-2xl mt-3">Only admin can edit posts!</p>
    }

    if (user && !user.admin) {
        return <p className="text-center text-red-500 text-2xl mt-3">Only admin can edit posts!</p>
    }

    const handleEditPostSubmit = (data) => {
        // Creating a post with the same attributes as the original post, but with different title, content and date
        const updatedPost = {
            ...initialPost,
            title: data.title,
            content: data.content,
            date: data.date,
        }

        updatePost(updatedPost);

        // Navigate to the '/posts' page after editing a post using the navigate function from react-router-dom
        navigate("/posts");
    }

    return (<div className="container mx-auto p-4 my-6 text-center w-full max-w-md">
            <h3 className="mb-12 text-3xl font-bold">Edit post</h3>
            <form className="text-black flex flex-col" onSubmit={handleSubmit(handleEditPostSubmit)}>
                {formState.errors.title &&
                    <span className="text-start text-red-600">{formState.errors.title.message}</span>}
                <input className="mb-4 px-1 border-2 rounded placeholder-black bg-gray-400"
                       type="text" placeholder="Post title" {...register('title', {
                    required: "Title is required",
                    minLength: {value: 3, message: "Title must be at least 3 characters long"},
                })}/>
                {formState.errors.content &&
                    <span className="text-start text-red-600">{formState.errors.content.message}</span>}
                <textarea className="mb-10 h-40 px-1 border-2 rounded placeholder-black bg-gray-400"
                          placeholder="Post content" {...register('content', {required: "Content is required",})}>
                </textarea>
                {formState.errors.date && (
                    <span className="text-start text-red-600">{formState.errors.date.message}</span>)}
                <input
                    className="mb-4 px-1 border-2 rounded placeholder-black bg-gray-400"
                    type="date" {...register('date', {required: "Date is required",})}
                />
                <button
                    className="px-4 py-1 font-semibold border-2 text-white bg-blue-900 rounded-lg hover:bg-blue-950"
                    type="submit">Submit Post
                </button>
            </form>
        </div>)
}