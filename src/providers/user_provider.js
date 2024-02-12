import {createContext, useState} from "react";
import {useGoogleLogin} from '@react-oauth/google';
import {googleLogout} from '@react-oauth/google';
import axios from 'axios';


// Creating a context for managing the user states. for now only to display admin properties if signed in
export const UserContext = createContext(null);

export function UserProvider({children}) {
    const [user, setUser] = useState(null);

    // getting a code from google and sending it to the server to get the user data
    const login = useGoogleLogin({
        flow: 'auth-code',
        onSuccess: async (codeResponse) => {
            const userResponse = await axios.post(
                'http://localhost:4000/api/users', {code: codeResponse.code,}, {withCredentials: true});
            setUser(userResponse.data.user);
        },
        onError: errorResponse => console.log("google error:" ,errorResponse),
    });

    // logging out from the server and from google and sending request to the server to delete the cookie with the jwt token of the user data
    const logout = async () => {
        googleLogout();
        const logOutRes = await axios.delete('http://localhost:4000/api/users', {withCredentials: true});
        setUser(null);
        alert(logOutRes.data);
    }

    // Values to be provided by the user context
    const userProviderValues = {
        user, login, logout
    }

    return (
        <UserContext.Provider value={userProviderValues}>
            {children}
        </UserContext.Provider>
    )
}
