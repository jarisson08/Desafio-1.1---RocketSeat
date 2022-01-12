import { createContext, useContext } from "react";

const MovieContext = createContext

export function useMovie(){
    const context = useContext(MovieContext);

    return context
}