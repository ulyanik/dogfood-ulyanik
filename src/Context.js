import React from "react"
import { useHook } from "./components/castomHook/useHook"

export const Context = React.createContext()

export const ContextProvider = ({ children }) => {
const { user, setUser, modalActive, setModalActive, token, setToken, api, setApi, product, setProduct, setFilteredProducts, filteredProducts} = useHook()

return (
    <Context.Provider value={{
    user, setUser, modalActive, setModalActive, token, setToken, api, setApi, product, setProduct, setFilteredProducts, filteredProducts
    }}
    >
        {children}
    </Context.Provider>
)
}
