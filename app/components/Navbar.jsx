"use client";
import { motion, useCycle } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

import SideNav from "./SideNav";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useCycle(false, true);

  const navItems = [
    "about",
    "resume",
    "certification",
    "skills",
    "portfolio",
    "contact",
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  useEffect(() => {
    // Check system theme preference
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    setTheme(localStorage.getItem("theme") || systemTheme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleOpen = () => {
    document.body.classList.toggle("overflow-hidden");
    setOpen((current) => !current);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <>
      <div
        className={`navbar w-full bg-white dark:bg-theme z-10 flex items-center justify-between px-10 py-3.5 ${
          sticky ? "fixed top-0 shadow-[0_0_10px_0_rgba(0,0,0,.8)]" : ""
        }`}
      >
        <a className="logo flex items-center" href="/">
          <div className="letters bg-blue-500 w-12 h-12 rounded-full text-white text-2xl font-bold flex items-center justify-center">
            AS
          </div>
          <div className="full-name text-theme dark:text-white text-xl flex items-center ml-2">
            <div className="font-bold capitalize mr-2">abu</div>
            <div className="capitalize">sayed</div>
          </div>
        </a>
        <div className="menu md:block hidden">
          <ul className="links flex items-center gap-6">
            {navItems.map((navItem) => (
              <li key={navItem}>
                <Link
                  className="text-theme dark:text-white capitalize cursor-pointer leading-[0]"
                  activeClass="!text-active"
                  to={navItem}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {navItem}
                </Link>
              </li>
            ))}
            <li>
              <button onClick={() => toggleTheme()}>
                {theme === "dark" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    />
                  </svg>
                )}
              </button>
            </li>
          </ul>
        </div>
        <div
          className={`menu-icon cursor-pointer select-none absolute right-7 md:hidden ${
            sticky ? "z-20" : "z-50"
          }`}
          onClick={toggleOpen}
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
            className="block bg-theme dark:bg-white w-[30px] h-0.5 m-[5px]"
          />
          <motion.span
            animate={{ opacity: open ? 0 : 1 }}
            className="block bg-theme dark:bg-white w-[30px] h-0.5 m-[5px]"
          />
          <motion.span
            animate={{ rotate: open ? -45 : 0, y: open ? -8 : 0 }}
            className="block bg-theme dark:bg-white w-[30px] h-0.5 m-[5px]"
          />
        </div>
      </div>
      <SideNav
        open={open}
        toggleOpen={toggleOpen}
        theme={theme}
        toggleTheme={toggleTheme}
      />
    </>
  );
};

export default Navbar;
