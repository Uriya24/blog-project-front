export function PostForm({addPostFunc}) {
    const handleNewPostSubmit = (event) => {
        event.preventDefault();

        const {title, content, picture} = event.target.elements;

        addPostFunc({
            title: title.value,
            content: content.value,
            picture: picture.value
        })
    }

    return (
        <div>
            <form onSubmit={handleNewPostSubmit}>
                <label htmlFor="title">Post Title</label>
                <input id="title" name="title" type="text" /><br/><br/>
                <label htmlFor="content">Post Content</label>
                <textarea id="content" name="content"></textarea><br/>
                <label htmlFor="picture">Add picture</label>
                <input id="picture" name="picture" type="file"/><br/>
                <button type="submit">Create Post</button>
            </form>
        </div>
    )
}