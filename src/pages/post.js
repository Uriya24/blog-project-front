import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export function Post() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(json => setPost(json))
    }, []);

    return (
        <div>
            {post ? (
                <div>
                    <h1>{post.title}</h1>
                    <p>
                        {post.body}
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