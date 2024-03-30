"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/stuff/logo-removebg.png";
import { usePathname } from "next/navigation";

function Navbar() {
  const activeStyle = "text-teal-700 font-semibold";
  const nonActiveStyle = "text-black font-normal";
  const currentRoute = usePathname();
  return (
    <nav className="flex justify-between items-center py-8 px-16 text-[15px]">
      <div>
        <Link href="/">
          <Image alt="Logo" src={Logo} className="w-12 h-12" />
        </Link>
      </div>
      <div className="flex items-center space-x-8">
        <Link
          className={currentRoute === "/" ? activeStyle : nonActiveStyle}
          href="/"
        >
          Home
        </Link>
        {/* <Link
          className={currentRoute === "/about" ? activeStyle : nonActiveStyle}
          href="about"
        >
          About us
        </Link>
        <Link
          className={
            currentRoute === "/ourpursuits" ? activeStyle : nonActiveStyle
          }
          href="#"
        >
          Our pursuits
        </Link>
        <Link
          className={
            currentRoute === "/prospects" ? activeStyle : nonActiveStyle
          }
          href="#"
        >
          Prospects
        </Link>
        <Link
          className={
            currentRoute === "/testimonials" ? activeStyle : nonActiveStyle
          }
          href="#"
        >
          Testimonials
        </Link>
        <Link
          className={currentRoute === "/faqs" ? activeStyle : nonActiveStyle}
          href="#"
        >
          FAQ&#39;s
        </Link>
        <Link
          className={
            currentRoute === "/contactus" ? activeStyle : nonActiveStyle
          }
          href="#"
        >
          Contact us
        </Link> */}
        <Link
          className={currentRoute === "/login" ? activeStyle : nonActiveStyle}
          href="login"
        >
          <button className="rounded-lg border-2 py-2 px-3">SignIn</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
