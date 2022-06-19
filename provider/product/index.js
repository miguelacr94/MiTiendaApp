import ClientContext from "./context";



export default function Provider({ children }) {
    return (
        <>
            <ClientContext>
                {children}
            </ClientContext>

        </>
    )
}