import {PostsContext} from "../providers/posts_provider";
import {useContext} from "react";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

export function AddPost() {
    const {addPost} = useContext(PostsContext);
    const {register, handleSubmit, formState} = useForm();
    const navigate = useNavigate()


    const handleNewPostSubmit = (data) => {
        // Add a new post using the addPost function from PostContext with a generated ID from uuid libary
        addPost({
            title: data.title,
            content: data.content,
            date: data.date,
        })

        // Navigate to the '/posts' page after adding the new post using the navigate function from react-router-dom
        navigate("/posts");
    }


    return (<div>
            <form className="text-black flex flex-col" onSubmit={handleSubmit(handleNewPostSubmit)}>
                {formState.errors.title &&
                    <span className="text-start text-red-600">{formState.errors.title.message}</span>}
                <input className="mb-4 px-1 border-2 rounded placeholder-black bg-gray-400"
                       type="text" placeholder="Post title" {...register('title', {
                    required: "Title is required",
                    minLength: {value: 3, message: "Title must be at least 3 characters long"},
                })}/>
                {formState.errors.content &&
                    <span className="text-start text-red-600">{formState.errors.contnet.message}</span>}
                <textarea className="mb-10 h-40 px-1 border-2 rounded placeholder-black bg-gray-400"
                          placeholder="Post content" {...register('content', {required: "Content is required",})}
                ></textarea>
                {formState.errors.date && (
                    <span className="text-start text-red-600">{formState.errors.date.message}</span>)}
                <input
                    className="mb-4 px-1 border-2 rounded placeholder-black bg-gray-400"
                    type="date"
                    {...register('date', {required: "Date is required",})}
                />
                <button
                    className="px-4 py-1 font-semibold border-2 text-white bg-blue-900 rounded-lg hover:bg-blue-950"
                    type="submit">Create Post
                </button>
            </form>
        </div>)
}