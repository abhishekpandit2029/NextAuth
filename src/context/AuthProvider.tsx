"use client";

import React, { createContext, useContext, useState } from "react";

interface AuthContextType {
  isLogedin: boolean | string;
  setIsLogedin: (value: boolean) => void;
}
export const AuthContext =
  createContext<AuthContextType | undefined>(undefined) || null;

export const AuthProvider = ({ children }: any) => {
  const [isLogedin, setIsLogedin] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ isLogedin, setIsLogedin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("isLogedin must be used within a AuthProvider");
  }
  return context;
};
