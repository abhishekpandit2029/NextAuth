"use client";

import "@/app/globals.css";
import { Poppins } from "next/font/google";
import Link from "next/link";
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import { IoMdSettings } from "react-icons/io";


const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600", "700", "800", "900"],
});

// export const metadata: Metadata = {
//   title: "DailyQuill",
//   description: "Home page of DailyQuill",
// };

export default function SettingsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <section>
            <div className="rounded-3xl ring-1 ring-gray-200 lg:flex p-3 tab:p-4 mx-3 tab:mx-4 min-h-screen">
                <div className="flex flex-col space-y-4">
                    <div className="rounded-2xl bg-gray-50 ring-1 ring-inset ring-gray-900/5 min-w-[10rem]">
                        <div className="w-full flex-col space-y-6 p-4 hidden lap:flex">
                            <p className="whitespace-nowrap text-base font-semibold leading-6 text-gray-900 flex items-center space-x-2">
                                <span><IoMdSettings className="text-lg" /> </span>
                                <span>Settings</span>
                            </p>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-gray-50 ring-1 ring-inset ring-gray-900/5 min-w-[10rem] h-full">
                        <div className="w-full flex-col space-y-5 p-4 hidden lap:flex">
                            <Link href="/dashboard/profile" passHref>
                                <p className="whitespace-nowrap text-base font-semibold leading-6 text-gray-900 cursor-pointer flex items-center space-x-2">
                                    <span><Person4OutlinedIcon /> </span>
                                    <span>Accounts</span>
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    {children}
                </div>
            </div>
        </section>
    );
}