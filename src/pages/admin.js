import {AddPost} from "../components/add_post"
import {RemovePost} from "../components/remove_post";
import {useContext} from "react";
import {UserContext} from "../providers/user_provider";

export function Admin() {
    const {user} = useContext(UserContext);

    if(!user) {
        return <p>You must sign in first!</p>
    }


    return (
        <div className="container mx-auto p-4 my-6 text-center w-full max-w-md">
            <h3 className="mb-12 text-3xl font-bold">Admin page</h3>
            <AddPost/>
            <RemovePost/>
        </div>
    )
}