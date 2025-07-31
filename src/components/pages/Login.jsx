import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  const validatePhone = (phone) => {
    const regex = /^\+254\d{9}$/;
    return regex.test(phone);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validatePhone(phone)) {
      setError("Please enter a valid phone number starting with +254");
      return;
    }

    if (phone === "+254712345678") {
      login();
      navigate("/main");
    } else {
      setError("Invalid phone number");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md rounded-xl p-6 w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center pb-4 border-b border-gray-400">
          Login Now
        </h2>

        <label className="block mb-2 text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="text"
          data-testid = 'number'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+254712345678"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <button
          type="submit"
          data-testid = 'login-btn'
          className="mt-4 w-full bg-blue-500 hover:bg-blue-600 cursor-pointer duration-300 text-white font-semibold py-2 px-4 rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;