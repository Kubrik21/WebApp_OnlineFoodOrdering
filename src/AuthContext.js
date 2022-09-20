import React, { useState, useContext } from 'react'

const AuthContext = React.createContext()
const AuthChangeContext = React.createContext()

export function useAuth(){return useContext(AuthContext)}
export function useAuthChange(params){return useContext(AuthChangeContext)}


export function AuthProvider({ children }) {
    const [auth, setAuth] = useState(false);
  

    function changeAuth(params) {
      setAuth(params)
    }

    return (
        <AuthContext.Provider value={auth}>
            <AuthChangeContext.Provider value={changeAuth}>   
               {children}  
            </AuthChangeContext.Provider>
        </AuthContext.Provider>
    )
}
