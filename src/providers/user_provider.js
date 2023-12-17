import {createContext, useState} from "react";
export const UserContext = createContext(null);

export function UserProvider({children}) {
    const [user, setUser] = useState(null);

    const signIn = ({ userName, password }) => {
        // check if valid
        setUser({ userName: "Uriya", password: 1312})
    }

    const signOut = () => {
        setUser(null);
    }

    const value = {
        user, signIn, signOut
    }

    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
