import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const [data , setData]= useState({
        email:"",
        password:""
    })

    const handleChange = (e)=>{
        const name= e.target.name;
        const newdata= {...data, [name]:e.target.value}
        // console.log(newdata);
        setData(newdata);
    }
    const handleSubmit= (e)=>{
        e.preventDefault();
        console.log(data);
        setData({
            email:"",
            password:""
        });
        navigate('/admin/dashboard');
    }
  return (
    <section className="h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto p-6">
        <div className="flex flex-wrap items-center justify-center lg:justify-between bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Left Section - Image */}
          <div className="lg:block lg:w-1/2 p-6">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Illustration"
            />
          </div>

          {/* Right Section - Login Form */}
          <div className="w-full lg:w-1/2 p-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
              Admin Login
            </h2>
            <form onSubmit={handleSubmit} method="POST">
              {/* Email Input */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Password Input */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between mb-6">
                <label className="flex items-center text-gray-600">
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </label>
                <a
                  href="#"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
