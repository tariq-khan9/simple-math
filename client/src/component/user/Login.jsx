import React, { useState } from "react";
import { userLogin } from "../../utils/apiCalls";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await userLogin({ email, password });
      console.log(data);
      setToken(data.user.email);
      setEmail("");
      setPassword("");
      localStorage.setItem("token", data.token);
      alert("auth done");
    } catch (err) {
      console.log("uer error", err);
      setError(err.message); // Show error message if something goes wrong
    } finally {
      setLoading(false); // Stop the loading spinner
    }
  };

  return (
    <div className="mt-24  flex justify-center">
      <form
        onSubmit={handleSubmit}
        className=" sm:min-w-[500px] border-2 border-gray-200 rounded-md px-4 sm:px-10"
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
        </div>
      </form>
    </div>
  );
};

export default Login;
