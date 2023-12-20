import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {PostsContext} from "../providers/posts_provider";

export function Post() {
    const {id} = useParams();
    const {getPostById} = useContext(PostsContext);
    const post = getPostById(id);

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