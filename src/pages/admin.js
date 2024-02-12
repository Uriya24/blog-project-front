import {AddPost} from "../components/add_post"
import {useContext} from "react";
import {UserContext} from "../providers/user_provider";

export function Admin() {
    const {user} = useContext(UserContext);

    if (!user) {
        return <p className="text-center text-red-500 text-2xl mt-3">You must sign in as admin!</p>
    }

    if (user && !user.admin) {
        return <p className="text-center text-red-500 text-2xl mt-3">You must sign in as admin!</p>
    }

    return (
        <div className="container mx-auto p-4 my-2 text-center w-full max-w-md">
            <h3 className="mb-12 text-3xl font-light">Admin page</h3>
            <AddPost/>
        </div>
    )
}