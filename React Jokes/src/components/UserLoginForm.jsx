import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
const UserLoginForm = () => {
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex justify-center items-center py-10">
      <div className="bg-white shadow-xl w-full max-w-[400px] h-full min-h-[500px] rounded-md px-4 py-6">
        <h1 className="text-center text-2xl font-bold">Login</h1>
        <form onSubmit={(e) => handlesubmit(e)} className="py-8">
          {/* Email */}
          <div className="relative w-full mb-6">
            <label
              className={`absolute left-3 transition-all duration-300 bg-white px-2 
              ${
                emailFocused || formData.email
                  ? "-top-2 text-xs text-blue-400"
                  : "top-1/2 text-base text-gray-700 transform -translate-y-1/2"
              }
              `}
            >
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 border-2 border-blue-300 bg-transparent text-black text-base rounded-md outline-none focus:border-blue-400"
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
            />
          </div>

          {/* Password */}
          <div className="relative w-full mb-6">
            <label
              className={`absolute left-3 transition-all duration-300 bg-white px-2 
              ${
                passwordFocused || formData.password
                  ? "-top-2 text-xs text-blue-400"
                  : "top-1/2 text-base text-gray-700 transform -translate-y-1/2"
              }
              `}
            >
              Password
            </label>
            <input
              type="password"
              className="w-full p-3 border-2 border-blue-300 bg-transparent text-black text-base rounded-md outline-none focus:border-blue-400"
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              value={formData.password}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  password: e.target.value,
                })
              }
            />
          </div>

          <button className="w-full btn text-white p-3 rounded-md font-medium">
            Login
          </button>
        </form>

        {/* Sign In Section */}
        <div className="text-center mt-6">
          <span className="block text-gray-600">or Sign in Using</span>
          <div className="flex justify-center gap-4 mt-3">
            <button className="w-10 h-10 rounded-full hover:text-blue-600 bg-gray-200 flex items-center justify-center">
              <FaFacebookF size={26} />
            </button>
            <button className="w-10 h-10 rounded-full hover:text-blue-600 bg-gray-200 flex items-center justify-center">
              <FaTwitter size={26} />
            </button>
            <button className="w-10 h-10 rounded-full hover:text-blue-600 bg-gray-200 flex items-center justify-center">
              <FaGoogle size={26} />
            </button>
          </div>
        </div>

        {/* Create Account Section */}
        <div className="text-center mt-6">
          <span className="text-gray-600">Don't have an account?</span>
          <a href="#" className="text-blue-500 ml-2">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserLoginForm;
