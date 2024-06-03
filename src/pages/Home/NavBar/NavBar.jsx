import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className={
                    location.pathname === "/"
                      ? "bg-primary  font-bold rounded-lg"
                      : "text-[#a5c927]"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/skills"
                  className={
                    location.pathname === "/skills" &&
                    "bg-white text-[#a5c927] font-bold rounded-lg"
                  }
                >
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  className={
                    location.pathname === "/portfolio"
                      ? "bg-primary  font-bold rounded-lg"
                      : "text-[#a5c927]"
                  }
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={
                    location.pathname === "/about"
                      ? "bg-primary  font-bold rounded-lg"
                      : "text-[#a5c927]"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={
                    location.pathname === "/contact"
                      ? "bg-primary  font-bold rounded-lg"
                      : "text-[#a5c927]"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/">
            <span className="font-bold text-xl">A</span>
            <span className="font-bold text-accent text-xl">H_</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={
                  location.pathname === "/"
                    ? "bg-primary  font-bold rounded-lg"
                    : "text-[#a5c927]"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                className={
                  location.pathname === "/skills"
                    ? "bg-primary  font-bold rounded-lg"
                    : "text-[#a5c927]"
                }
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={
                  location.pathname === "/portfolio"
                    ? "bg-primary  font-bold rounded-lg"
                    : "text-[#a5c927]"
                }
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={
                  location.pathname === "/about"
                    ? "bg-primary  font-bold rounded-lg"
                    : "text-[#a5c927]"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={
                  location.pathname === "/contact"
                    ? "bg-primary  font-bold rounded-lg"
                    : "text-[#a5c927]"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to="https://drive.google.com/file/d/12qd7P7HDWJxmg8GoEhwaObOi-T9R7_P9/view?usp=sharing"
            target="_blank"
            className="text-sm hover:bg-accent hover:text-white transition-all text-accent p-2 rounded-md"
          >
            Download Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
