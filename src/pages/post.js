import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {PostsContext} from "../providers/posts_provider";

export function Post() {
    const {id} = useParams();
    const {getPost} = useContext(PostsContext);
    const [post, setPost] = useState();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const postById = await getPost(id);
                setPost(postById);
                console.log(postById.date)
            } catch (error) {
                console.error("Error fetching post:", error);
            }
        };

        fetchPost();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);


    return (
        <div className="flex flex-col justify-center items-center">
            {post ? (
                <div className="mx-2 my-2 max-w-xl 2xl:max-w-3xl">
                    <span className="text-sm">{post.date.split("-").reverse().join("/")}</span>
                    <h1 className="text-5xl my-3 2xl:text-6xl">{post.title}</h1>
                    <p className="text-2xl 2xl:text-3xl">
                        {post.content}
                    </p>
                </div>
            ) : (
                <div>
                    <span>Loading...</span>
                </div>
            )}
        </div>
    )
}