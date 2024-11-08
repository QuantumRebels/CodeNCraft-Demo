import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setrememberMe] = useState(false);
  const [userRole, setuserRole] = useState(""); // Added user role state
  const [Error, setError] = useState("");
  const [Loader, setLoader] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setLoader(true);
      axios
        .post(`${import.meta.env.VITE_DEV_URL}users/login`, {
          Email,
          Password,
          userRole,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.message === "Success") {
            setLoader(false);
            alert("Login Successful");
            window.localStorage.setItem("Username", res.data.user.Name);
            navigate("/");
          } else {
            setError(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
          setLoader(false);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-6 rounded-lg form-login p-8 shadow-lg"
      >
        <h1 className="text-4xl p-2 mb-4 font-bold text-center align-middle items-center text-[#3C552D] font-semibold">
          Login
        </h1>

            {/* User Role Selection */}
            <div className="space-y-2">
          <label className="text-sm font-medium text-[#A1A1D]">User Role</label>
          <select
            value={userRole}
            onChange={(e) => setuserRole(e.target.value)}
            className="w-full text-gray-400 rounded-md border border-gray-300 py-2 px-3"
          >
            <option value="" disabled>Select Role</option>
            <option value="Admin" >Admin</option>
            <option value="User">User</option>
            <option value="Inventory">Inventory Manager</option>
          </select>
        </div>

        {/* Email Input */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#1A1A1D]">Email</label>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-[#1A1A1B] rounded-md border border-gray-300 p-2 focus:border-[#15B392] focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter your Email"
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#1A1A1D]">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full text-black rounded-md border border-gray-300 p-2 focus:border-[#15B392] focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter your Password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center"
            >
              {/* Password visibility icon */}
            </button>
          </div>
        </div>

    

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="rememberMe"
              checked={rememberMe}
              onChange={(e) => setrememberMe(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-[#1A1AD] focus:ring-blue-500"
            />
            <label className="ml-2 text-sm text-[#1A1A1D]">Remember me</label>
          </div>
          <button type="button" className="text-sm font-medium text-[#3C552D] hover:text-[#1A1A1D]">
            Forgot password?
          </button>
        </div>

        {/* Sign In Button */}
        <button
          disabled={Loader}
          type="submit"
          className="w-full rounded-md bg-[#3C552D] py-2 text-white transition-colors hover:bg-[#3C552D] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {Loader ? <span>Signing in</span> : <span>Sign In</span>}
        </button>
        <div className="text-center">
          <span className="text-red-600 text-xs">{Error}</span>
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-[#1A1A1D]">
          Don't have an account?{" "}
          <a href="/signup" className="font-medium text-[#3C552D] hover:text-blue-500">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
