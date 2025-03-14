import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";

const UserRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex justify-center items-center py-10">
      <div className="bg-white shadow-xl w-full max-w-[400px] h-full min-h-[500px] rounded-md px-4 py-3">
        <h1 className="text-center text-2xl font-bold">Registration</h1>
        <form onSubmit={(e) => handlesubmit(e)} className="py-1">
          {/* Name */}
          <div className="relative w-full mb-5">
            <label>Name</label>
            <input
              type="text"
              className="w-full p-3 border-2 border-blue-300 bg-transparent text-black text-base rounded-md outline-none focus:border-blue-400"
              value={formData.name}
              placeholder="Enter your name"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
            />
          </div>
          {/* Email */}
          <div className="relative w-full mb-5">
            <label>Email</label>
            <input
              type="email"
              className="w-full p-3 border-2 border-blue-300 bg-transparent text-black text-base rounded-md outline-none focus:border-blue-400"
              value={formData.email}
              placeholder="Enter your email address"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
            />
          </div>

          {/* Password */}
          <div className="relative w-full mb-5">
            <label>Password</label>
            <input
              type="password"
              className="w-full p-3 border-2 border-blue-300 bg-transparent text-black text-base rounded-md outline-none focus:border-blue-400"
              value={formData.password}
              placeholder="Enter your password"
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

        {/* Sign Up Section */}
        <div className="text-center mt-6">
          <span className="block text-gray-600">or Sign up Using</span>
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
          <span className="text-gray-600">Already have an account?</span>
          <a href="#" className="text-blue-500 ml-2">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserRegistrationForm;
