"use client";

import React from "react";
import Login from "@/components/Auth/General/Login/Login";
import Image from "next/image";
import sm from "@/stuff/sm1 (4).svg";

export default function LoginPage() {
    return (
        <div className="px-16 pb-8 flex items-center justify-evenly">
            <div>
                <Image src={sm} className="min-w-full" alt="Logo" />
            </div>
            <Login />
        </div>
    )
}