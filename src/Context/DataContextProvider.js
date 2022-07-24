import React, { createContext, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
    const [state, setState] = useState({
        darkMode: true,
        language: "FA",
    });

    return (
        <DataContext.Provider value={{ state, setState }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContextProvider;
