import React, { useState } from "react";
import { Drawer } from "antd";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import DailyQuill from "@/stuff/Red_Illustrated_Bull_Stock_Broker_Logo__1_-removebg-preview.png";

export default function SidebarMenu() {
  const [open, setOpen] = useState(false);
  const isHome = useSelectedLayoutSegment()?.includes("home");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MenuOpenIcon className="flex lg:hidden text-3xl mob:text-4xl mr-2" onClick={showDrawer} />
      <Drawer
        title={
          <div className="flex items-center ">
            <a href="/" className="flex space-x-1">
              <Image className="w-20" src={DailyQuill} alt="logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                DailyQuill
              </span>
            </a>
          </div>
        }
        onClose={onClose}
        open={open}
        placement="left"
        width={300}
      >
        <div className="flex flex-col space-y-4">
          <Link href={isHome ? "#ProductOverview" : "/home"} passHref>
            <p className="text-xl font-semibold leading-6 text-gray-900">
              Features
            </p>
          </Link>
          <Link href={isHome ? "#Endorsements" : "/home"} passHref>
            <p className="text-xl font-semibold leading-6 text-gray-900">
              Endorsements
            </p>
          </Link>
          <Link href={isHome ? "#Pricing" : "/home"} passHref>
            <p className="text-xl font-semibold leading-6 text-gray-900">
              Pricing
            </p>
          </Link>
          <Link href={isHome ? "#Subscribe" : "/home"} passHref>
            <p className="text-xl font-semibold leading-6 text-gray-900">
              Subscribe
            </p>
          </Link>
          <Link href="/login">
            <p className="text-xl font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </p>
          </Link>
          <AccountBoxIcon style={{ fontSize: "30px" }} />
        </div>
      </Drawer>
    </>
  );
}
