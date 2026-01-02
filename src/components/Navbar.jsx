import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/"} className="hover:text-[#00a86b] transition-colors">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/document"}
          className="hover:text-[#00a86b] transition-colors"
        >
          Documents
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/Interview"}
          className="hover:text-[#00a86b] transition-colors"
        >
          Interview
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/photogallary"}
          className="hover:text-[#00a86b] transition-colors"
        >
          Photographs
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contract"}
          className="hover:text-[#00a86b] transition-colors"
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 w-full">
      <div className="navbar bg-[#121212] text-white shadow-lg border-b border-gray-800 px-4 md:px-12">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#1e1e1e] rounded-box z-[1] mt-3 w-52 p-4 shadow-2xl border border-gray-700 font-bold space-y-2"
            >
              {links}
            </ul>
          </div>
          {/* Brand Logo/Title */}
          <NavLink
            to={"/"}
            className="btn btn-ghost text-xl font-extrabold tracking-tighter text-[#00a86b]"
          >
            LIBERATION <span className="text-white">WAR</span>
          </NavLink>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold text-sm uppercase tracking-wider space-x-2">
            {links}
          </ul>
        </div>

        <div className="navbar-end gap-2">
          <a className="btn btn-ghost btn-sm hidden md:flex text-gray-400">
            Login
          </a>
          <a className="btn bg-[#00a86b] hover:bg-[#008f5a] border-none text-white btn-sm px-6">
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
