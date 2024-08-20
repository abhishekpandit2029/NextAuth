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
      <div className="flex lg:flex-1">
        <a href="/">
          <Image
            className="w-20"
            src={DailyQuill}
            alt="logo"
          />
        </a>
      </div>

      <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center space-x-4">
        <a className="text-base font-semibold leading-6 text-gray-900">
          Create one!
        </a>
        <a href="/login" className="text-base font-semibold leading-6 text-gray-900">
          Log in <span aria-hidden="true">&rarr;</span>
        </a>
        <AccountBoxIcon style={{ fontSize: "30px", }} />
      </div>
    </nav>
  );
}

export default Navbar;
