import { NavLink } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { MdClose } from "react-icons/md";

import "./Navbar.css";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    setTheme(localTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const handleTheme = (e) => {
    const value = e.target.checked;
    if (value) {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }
  };

  const menuLink = (
    <>
      <NavLink
        to="./"
        className={({ isActive }) =>
          isActive ? "bg-[#23BE0A] text-white" : ""
        }
      >
        {" "}
        Home{" "}
      </NavLink>
      <NavLink
        to="./listedBooks"
        className={({ isActive }) =>
          isActive ? "bg-[#23BE0A] text-white" : ""
        }
      >
        {" "}
        Listed Books{" "}
      </NavLink>
      <NavLink
        to="./readBooks"
        className={({ isActive }) =>
          isActive ? "bg-[#23BE0A] text-white" : ""
        }
      >
        {" "}
        Pages to Read{" "}
      </NavLink>
      <NavLink
        to="./blogs"
        className={({ isActive }) =>
          isActive ? "bg-[#23BE0A] text-white" : ""
        }
      >
        {" "}
        Blogs{" "}
      </NavLink>
      <NavLink
        to="./about"
        className={({ isActive }) =>
          isActive ? "bg-[#23BE0A] text-white" : ""
        }
      >
        {" "}
        About Us{" "}
      </NavLink>
      <NavLink
        to="./contact"
        className={({ isActive }) =>
          isActive ? "bg-[#23BE0A] text-white" : ""
        }
      >
        {" "}
        Contact{" "}
      </NavLink>
    </>
  );

  return (
    <div>
      <div className="navbar shadow-lg">
        <div className="navbar-start">
          <div className="dropdown text-2xl ml-2 ">
            <div
              tabIndex={0}
              role="button"
              onClick={() => setOpen(!open)}
              className="lg:hidden"
            >
              {open === true ? <MdClose /> : <LuMenu />}
            </div>
            <ul
              //   tabIndex={0}
              className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-200 rounded-box w-60  ${
                open ? " " : "hidden"
              } `}
            >
              {menuLink}
            </ul>
          </div>
          <a href="" className="text-2xl font-bold ">
            {" "}
            Book<span className="reviewText">Review</span>{" "}
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuLink}</ul>
        </div>
        <div className="navbar-end">
          <div className="md:space-x-3 space-x-1">
            <a className="btn btn-outline p-1">Sign In</a>
            <a className="btn btn-outline p-1">Sign Up</a>
          </div>
          <div>
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                onChange={handleTheme}
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />

              {/* sun icon */}
              <svg
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
