import React, { useState } from "react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-gradient-to-br from bg-cyan-500 to bg-green-500 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-black">
          {isLogin ? "Login" : "Register"}
        </h2>
        <form className="mt-6">
          {!isLogin && (
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-black"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Name"
              />
            </div>
          )}
          <div className="mt-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Password"
            />
          </div>
          {!isLogin && (
            <div className="mt-4">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Confirm Password"
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full px-4 py-2 mt-6 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        <div className="mt-6 text-center">
          <button
            className="text-blue-600 hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin
              ? "Don't have an account? Register"
              : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;