"use client";
import localFont from "next/font/local";
import "./globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <section
          className="bg-cover bg-center mt-20 "
          style={{
            backgroundColor: "gray-200",
          }}
        >
          {children}
        </section>
        <Footer />
      </body>
    </html>
  );
}
const Header = () => {
  const [isClick, setIsClick] = useState(false);
  const toggleHeader = () => {
    setIsClick(!isClick);
  };

  return (
    <header className=" py-8 bg-gray-800 text-white font-medium shadow-sm fixed top-0 left-0 w-full z-1 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-White font-bold s">
              Portfolio
            </Link>
          </div>
        </div>
        {/*  Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-4  ">
          <Link
            href="/"
            className="text-white hover:text-blue-400 rounded-lg p-2"
          >
            Home
          </Link>
          <Link href="/about" className="text-white  hover:text-blue-400 p-2">
            About
          </Link>
          <Link
            href="/projects"
            className="text-white  hover:text-blue-400  rounded-lg p-2"
          >
            Projects
          </Link>
          <Link
            href="/skills"
            className="text-white  hover:text-blue-400  rounded-lg p-2"
          >
            Skills
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-blue-400 rounded-lg p-2"
          >
            Contact
          </Link>
        </nav>
        {/* Mobile navigation
        <div className="flex items-center md:hidden">
          <button
            className="md-hidden inline-flex items-center justify-center p-2 rounded-md text-white
                 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring--white"
            onClick={toggleHeader}
          >
            {isClick ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>

          <nav
            className={`md:visible  mt-4 flex flex-col ${
              isClick ? "block" : "hidden"
            }`}
          >
            <Link href="/" className="text-white hover:text-blue-400  p-2">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-blue-400 p-2">
              About
            </Link>
            <Link
              href="/projects"
              className="text-white hover:text-blue-400 p-2"
            >
              Projects
            </Link>
            <Link href="/skills" className="text-white hover:text-blue-400 p-2">
              Skills
            </Link>
            <Link
              href="/contact"
              className="text-white  hover:text-blue-400 p-2"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div> */}
        {/* Mobile navigation */}
        <div className="flex items-center md:hidden">
          <button
            className="inline-flex items-center justify-center p-2 rounded-md text-white
            hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={toggleHeader}
          >
            {isClick ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>

        {/* Side Drawer Navigation */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 md:hidden z-20 transition-opacity duration-300 ${
            isClick
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleHeader} // To close when clicking outside
        >
          <nav
            className={`fixed left-0 top-0 w-3/4 sm:w-fit h-fit bg-transparent transform ${
              isClick ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out`}
          >
            {/* <div className="flex justify-end p-4">
              <button
                className="text-white"
                onClick={toggleHeader} // Close the menu when clicking the close button
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div> */}
            <div className="flex flex-col items-center space-y-2 mt-10">
              <Link href="/" className="text-white hover:text-blue-400 p-2">
                Home
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-blue-400 p-2"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-white hover:text-blue-400 p-2"
              >
                Projects
              </Link>
              <Link
                href="/skills"
                className="text-white hover:text-blue-400 p-2"
              >
                Skills
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-blue-400 p-2"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export function Footer() {
  return (
    <div className=" flex items-center  bg-gray-800 flex-col fixed bottom-0 w-full h-24 justify-center text-white ">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Moloro Malepe. All rights reserved.
        </p>
      </div>
    </div>
  );
}
