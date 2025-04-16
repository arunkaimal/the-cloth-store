import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const respone = await fetch(
        `http://localhost:5000/users?email=${form.email}`
      );
      const existingUsers = await respone.json();

      if (existingUsers.length > 0) {
        setMessage("Email already registered");
        return;
      }

      const regResponse = await fetch(`http://localhost:5000/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
      });

      if (regResponse.ok) {
        setMessage("Resgistration Successful...");
        // setTimeout(() => navigate("/login"), 4000);
        navigate("/login")
      } else {
        setMessage("Something went wrong,Please try again later...");
      }
    } catch (error) {
      console.error("Registration Error:", error);
      setMessage("Server Error, please try again later...");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h2>

        {message && (
          <div className="text-center mb-4 text-red-600 font-medium">
            {message}
          </div>
        )}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="name"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your full name"
              value={form.name}
              name="name"
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              name="email"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              value={form.password}
              onChange={handleChange}
              name="password"
              type="password"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter a strong password"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <input
              id="confirm-password"
              value={form.confirmPassword}
              onChange={handleChange}
              name="confirmPassword"
              type="password"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Re-enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 cursor-pointer transition duration-300"
          >
            Register
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-indigo-600 font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
