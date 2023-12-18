import {PostsContext} from "../providers/posts_provider";
import {useContext} from "react";
import {useForm} from "react-hook-form";

export function AddPost() {
    const {addPost} = useContext(PostsContext);
    const {register, handleSubmit, formState, reset, watch} = useForm();

    function formatDateString(inputDateString) {
        const dateParts = inputDateString.split('-');
        const year = dateParts[0];
        const month = dateParts[1];
        const day = dateParts[2]

        return `${day}/${month}/${year}`;
    }
    const handleNewPostSubmit = (data) => {

        addPost({
            title: data.title,
            body: data.body,
            date: formatDateString(data.postDate),
        })

        reset();
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
                {formState.errors.postDate && (
                    <span className="text-start text-red-600">{formState.errors.postDate.message}</span>
                )}
                <input
                    className="mb-4 px-1 border-2 rounded placeholder-black bg-gray-400"
                    type="date"
                    {...register('postDate', {required: "This field is required",})}
                />
                <button className="px-4 py-1 font-semibold border-2 text-white bg-blue-900 rounded-lg hover:bg-blue-950"
                        type="submit">Create Post
                </button>
            </form>
        </div>
    )
}