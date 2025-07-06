// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserFromSession = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/session`, {
          credentials: "include",
        });

        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error("Failed to fetch user from session", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUserFromSession();
    console.log("user in context ", user);
  }, []);

  useEffect(() => {
    console.log("Frontend cookie:", document.cookie);
  }, [user]);

  // Local login
  const login = async (email, password) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/login-local`,
        { email, password },
        { withCredentials: true }
      );
      setUser(res.data.user);
      // localStorage.setItem("user", JSON.stringify(res.data.user));
    } catch (error) {
      throw new Error("Invalid username or password");
    }
  };

  // Logout
  const logout = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/logout`,
        {},
        { withCredentials: true }
      );
      if (response.status === 200) {
        setUser(null); // Clear user data after successful logout

        // Redirect to the home page
        // window.location.href = "/login";
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
