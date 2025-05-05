// Register.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/AuthContext";
import axios from "axios";
import { Modal } from "antd";

const Register = () => {
  const navigate = useNavigate();
  const {
    register: register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { loading, error, user, registerUser, sendVerificationEmail } =
    useAuth();
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState();
  const [success, setSuccess] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState("");
  console.log("user in register ", user);
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    if (imageFile) formData.append("image", imageFile);

    try {
      const result = await registerUser(formData);
      setRegisteredEmail(result.email);
      setSuccess(true);
    } catch (err) {
      console.error("Registration error:", err);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) setImageFile(file);
  };

  if (success) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <div className="text-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-green-500 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="text-2xl font-bold text-gray-800 mt-4">
              Registration Complete!
            </h2>
          </div>

          <div className="text-gray-600 mb-6">
            <p className="mb-4">
              A verification email has been sent to{" "}
              <span className="font-semibold">{}</span>.
            </p>
            <p className="mb-4">
              Please click the verification link within 24 hours to complete
              your registration.
            </p>
            <p>
              Didn't receive the email? Check your spam folder or{" "}
              <button
                className="text-blue-600 hover:underline"
                onClick={() => sendVerificationEmail(registeredEmail)}
              >
                resend verification email
              </button>
              .
            </p>
          </div>

          <button
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
            onClick={() => navigate("/login")}
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-24  flex justify-center">
      <form
        className="border-2 border-gray-200 rounded-md px-4 sm:px-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-center">
          <label className="form-heading ">Register here.</label>
        </div>

        <div className="flex flex-col sm:flex-row sm:space-x-10 w-full">
          <div>
            <div>
              <label className="form-label">Name</label>
              <input
                className="form-input"
                {...register("name", { required: "Name is required" })}
              />
              <div className="h-4">
                {errors.name && (
                  <span className="error-msg">{errors.name.message}</span>
                )}
              </div>
            </div>

            <div>
              <label className="form-label">Email</label>
              <input
                className="form-input"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Invalid email format",
                  },
                })}
              />
              <div className="h-4">
                {errors.email && (
                  <span className="error-msg">{errors.email.message}</span>
                )}
              </div>
            </div>

            <div>
              <label className="form-label">Password</label>
              <input
                className="form-input"
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              <div className="h-4">
                {errors.password && (
                  <span className="error-msg">{errors.password.message}</span>
                )}
              </div>
            </div>

            <div>
              <label className="form-label">Confirm Password</label>
              <input
                className="form-input"
                type="password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
              />
              <div className="h-4">
                {errors.confirmPassword && (
                  <span className="error-msg">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div>
            <div className="mt-6">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Profile Preview"
                  height={120}
                  width={120}
                />
              ) : (
                <div className="h-32 w-32 text-slate-400  bg-slate-50 flex justify-center items-center">
                  Profile Image
                </div>
              )}
              <label className="form-label">Profile Image (optional)</label>
              <div className="flex flex-col">
                <input
                  type="file"
                  accept="image/*"
                  className="text-[12px] mt-2"
                  onChange={handleImageUpload}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-8 h-10">
          <button className="form-button" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
