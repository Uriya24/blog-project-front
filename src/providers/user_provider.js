import {createContext, useState} from "react";
import {useGoogleLogin} from '@react-oauth/google';
import {googleLogout} from '@react-oauth/google';
import axios from 'axios';


// Creating a context for managing the user states. for now only to display admin properties if signed in
export const UserContext = createContext(null);

export function UserProvider({children}) {
    const [user, setUser] = useState(null);

    // Auth code flow
    const login = useGoogleLogin({
        flow: 'auth-code',
        onSuccess: async (codeResponse) => {
            console.log("codeResponse: ",codeResponse);
            const addUserResponse = await axios.post(
                'http://localhost:4000/api/users', {code: codeResponse.code,}, {withCredentials: true});
            console.log("addUserResponse: ",addUserResponse);
            setUser(addUserResponse.data.user);
        },
        onError: errorResponse => console.log("google error:" ,errorResponse),
    });

    // implicit flow
    // const login = useGoogleLogin({
    //     onSuccess: async (tokenResponse) => {
    //         try {
    //             console.log(tokenResponse)
    //             const userInfo = await axios.get(
    //                 'https://www.googleapis.com/oauth2/v3/userinfo',
    //                 {headers: {Authorization: `Bearer ${tokenResponse.access_token}`}},
    //             );
    //             console.log(userInfo);
    //             setUser(userInfo.data);
    //             await addUserToDB(userInfo.data);
    //
    //         } catch (error) {
    //             console.error('Error during login:', error);
    //         }
    //     },
    //     onError: errorResponse => console.error('Google sign-in failed', errorResponse),
    // });


    // const addUserToDB = async (user) => {
    //     try {
    //         await axios.post('http://localhost:4000/api/users', user);
    //     } catch (error) {
    //         console.error("Error adding user:", error);
    //     }
    // }

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
