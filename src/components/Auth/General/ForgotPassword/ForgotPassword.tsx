"use client";

import React from "react";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LockResetIcon from "@mui/icons-material/LockReset";
import ForgotPasswordForm from "../../Form/ForgotPasswordForm";

export default function ForgotPassword() {
  return (
    <div className="flex flex-col space-y-4 w-screen tab:w-[25rem] px-6 tab:p-0">
      <div>
        <p className="text-[2.5rem]">Reset Password :)</p>
      </div>
      <div>
        <p className="text-sm">
          To reset your password, please enter the email address you used for
          login.
        </p>
      </div>
      <ForgotPasswordForm />
    </div>
  );
}
