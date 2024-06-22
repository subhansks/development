"use client";

import { createContext, useEffect, useState } from "react";

export const Context = createContext<any | null>(null);

export const Wrapper = ({ children }: any) => {
    const [isGrid, setIsGrid] = useState(false);

    return (
        <Context.Provider
            value={{
                isGrid, setIsGrid
            }}
        >

            {children}

        </Context.Provider>
    );
};