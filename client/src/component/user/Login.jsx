import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../utils/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Modal } from "antd";

const Login = () => {
  const navigate = useNavigate();
  const { login, user } = useGlobalContext();
  const { token } = useParams(); // ✅ Get token from URL param

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLocalLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      Modal.error({
        title: "Authentication failed!",
        content:
          "Invalid email or password, please provide a verified email address and correct password.",
        onOk() {},
      });
    }
  };

  return (
    <div className="w-full font-barlow flex flex-row justify-center items-center mt-24">
      <div className="bg-gray-100 rounded-xl md:w-[500px] md:h-[400px] p-4 flex flex-col sm:flex-row justify-center space-y-10 sm:space-y-0">
        <div className=" p-2 md:px-8 w-full">
          <div className="form-heading text-center">Login here!</div>
          <form className="flex flex-col p-4" onSubmit={handleLocalLogin}>
            <label className="form-label">Username</label>
            <input
              className="form-input"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="mt-4 form-label">Password</label>
            <input
              className="form-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex justify-end mt-1 font-montserrat text-[10px] sm:text-[12px] xl:text-[13px]">
              <button
                className="hover:text-gray-500 text-gray-600 "
                onClick={() =>
                  Modal.error({
                    title: "Email Validation Failed",
                    content: "Failed to validate your email. Please try again!",
                  })
                }
              >
                forgot password?
              </button>
            </div>

            <div className="w-full flex flex-row  justify-between mt-6">
              <button className="form-button" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
