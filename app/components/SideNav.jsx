import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";

const SideNav = ({ open, toggleOpen, theme, toggleTheme }) => {
  const [sticky, setSticky] = useState(false);
  const containerRef = useRef(null);
  const pages = [
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

  const ulVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const liVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <>
      <motion.div
        className={`sidebar bg-white dark:bg-[#262626] w-80 fixed top-0 h-screen shadow dark:shadow-[0_4px_4px_rgba(0,0,0,0.25)] md:hidden ${
          !open ? "-right-full" : "right-0"
        } z-30 ease-in-out duration-300 px-3 py-2`}
        initial={false}
        animate={open ? "open" : "closed"}
        ref={containerRef}
      >
        <button
          className="theme-toggle ml-2 cursor-pointer block mt-5"
          onClick={() => toggleTheme()}
        >
          {theme === "dark" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-theme dark:text-white"
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
        <div
          className={`menu-icon cursor-pointer select-none absolute top-8 right-7 z-50 md:hidden ${
            !sticky ? "hidden" : ""
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
        <div className="menu mt-10 p-3">
          <motion.ul variants={ulVariants} className="links">
            {pages.map((navItem) => (
              <motion.li
                key={navItem}
                variants={liVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  className="text-theme dark:text-white text-lg capitalize cursor-pointer block mt-5"
                  activeClass="!text-active"
                  to={navItem}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {navItem}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
      <div
        className={`sidebar-overlay bg-[rgba(101,101,101,0.4)] w-full h-full fixed inset-0 z-20 ease-in-out duration-300 ${
          !open
            ? "-right-full opacity-0 invisible"
            : "right-0 opacity-100 visible"
        }`}
        onClick={toggleOpen}
      ></div>
    </>
  );
};

export default SideNav;
