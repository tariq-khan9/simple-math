import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error, loginUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser({ email, password });
      navigate("/dashboard"); // Redirect after successful login
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <div className="mt-24 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="sm:min-w-[500px] border-2 border-gray-200 rounded-md px-4 sm:px-10"
      >
        <div className="flex justify-center">
          <h2 className="form-heading">Login</h2>
        </div>
        {error && <div className="error-message">{error}</div>}
        <div className="flex flex-col w-full">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>

          <div className="mt-4 mb-8 h-10 w-full">
            <button type="submit" disabled={loading} className="form-button">
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
          <button onClick={() => navigate("/register")}>
            dont have account? register here!
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
