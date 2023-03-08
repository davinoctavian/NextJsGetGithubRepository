'use client'

import { createContext, useContext, useState, useEffect } from "react";

const UsernameContext = createContext({})

export const UsernameContextProvider = ({ children }) => {
    const [username, setUsername] = useState('')

    useEffect(() => {
        const user = localStorage.getItem("username")
        if (user) {
            setUsername(user)
        }
    }, [])

    return (
        <UsernameContext.Provider value={{ username, setUsername }}>
            {children}
        </UsernameContext.Provider>
    )
};

export const useUsernameContext = () => useContext(UsernameContext)