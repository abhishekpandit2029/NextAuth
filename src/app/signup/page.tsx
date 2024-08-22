"use client";

import React from "react";
import Register from "@/components/Auth/General/Signup/Signup";
import Image from "next/image";
import signup from "@/stuff/signup.svg";

export default function SignupPage() {
    return (
        <div className="px-16 pb-8 flex items-center justify-evenly">
            <div>
                <Image src={signup} className="min-w-full" alt="Logo" />
            </div>
            <Register />
        </div>
    )
}