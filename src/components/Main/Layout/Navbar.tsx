"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";
import DailyQuill from "@/stuff/Red_Illustrated_Bull_Stock_Broker_Logo__1_-removebg-preview.png";
import SidebarMenu from "@/components/Drawers/SidebarMenu";
import axios from "axios";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Dropdown, } from 'antd';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import type { MenuProps } from 'antd';
import { message } from "antd"
import { Button } from "@mui/base/Button";
import { isAuthenticate } from "@/constants/strings";

interface IMeResponse {
  data: {
    username: string
  }
}

export function useGetUserDetails() {
  const [data, setData] = useState<IMeResponse | null>(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const res = await axios.get<IMeResponse>("/api/users/me");
        setData(res.data);
      } catch (error: any) {
        message.error("Error fetching user details");
      }
    };

    if (isAuthenticate) {
      fetchUserDetails();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticate]);

  return { data };
}

function Navbar() {
  const { push } = useRouter();
  const { data } = useGetUserDetails()
  const isHome = useSelectedLayoutSegment()?.includes("home");

  const items: MenuProps['items'] = [
    {
      label: <a href="/profile" className="text-base font-semibold leading-6 text-gray-900">Profile</a>,
      key: '0',
    },
    {
      label: <a onClick={() => logout()} className="text-base font-semibold leading-6 text-gray-900">Logout</a>,
      key: '1',
    },
  ];

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      localStorage.setItem("isAuth", "false");
      message.success("Logout successful");
      push("/login");
    } catch (error: any) {
      message.error(error.message);
    }
  };

  return (
    <nav
      className="flex items-center justify-between py-4 px-2 lg:px-8"
      aria-label="Global"
    >
      <div className="flex items-center ">
        <a href="/" className="flex space-x-1">
          <Image className="w-20" src={DailyQuill} alt="logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            DailyQuill
          </span>
        </a>
      </div>
      <div className="flex lg:hidden">
        <SidebarMenu />
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center space-x-6">
        <Link href={isHome ? "#ProductOverview" : "/home#ProductOverview"} passHref>
          <p className="text-base font-semibold leading-6 text-gray-900">
            Features
          </p>
        </Link>
        <Link href={isHome ? "#Endorsements" : "/home#Endorsements"} passHref>
          <p className="text-base font-semibold leading-6 text-gray-900">
            Endorsements
          </p>
        </Link>
        <Link href={isHome ? "#Pricing" : "/home#Pricing"} passHref>
          <p className="text-base font-semibold leading-6 text-gray-900">
            Pricing
          </p>
        </Link>
        <Link href={isHome ? "#Subscribe" : "/home#Subscribe"} passHref>
          <p className="text-base font-semibold leading-6 text-gray-900">
            Subscribe
          </p>
        </Link>

        {isAuthenticate ||
          <Link href="/login">
            <Button
              className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Log in
            </Button>
          </Link>
        }

        {isAuthenticate && <div className="flex space-x-2 items-center">
          <AccountCircleIcon style={{ fontSize: "35px" }} />
          <p className="text-base normal-case font-semibold leading-6 text-gray-900">
            {(data?.data?.username ?
              data.data.username.charAt(0).toUpperCase() + data.data.username.slice(1).toLowerCase()
              : "User")}
          </p>
          <Dropdown menu={{ items }}>
            <ExpandMoreIcon />
          </Dropdown>
        </div>}
      </div>
    </nav>
  );
}

export default Navbar;
