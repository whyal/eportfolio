"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white shadow-lg md:h-[70px] md:flex md:items-center">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className=" font-bold text-xl">
              Yong Lun
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <ThemeToggle />
            {/* <a href="/" className=" hover:text-blue-500">
              Home
            </a> */}

            {/* <Link href="/about" className=" hover:text-blue-500">
              About
            </Link>
            <Link href="/projects" className=" hover:text-blue-500">
              Projects
            </Link> */}
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className=" flex items-center justify-center"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div
            className={`md:hidden absolute left-0 w-full transition-all duration-300 ease-in-out overflow-hidden shadow-lg ${
              isOpen
                ? "opacity-100 max-h-96 p-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                : "opacity-0 max-h-0 p-0"
            }`}
          >
            <ThemeToggle />
            {/* <Link
              href="/"
              className=" hover:text-blue-500"
              onClick={handleLinkClick}
            >
              Home
            </Link> */}
            {/* <Link
              href="/about"
              className=" hover:text-blue-500"
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link
              href="/projects"
              className=" hover:text-blue-500"
              onClick={handleLinkClick}
            >
              Projects
            </Link> */}
          </div>
        )}
      </div>
    </nav>
  );
}
