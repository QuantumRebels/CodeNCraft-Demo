import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";
const Signup = () => {
  const [FName, setFName] = useState("");
  const [LName, setLName] = useState("");
  const [Email, setEmail] = useState("");
  const [CPassword, setCPassword] = useState("");
  const [password, setpassword] = useState("");
  const [Phone, setPhone] = useState("")

  const [error, seterror] = useState("");

  const [Loader, setLoader] = useState(false);

  const navigate = useNavigate();

  const handleSubmit =  (e) => {
    e.preventDefault()
    const Username=FName+" "+LName
    try {
      axios.post(`${import.meta.env.VITE_DEV_URL}users/signup`,{Username,Email,password}) // replace https://craftncode.onrender.com/ in place of import.meta.env.VITE_DEV_URL
      .then(res=>{
        console.log(res)
        alert("User Registered Successfully")
        window.localStorage.setItem("Username",FName)
        navigate("/")
      })
    } catch (error) {
      seterror("Failed to register. Please try again later.")
    }
  }

  return (
    <div className="min-h-screen register-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <form
        className="max-w-md w-full space-y-8 register-login p-8 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="text-center">
          <h2 className=" text-4xl justify-center font-semibold align-middle items-center text-[#15B392]">
            Register
          </h2>
          <p className="mt-2 mb-2 p-2 text-xm text-[#1A1A1B]">
            Signup now and get full access to our app.
          </p>
        </div>

        {/* Name Fields */}
        <div className="grid grid-cols-2 gap-4">
          {/* First Name */}
          <div className="relative">
            <input
              type="text"
              name="firstName"
              value={FName}
              onChange={(e) => setFName(e.target.value)}
              className={`peer w-full text-black border-b-2 form-border border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-gray-400  focus:outline-none`}
              placeholder="First name"
            />
            <label className="pointer-events-none absolute left-1 top-1 origin-left -translate-y-6 scale-75 transform text-[#1A1A1B] duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#15B392]">
              Firstname
            </label>
          </div>

          {/* Last Name */}
          <div className="relative">
            <input
              type="text"
              name="lastName"
              value={LName}
              onChange={(e) => setLName(e.target.value)}
              className={`peer w-full text-black border-b-2 form-border border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-gray-400 focus:outline-none `}
              placeholder="Last name"
            />
            <label className="pointer-events-none absolute left-1 top-1 origin-left -translate-y-6 scale-75 transform text-[#1A1A1B] duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#15B392]">
              Lastname
            </label>
          </div>
        </div>

        {/* Email Field */}
        <div className="relative">
          <input
            type="email"
            name="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            className={`peer w-full text-black border-b-2 form-border border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-gray-400 focus:outline-none `}
            placeholder="Email"
          />
          <label className="pointer-events-none absolute left-1 top-1 origin-left -translate-y-6 scale-75 transform text-[#1A1A1B] duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#15B392]">
            Email
          </label>
        </div>
        {/* Phone Field */}
        <div className="relative">
          <input
            type="number"
            name="Phone"
            value={Phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`peer w-full text-black border-b-2 form-border border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-gray-400 focus:outline-none  `}
            placeholder="Phone number"
          />
          <label className="pointer-events-none absolute left-1 top-1 origin-left -translate-y-6 scale-75 transform text-[#1A1A1B] duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#15B392] ">
            Phone no.
          </label>
        </div>

        {/* Password Field */}
        <div className="relative">
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className={`peer w-full text-black border-b-2 form-border border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-gray-400 focus:outline-none `}
            placeholder="Password"
          />
          <label className="pointer-events-none absolute left-1 top-1 origin-left -translate-y-6 scale-75 transform text-[#1A1A1B] duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#15B392] form-border">
            Password
          </label>
        </div>

        {/* Confirm Password Field */}
        <div className="relative">
          <input
            type="password"
            name="confirmPassword"
            value={CPassword}
            onChange={(e) => setCPassword(e.target.value)}
            className={`peer form-border text-black w-full border-b-2 border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-gray-400 focus:outline-none `}
            placeholder="Confirm password"
          />
          <label className="pointer-events-none absolute left-1 top-1 origin-left -translate-y-6 scale-75 transform text-[#1A1A1B] duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#15B392]">
            Confirm password
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={Loader === true}
          className="w-full transform rounded-lg bg-[#15B392] px-3 py-3 text-xl font-medium text-white transition-colors hover:bg-[#15B392] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {Loader ? <span>Submitting</span> : <span>Submit</span>}
        </button>
        <div className="text-center">
          <span className="text-red-600 text-xs uppercase">{error}</span>
        </div>

        {/* Sign In Link */}
        <p className="text-center text-sm text-[#1A1A1B]">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium text-[#15B392] hover:text-[#15B392]"
          >
            Sign in
          </a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
