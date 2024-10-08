"use client";

import React from "react";
import SignupForm from "../../../Form/SignupForm";

export default function Signup() {
  return (
    <div className="flex flex-col space-y-5 w-screen tab:w-[25rem] px-6 tab:p-0">
      <div>
        <p className="text-[2.5rem]">Register newbie :)</p>
      </div>
      <div>
        <p className="text-sm">
          To keep connected with us please Register with your personal
          information by email address and password.
        </p>
      </div>
      <SignupForm />
    </div>
  );
}
