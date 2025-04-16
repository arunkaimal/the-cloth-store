import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    const res = await login(form.email, form.password);
    if (res.success) {
      setMessage("Login successful... Redirecting");
      setTimeout(() => navigate("/"), 2000);
    } else {
      setMessage(res.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        {message && (
          <div
            className={`text-center mb-4 font-medium ${
              message.includes("successful") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </div>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your password"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition duration-300 ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div>
          <p className="text-center mt-8 text-gray-500">If not registered yet 
            <Link to={"/register"} className="text-blue-600"> Register</Link> here
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
