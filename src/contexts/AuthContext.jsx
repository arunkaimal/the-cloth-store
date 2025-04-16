import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await fetch(
        `http://localhost:5000/users?email=${email}&password=${password}`
      );

      const data = await response.json();
      if (data.length > 0) {
        setIsLoggedIn(true);
        setUser(data[0]);
        return { success: true };
      } else {
        return { success: false, message: "Invalid Credentials" };
      }
    } catch (error) {
      return { success: false, message: "Network error" };
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
