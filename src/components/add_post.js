import {PostsContext} from "../providers/posts_provider";
import {useContext} from "react";
import {useForm} from "react-hook-form";
import {v4 as uuidv4} from 'uuid';
import {useNavigate} from "react-router-dom";

export function AddPost() {
    const {addPost} = useContext(PostsContext);
    const {register, handleSubmit, formState} = useForm();
    const navigate = useNavigate()


    const handleNewPostSubmit = (data) => {
        addPost({
            id: uuidv4(),
            title: data.title,
            body: data.body,
            date: data.date,
        })

        navigate("/posts");
    }


    return (
        <div>
            <form className="text-black flex flex-col" onSubmit={handleSubmit(handleNewPostSubmit)}>
                {formState.errors.title &&
                    <span className="text-start text-red-600">{formState.errors.title.message}</span>}
                <input className="mb-4 px-1 border-2 rounded placeholder-black bg-gray-400"
                       type="text" placeholder="Post title" {...register('title', {
                    required: "This field is required",
                    minLength: {value: 3, message: "Title must be at least 3 characters long"},
                    pattern: {
                        value: /^[A-Za-z'?!,. ]+$/
                        ,
                        message: "Title must contain only English letters"
                    }
                })}
                />
                {formState.errors.body &&
                    <span className="text-start text-red-600">{formState.errors.body.message}</span>}
                <textarea className="mb-10 h-40 px-1 border-2 rounded placeholder-black bg-gray-400"
                          placeholder="Post content" {...register('body', {required: "This field is required",})}
                ></textarea>
                {formState.errors.date && (
                    <span className="text-start text-red-600">{formState.errors.date.message}</span>
                )}
                <input
                    className="mb-4 px-1 border-2 rounded placeholder-black bg-gray-400"
                    type="date"
                    {...register('date', {required: "This field is required",})}
                />
                <button
                    className="px-4 py-1 font-semibold border-2 text-white bg-blue-900 rounded-lg hover:bg-blue-950"
                    type="submit">Create Post
                </button>
            </form>
        </div>
    )
}