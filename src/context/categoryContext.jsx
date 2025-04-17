import { createContext, useState } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
    const [categorySet, setCategorySet] = useState("all");

    return (
        <CategoryContext.Provider value={{ categorySet, setCategorySet }}>
            {children}
        </CategoryContext.Provider>
    );
};