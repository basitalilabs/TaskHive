import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../services/api";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/register", {
        name,
        email,
        password,
      });
      const { token, ...userData } = response.data;
      login(userData, token);
      navigate("/dashboard");
    } catch (err) {
      setError("Registration failed");
    }
  };

  return (
    <div className="bg-linear-to-br from-blue-50 to-gray-100 min-h-screen flex items-center justify-center">
      {" "}
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        {" "}
        {/* Title */}{" "}
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          {" "}
          TaskHive Register{" "}
        </h1>{" "}
        {/* Error message */}{" "}
        {error && (
          <p className="text-red-500 text-sm mb-4 text-center font-medium">
            {" "}
            {error}{" "}
          </p>
        )}{" "}
        {/* Form */}{" "}
        <form onSubmit={handleSubmit} className="space-y-5">
          {" "}
          <div>
            {" "}
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              {" "}
              Name{" "}
            </label>{" "}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />{" "}
          </div>{" "}
          <div>
            {" "}
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              {" "}
              Email{" "}
            </label>{" "}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />{" "}
          </div>{" "}
          <div>
            {" "}
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              {" "}
              Password{" "}
            </label>{" "}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />{" "}
          </div>{" "}
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-2 rounded-lg w-full hover:bg-blue-700 transition-colors duration-200"
          >
            {" "}
            Register{" "}
          </button>{" "}
        </form>{" "}
        {/* Divider */}{" "}
        <div className="flex items-center my-6">
          {" "}
          <div className="grow border-t border-gray-300"></div>{" "}
          <span className="px-3 text-sm text-gray-500">or</span>{" "}
          <div className="grow border-t border-gray-300"></div>{" "}
        </div>{" "}
        {/* Login link */}{" "}
        <p className="text-center text-sm text-gray-600">
          {" "}
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-medium hover:underline"
          >
            {" "}
            Login{" "}
          </Link>{" "}
        </p>{" "}
      </div>{" "}
    </div>
  );
};

export default Register;
