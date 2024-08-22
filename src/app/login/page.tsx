"use client";

import React from "react";
import Login from "@/components/Auth/General/Login/Login";
import Image from "next/image";
import login from "@/stuff/login.svg";

export default function LoginPage() {
    return (
        <div className="px-16 pb-8 flex items-center justify-evenly">
            <div>
                <Image src={login} className="min-w-full" alt="Logo" />
            </div>
            <Login />
        </div>
    )
}