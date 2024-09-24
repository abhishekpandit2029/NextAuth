"use client";

import type { Metadata } from "next";
import "@/app/globals.css";
import { Poppins } from "next/font/google";
import Dashboardlayout from "@/components/Main/Layout/Dashboardlayout";
import Link from "next/link";
import StyleIcon from "@mui/icons-material/Style";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useState } from "react";
import AddToDairyModel from "@/components/Modals/AddToDairyModel";
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';

const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600", "700", "800", "900"],
});

// export const metadata: Metadata = {
//   title: "DailyQuill",
//   description: "Home page of DailyQuill",
// };

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isAddNewModalOpen, setIsAddNewModalOpen] = useState(false);

    const handleClickAddNew = () => {
        setIsAddNewModalOpen(true);
    };

    const handleCancelAddNew = () => {
        setIsAddNewModalOpen(false);
    };

    const handleSaveAddNew = () => {
        setIsAddNewModalOpen(false);
    };

    return (
        <section>
            {isAddNewModalOpen && (
                <AddToDairyModel
                    handleCancel={handleCancelAddNew}
                    isModalOpen={isAddNewModalOpen}
                    onSave={handleSaveAddNew}
                    onCancel={handleCancelAddNew}
                />
            )}

            <div className="rounded-3xl ring-1 ring-gray-200 lg:flex p-3 tab:p-4 mx-3 tab:mx-4 min-h-screen">
                <div className="rounded-2xl bg-gray-50 ring-1 ring-inset ring-gray-900/5 min-w-[10rem]">
                    <div className="w-full flex-col space-y-6 p-6 hidden lap:flex">
                        <Link href="/dashboard/profile" passHref>
                            <p className="whitespace-nowrap text-base font-semibold leading-6 text-gray-900 cursor-pointer flex items-center space-x-2">
                                <span><Person4OutlinedIcon /> </span>
                                <span>Profile</span>
                            </p>
                        </Link>
                        <Link href="/dashboard/feed" passHref>
                            <p className="whitespace-nowrap text-base font-semibold leading-6 text-gray-900 cursor-pointer flex items-center space-x-2">
                                <span><DynamicFeedIcon /> </span>
                                <span>Feed</span>
                            </p>
                        </Link>
                        <Link href="/dashboard/inbox" passHref>
                            <p className="whitespace-nowrap text-base font-semibold leading-6 text-gray-900 cursor-pointer flex items-center space-x-2">
                                <span><MailOutlinedIcon /> </span>
                                <span>Inbox</span>
                            </p>
                        </Link>
                        <Link href="/dashboard/bin" passHref>
                            <p className="whitespace-nowrap text-base font-semibold leading-6 text-gray-900 cursor-pointer flex items-center space-x-2">
                                <span><DeleteOutlineIcon /> </span>
                                <span>Bin</span>
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="w-full">
                    {children}
                </div>
            </div>
        </section>
    );
}
