import React, { useState } from "react";
import { Link } from "react-router";
import { FaUser, FaLock, FaGoogle, FaGithub } from "react-icons/fa";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="bg-[#1e1e1e] rounded-3xl border border-gray-800 shadow-2xl overflow-hidden">
          <div className="p-8 md:p-10">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-[#00a86b] tracking-tight">
                Welcome Back
              </h2>
              <div className="h-1 w-12 bg-[#f42a41] mx-auto mt-2"></div>
              <p className="text-gray-400 mt-4 text-sm font-medium">
                Log in to access the Liberation War Archive
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] ml-1">
                  Email Address
                </label>
                <div className="relative group">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-500 group-focus-within:text-[#00a86b] transition-colors">
                    <FaUser className="text-sm" />
                  </span>
                  <input
                    type="email"
                    className="w-full pl-11 pr-4 py-3 bg-[#2a2a2a] border border-gray-700 rounded-xl text-white focus:border-[#00a86b] focus:outline-none transition-all text-sm"
                    placeholder="name@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-[10px] text-[#00a86b] hover:underline uppercase font-bold"
                  >
                    Forgot?
                  </a>
                </div>
                <div className="relative group">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-500 group-focus-within:text-[#00a86b] transition-colors">
                    <FaLock className="text-sm" />
                  </span>
                  <input
                    type="password"
                    className="w-full pl-11 pr-4 py-3 bg-[#2a2a2a] border border-gray-700 rounded-xl text-white focus:border-[#00a86b] focus:outline-none transition-all text-sm"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <Link
                to="/"
                type="submit"
                className="btn w-full py-4 bg-[#00a86b] hover:bg-[#008f5a] text-white rounded-xl font-bold shadow-lg shadow-[#00a86b]/20 transition-all active:scale-[0.98] mt-2"
              >
                Sign In
              </Link>
            </form>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-800"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-[#1e1e1e] px-4 text-gray-500 tracking-widest font-semibold">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <Link
                  to="/"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-[#2a2a2a] border border-gray-700 rounded-xl hover:bg-[#333333] transition-colors text-white text-sm font-medium"
                >
                  <FaGoogle className="text-red-500" /> Google
                </Link>
                <Link
                  to="/"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-[#2a2a2a] border border-gray-700 rounded-xl hover:bg-[#333333] transition-colors text-white text-sm font-medium"
                >
                  <FaGithub /> GitHub
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-[#151515] py-6 px-8 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400">
              Don't have an account?{" "}
              <Link className="text-[#00a86b] font-bold hover:underline">
                Create Account
              </Link>
            </p>
          </div>
        </div>

        <p className="text-center mt-8 text-xs text-gray-600 uppercase tracking-widest">
          &copy; 2026 Bangladesh Liberation War Archive
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
