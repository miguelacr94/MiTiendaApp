import { createContext, useState } from "react";

export const Context = createContext(null)

export default function ClientContext({ children }) {
    const [loading, setLoading] = useState(true);
    const [client, setClient] = useState(null);





    return (
        <Context.Provider value={{ cart, setCart }} >
             {children}
        </Context.Provider>
    )
}