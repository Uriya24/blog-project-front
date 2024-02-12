import {useContext, useEffect, useState} from "react";
import {PostsContext} from "../providers/posts_provider";
import {PostCard} from "../components/post_card";
import {PostList} from "../components/post_list";

export function Posts() {
    const {fetchPosts, numberOfPostsInPage, getNumberOfPosts, setMemoryPosts, memoryPosts, setDisplayPostsEnd, displayPostsEnd, setTotalNumberOfPosts, totalNumberOfPosts} = useContext(PostsContext);
    const [searchInputValue, setSearchInputValue] = useState("");
    const [filteredPosts, setFilteredPosts] = useState([]);

    //fetching the first posts and the total number of posts
    useEffect(() => {
        const fetchData = async () => {
            try {
                setDisplayPostsEnd(numberOfPostsInPage);

                const numberOfPosts = await getNumberOfPosts();
                setTotalNumberOfPosts(numberOfPosts);

                const fetchedPosts = await fetchPosts(0, numberOfPostsInPage);
                setMemoryPosts(fetchedPosts);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const handleNextPosts = async () => {
        const from = displayPostsEnd;
        const to = displayPostsEnd + numberOfPostsInPage;

        if (memoryPosts.length < to -1) {
            const nextPosts = await fetchPosts(from, to);
            setMemoryPosts([...memoryPosts, ...nextPosts]);
        }

        setDisplayPostsEnd(to);
    };

    const handleGoBack = () => {
        setDisplayPostsEnd(displayPostsEnd - numberOfPostsInPage)
    }

    const handleSearchInputChange = async (event) => {
        setSearchInputValue(event.target.value);

        try {
            const fetchedPosts = await fetchPosts(undefined, undefined, event.target.value);
            setFilteredPosts(fetchedPosts);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };


    // If the search input is empty we display posts based on the paging indexes, if not we display all posts that included in the search
    const postsToDisplay = searchInputValue === "" ? memoryPosts.slice(displayPostsEnd - numberOfPostsInPage, displayPostsEnd) : filteredPosts;
    const postCards = postsToDisplay.map(post => (
        <PostCard key={post.id} singlePost={post}/>
    ));

    return (
        <div className="flex flex-col justify-center items-center">
            <input className="text-black mt-6 mb-2 px-2 border-2 rounded placeholder-black bg-gray-400"
                   name="search" type="text"
                   placeholder="Search post"
                   onChange={handleSearchInputChange}/>
            <PostList>
                {postCards}
            </PostList>
            {/*if search input is empty show the next and back buttons.
               if there are no more posts to show we don't show next button*/}
            <div className="inline-flex items-center justify-center">
                {searchInputValue === "" && (
                    <>
                        {displayPostsEnd > numberOfPostsInPage && (
                            <button
                                className="m-2 px-3 py-2 text-base font-semibold bg-blue-900 rounded-lg border-2 hover:bg-blue-950"
                                onClick={handleGoBack}>Go Back
                            </button>
                        )}
                        {totalNumberOfPosts > displayPostsEnd && (
                            <button
                                className="m-2 px-3 py-2 text-base font-semibold bg-blue-900 rounded-lg border-2 hover:bg-blue-950"
                                onClick={handleNextPosts}>Next Posts
                            </button>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}