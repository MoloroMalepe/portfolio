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
    <header className=" py-8 bg-gray-100  font-medium shadow-xl fixed top-0 left-0 w-full z-1 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex-shrink-0 font-semibold w-[35%]">
            <Link href="/" className="text-White font-bold s">
              Portfolio
            </Link>
          </div>
        </div>
        {/*  Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-4  text-[16px] text-gray-800">
          <Link
            href="/"
            className=" hover:text-blue-00 rounded-lg hover:bg-white hover:text-blue-600 p-2"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-blue-600 hover:bg-white p-2"
          >
            About
          </Link>
          <Link
            href="/projects"
            className=" hover:text-blue-600 hover:bg-white rounded-lg p-2"
          >
            Projects
          </Link>
          <Link
            href="/skills"
            className="  hover:text-blue-600 hover:bg-white rounded-lg p-2"
          >
            Skills
          </Link>
          <Link
            href="/contact"
            className=" hover:text-blue-600  rounded-lg p-2 hover:bg-white"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile navigation */}
        <div className="flex items-center md:hidden">
          <button
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-800
            hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
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
          className={`fixed inset-0 bg-slate-50 bg-opacity-50 md:hidden z-20 transition-opacity duration-300 ${
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
            <div className="flex flex-col i  mt-10 text-gray-800">
              <Link href="/" className="text-gray-800 hover:text-blue-600 p-2">
                <div className="hover:bg-slate-100 p-2 rounded-md">
                  {" "}
                  {/* Added a wrapping div with hover style */}
                  Home
                </div>
              </Link>
              <Link href="/about" className=" hover:text-blue-600 p-2">
                <div className="hover:bg-slate-100 p-1 rounded-md">About</div>
              </Link>
              <Link href="/projects" className=" hover:text-blue-600 p-2">
                <div className="hover:bg-slate-100 p-2 rounded-md">
                  Projects
                </div>
              </Link>
              <Link
                href="/skills"
                className=" rounded-md hover:text-blue-600 p-2"
              >
                <div className="hover:bg-slate-100 p-2 rounded-md">Skills</div>
              </Link>
              <Link href="/contact" className=" hover:text-blue-600 p-2">
                <div className="hover:bg-slate-100 p-2 rounded-md">Contact</div>
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
    <div className=" flex items-center  bg-gray-800 flex-col fixed bottom-0 w-full h-fit justify-center text-white rounded-sm p-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Moloro Malepe. All rights reserved.
        </p>
      </div>
    </div>
    // <footer className="bg-gray-800 text-white py-4 text-center">
    //   <div className="container mx-auto px-4">
    //     <p>
    //       &copy; {new Date().getFullYear()} Moloro Malepe. All Rights Reserved.
    //     </p>
    //   </div>
    // </footer>
  );
}
