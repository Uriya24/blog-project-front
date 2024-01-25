import {createContext, useState} from "react";
import {useGoogleLogin} from '@react-oauth/google';
import {googleLogout} from '@react-oauth/google';
import axios from 'axios';


// Creating a context for managing the user states. for now only to display admin properties if signed in
export const UserContext = createContext(null);

export function UserProvider({children}) {
    const [user, setUser] = useState(null);


    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            console.log(tokenResponse);
            const userInfo = await axios.get(
                'https://www.googleapis.com/oauth2/v3/userinfo',
                { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } },
            );

            console.log(userInfo);
            setUser(userInfo);
        },
        onError: errorResponse => console.error('Google sign in failed', errorResponse),
    });


    const logout = () => {
        googleLogout();
        setUser(null);
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
