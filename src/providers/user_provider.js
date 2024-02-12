import {createContext, useState} from "react";
import {useGoogleLogin} from '@react-oauth/google';
import {googleLogout} from '@react-oauth/google';
import axios from 'axios';


// Creating a context for managing the user states. for now only to display admin properties if signed in
export const UserContext = createContext(null);

export function UserProvider({children}) {
    const [user, setUser] = useState(null);


    const login = useGoogleLogin({
        flow: 'auth-code',
        onSuccess: async (codeResponse) => {
            const addUserResponse = await axios.post(
                'http://localhost:4000/api/users', {code: codeResponse.code,}, {withCredentials: true});
            setUser(addUserResponse.data.user);
        },
        onError: errorResponse => console.log("google error:" ,errorResponse),
    });


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
