"use client"

import React, { createContext, useContext, useState } from 'react';

interface TokenContextType {
    token: string;
    setToken: any;
}
export const TokenContext = createContext<TokenContextType | undefined>(undefined) || null;

export const TokenProvider = ({ children }: any) => {
    const [token, setToken] = useState('');

    return (
        <TokenContext.Provider value={{ token, setToken }}>
            {children}
        </TokenContext.Provider>
    );
};

export const useToken = () => {
    const context = useContext(TokenContext);
    if (!context) {
        throw new Error('useToken must be used within a TokenProvider');
    }
    return context;
};