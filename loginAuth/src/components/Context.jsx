import { createContext, useState } from 'react'

export const AuthContext = createContext();

function CustomProvider({ children }){
    const [isloggedin, setLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");
    return(
        <AuthContext.Provider value={{isloggedin, setLoggedIn, userName, setUserName}}>
          {children}
        </AuthContext.Provider>
    )
}

export default CustomProvider;