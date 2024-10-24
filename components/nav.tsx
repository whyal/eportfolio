"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="shadow-lg md:h-[70px] md:flex md:items-center">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className=" font-bold text-xl">
              Yong Lun
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="/" className=" hover:text-blue-500">
              Home
            </a>
            <Link href="/about" className=" hover:text-blue-500">
              About
            </Link>
            <Link href="/projects" className=" hover:text-blue-500">
              Projects
            </Link>
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
          <div className="md:hidden absolute left-0 flex flex-col bg-white w-full h-fit shadow-lg p-4">
            <Link
              href="/"
              className=" hover:text-blue-500"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
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
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
