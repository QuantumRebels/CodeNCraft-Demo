
// LoginForm.js
import React, { useState } from 'react';
import { AiOutlineMail, AiOutlineLock, AiOutlineGoogle } from 'react-icons/ai';
import { FaApple } from 'react-icons/fa';

const LoginForm = () => {
    const [role, setRole] = useState('user');

    return (
        <div className="max-w-lg mx-auto p-12 mt-12 shadow-2xl rounded-lg bg-white">
            <h2 className="text-4xl font-bold text-[#114fee] text-center mb-6">Sign In</h2>
            
            {/* Role Selection */}
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="role">
                    Login as
                </label>
                <select
                    id="role"
                    className="w-full p-2.5 border rounded-lg focus:outline-none "
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                    <option value="inventory">Inventory Manager</option>
                </select>
            </div>

            {/* Email Field */}
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                    Email
                </label>
                <div className="flex items-center border rounded-lg p-2.5">
                    <AiOutlineMail className="text-gray-500 mr-2" />
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your Email"
                        className="w-full outline-none"
                    />
                </div>
            </div>

            {/* Password Field */}
            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
                    Password
                </label>
                <div className="flex items-center border rounded-lg p-2.5">
                    <AiOutlineLock className="text-gray-500 mr-2" />
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your Password"
                        className="w-full outline-none"
                    />
                </div>
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between mb-6">
                <label className="flex items-center text-gray-600">
                    <input type="checkbox" className="mr-2" />
                    Remember me
                </label>
                <a href="/forgot-password" className="text-[#114fee] hover:underline">
                    Forgot password?
                </a>
            </div>

            {/* Sign In Button */}
            <button className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 mb-4">
                Sign In
            </button>

            {/* Sign Up Link */}
            <p className="text-center text-gray-600 mb-4">
                Don't have an account?{' '}
                <a href="/signup" className="text-[#114fee] hover:underline">
                    Sign Up
                </a>
            </p>

            {/* Divider */}
            <div className="flex items-center justify-center my-4">
                <span className="text-gray-500 mx-2">Or With</span>
            </div>

            {/* Social Login Buttons */}
            <div className="flex justify-center space-x-4">
                <button className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-100">
                    <AiOutlineGoogle className=" mr-2" />
                    Continue With Google
                </button>
                
            </div>
        </div>
    );
};

export default LoginForm;
