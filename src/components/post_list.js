import {PostCard} from "../components/post_card"

export function PostList({postsList}) {
    return (
        <div>
            {/*<h3>Posts list</h3>*/}
            {postsList.map((post) => <PostCard singlePost={post} />)}
        </div>
    )
}
