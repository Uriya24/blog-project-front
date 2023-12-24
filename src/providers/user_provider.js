import {createContext, useState} from "react";

// Creating a context for managing the user states. for now only to display admin properties if signed in
export const UserContext = createContext(null);

export function UserProvider({children}) {
    const [user, setUser] = useState(null);

    const signIn = ({ userName, password }) => {
        // For the example, hardcoded user credentials
        setUser({ userName: "Uriya", password: 1312})
    }

    const signOut = () => {
        setUser(null);
    }

    // Values to be provided by the user context
    const userProviderValues = {
        user, signIn, signOut
    }

    return(
        <UserContext.Provider value={userProviderValues}>
            {children}
        </UserContext.Provider>
    )
}
