import {PostForm} from "../components/post_form"

export function Admin({addPostFunc}) {
    return (
        <div>
            <h3>Admin page</h3>
            <p>Here you can handle posts</p>
            <PostForm addPostFunc={addPostFunc}/>
        </div>
    )
}