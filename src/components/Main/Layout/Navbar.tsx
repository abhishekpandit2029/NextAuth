"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/stuff/logo-removebg.png";
import { usePathname } from "next/navigation";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DailyQuill from "@/stuff/Red_Illustrated_Bull_Stock_Broker_Logo__1_-removebg-preview.png"

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
      <div className="flex items-center ">
        <a href="/" className="flex space-x-1">
          <Image
            className="w-20"
            src={DailyQuill}
            alt="logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            DailyQuill
          </span>
        </a>
      </div>

      <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center space-x-6">
        <Link href="#ProductOverview" passHref>
          <p className="text-base font-semibold leading-6 text-gray-900">
            Features
          </p></Link>
        <Link href="#Endorsements" passHref><p className="text-base font-semibold leading-6 text-gray-900">
          Endorsements
        </p></Link>
        <Link href="#Pricing" passHref><p className="text-base font-semibold leading-6 text-gray-900">
          Pricing
        </p></Link>
        <Link href="#Subscribe" passHref><p className="text-base font-semibold leading-6 text-gray-900">
          Subscribe
        </p></Link>
        <Link href="/login"><p className="text-base font-semibold leading-6 text-gray-900">
          Log in <span aria-hidden="true">&rarr;</span>
        </p></Link>
        <AccountBoxIcon style={{ fontSize: "30px", }} />
      </div>
    </nav>
  );
}

export default Navbar;
