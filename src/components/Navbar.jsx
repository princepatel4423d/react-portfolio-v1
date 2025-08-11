import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  HiOutlineMenu,
  HiOutlineX,
  HiHome,
  HiUser,
  HiFolderOpen,
  HiMail,
} from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { to: "/", label: "Home", icon: <HiHome size={20} /> },
  { to: "/about", label: "About", icon: <HiUser size={20} /> },
  { to: "/projects", label: "Projects", icon: <HiFolderOpen size={20} /> },
  { to: "/contact", label: "Contact", icon: <HiMail size={20} /> },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen((open) => !open);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 select-none">
      <div className="flex items-center justify-between h-16">
        {/* Brand */}
        <Link
          to="/"
          className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center"
          onClick={closeMenu}
        >
          Jhon Doe<span className="text-indigo-600 ml-1">/</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors ${
                  isActive
                    ? "border-b-2 border-indigo-600 dark:border-indigo-400"
                    : ""
                }`
              }
              onClick={closeMenu}
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Right: Theme toggle + Hamburger */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <div
            onClick={toggleMenu}
            role="button"
            tabIndex={0}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") && toggleMenu()
            }
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition cursor-pointer"
          >
            {mobileMenuOpen ? (
              <HiOutlineX size={24} />
            ) : (
              <HiOutlineMenu size={24} />
            )}
          </div>
        </div>
      </div>

      {/* Mobile side drawer */}
      <div
        className={`fixed top-0 right-0 h-full bg-white dark:bg-black shadow-lg transform transition-transform duration-300 z-50
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ width: "70vw", maxWidth: "320px" }}
      >
        <div className="flex flex-col h-full">
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button
              onClick={closeMenu}
              aria-label="Close menu"
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              <HiOutlineX size={28} />
            </button>
          </div>

          {/* Menu links */}
          <nav className="flex flex-col items-center justify-center flex-grow space-y-8 px-6">
            {navItems.map(({ to, label, icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center space-x-3 font-semibold text-lg text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors w-full max-w-xs ${
                    isActive
                      ? "border-l-4 border-indigo-600 dark:border-indigo-400 pl-4"
                      : "pl-6"
                  } py-2`
                }
                onClick={closeMenu}
              >
                <span className="text-indigo-600 dark:text-indigo-400">
                  {icon}
                </span>
                <span>{label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* Blur background */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm z-40"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

export default Navbar;