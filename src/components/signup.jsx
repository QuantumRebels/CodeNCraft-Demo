import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";
const Signup = () => {

  const currentUser=window.localStorage.getItem('userRole')

  const [FName, setFName] = useState("");
  const [LName, setLName] = useState("");
  const [Email, setEmail] = useState("");
  const [CPassword, setCPassword] = useState("");
  const [password, setpassword] = useState("");
  const [Phone, setPhone] = useState("");
  const [Department, setDepartment] = useState("")

  const [userRole, setuserRole] = useState(""); // Added user role stat

  const [error, seterror] = useState("");

  const [Loader, setLoader] = useState(false);

  const navigate = useNavigate();

  

  const handleSubmit =  (e) => {
    e.preventDefault()
    const Username=FName+" "+LName
    if(currentUser==="Admin"){

      try {
        // setLoader(true)
        axios.post(`${import.meta.env.VITE_DEV_URL}users/registerAdmin`,{Username,Email,Phone,Department,password}) // replace https://craftncode.onrender.com/ in place of import.meta.env.VITE_DEV_URL
        .then(res=>{
          console.log(res.data.message)
          alert(res.data.message)
          
          setLoader(false)
          // window.localStorage.setItem("Username",FName)
          // navigate("/")
        })
      } catch (error) {
        seterror("Failed to register. Please try again later.")
        setLoader(false)
      }
    }
    if(currentUser==="Invertory Staff"){
      try {
        // setLoader(true)
        axios.post(`${import.meta.env.VITE_DEV_URL}users/registerAdmin`,{Username,Email,Phone,Department,password}) // replace https://craftncode.onrender.com/ in place of import.meta.env.VITE_DEV_URL
        .then(res=>{
          console.log(res)
          alert("User Registered Successfully")
          
          setLoader(false)
          // window.localStorage.setItem("Username",FName)
          // navigate("/")
        })
      } catch (error) {
        seterror("Failed to register. Please try again later.")
        setLoader(false)
      }
    }
  }

  return (
    <div className="h-max-screen register-background flex items-center justify-center py-0 px-0 sm:px-0 lg:px-0 mt-10" >
      <form
        className="max-w-md w-full space-y-8 register-login p-8 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="text-center">
          <h2 className=" text-4xl justify-center font-semibold align-middle items-center text-[#15B392]">
            Register
          </h2>
          <p className="mt-1 mb-1 p-1 text-xm text-[#1A1A1B]">
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
              className={`peer w-full text-black border-b-2 form-border border-gray-300 px-0 py-0 placeholder:text-transparent focus:border-gray-400  focus:outline-none`}
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
              className={`peer w-full text-black border-b-2 form-border border-gray-300 px-0 py-0 placeholder:text-transparent focus:border-gray-400 focus:outline-none `}
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
            className={`peer w-full text-black border-b-2 form-border border-gray-300 px-0 py-0 placeholder:text-transparent focus:border-gray-400 focus:outline-none `}
            placeholder="Email"
          />
          <label className="pointer-events-none absolute left-1 top-1 origin-left -translate-y-6 scale-75 transform text-[#1A1A1B] duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#15B392]">
            Email
          </label>
        </div>
        {/* Phone Field */}
        <div className="relative">
          <input
            type="text"
            name="Phone"
            value={Phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`peer w-full text-black border-b-2 form-border border-gray-300 px-0 py-0 placeholder:text-transparent focus:border-gray-400 focus:outline-none  `}
            placeholder="Phone number"
          />
          <label className="pointer-events-none absolute left-1 top-1 origin-left -translate-y-6 scale-75 transform text-[#1A1A1B] duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#15B392] ">
            Phone no.
          </label>
        </div>
         {/* User Role Selection */}
         <div className="space-y-2">
          <label className="text-sm font-medium text-[#A1A1D]">Department</label>
          <select
            value={Department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full text-gray-400 rounded-md border border-gray-400 py-2 px-3"
          >
            <option value="" disabled>Select Role</option>
            <option value="Accounts" >Accounts</option>
            <option value="Admission">Admission</option>
            <option value="Academeics">Academics</option>
          </select>
        </div>

        {/* Password Field */}
        <div className="relative">
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className={`peer w-full text-black border-b-2 form-border border-gray-300 px-0 py-0 placeholder:text-transparent focus:border-gray-400 focus:outline-none `}
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
            className={`peer form-border text-black w-full border-b-2 border-gray-300 px-0 py-0 placeholder:text-transparent focus:border-gray-400 focus:outline-none `}
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
          className="w-full transform rounded-lg bg-[#15B392] px-0 py-0 text-xl font-medium text-white transition-colors hover:bg-[#15B392] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
