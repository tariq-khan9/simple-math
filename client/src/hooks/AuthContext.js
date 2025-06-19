// src/context/AuthContext.js
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";

// Create the context
const AuthContext = createContext();

// Create the provider component
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  // Check authentication status on initial load
  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          setLoading(true);
          const { data } = await axios.get(
            `${process.env.REACT_APP_SERVER_URL}/api/users/current-user`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          setUser(data.user);
        } catch (err) {
          localStorage.removeItem("token");
          setUser(null);
        } finally {
          setLoading(false);
        }
      }
    };

    checkAuthStatus();
  }, []);

  // Register user
  const registerUser = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/users/register/`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      await sendVerificationEmail(formData.get("email"));
      return { success: true, email: formData.get("email") };
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Login user
  const loginUser = async ({ email, password }) => {
    setLoading(true);
    setError(null);

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/users/login/`,
        { email, password }
      );

      localStorage.setItem("token", data.token);
      setUser(data.user);
      return data.user;
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Verify email
  const verifyUserEmail = async (token) => {
    setLoading(true);
    setError(null);

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/users/verify-email/`,
        { authToken: token }
      );
      return data;
    } catch (err) {
      setError(err.response?.data?.message || "Verification failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Resend verification email
  const sendVerificationEmail = async (email) => {
    try {
      await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/users/resend-email/`,
        { email }
      );
      Modal.success({
        title: "Email Sent",
        content: "Verification email has been sent successfully",
      });
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send email");
      throw err;
    }
  };

  // Logout
  const logoutUser = (navigate) => {
    localStorage.removeItem("token");
    setUser(null);
    // navigate("/");
  };

  // Value provided to consumers
  const value = {
    user,
    loading,
    error,
    registerUser,
    loginUser,
    verifyUserEmail,
    sendVerificationEmail,
    logoutUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook for easy access to the context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
