"use client";

import React from "react";
import Register from "@/components/Auth/General/Signup/Signup";
import Image from "next/image";
import sm from "@/stuff/sm1 (4).svg";

export default function SignupPage() {
    return (
        <div className="px-16 pb-8 flex items-center justify-evenly">
            <div>
                <Image src={sm} className="min-w-full" alt="Logo" />
            </div>
            <Register />
        </div>
    )
}