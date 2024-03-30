"use client";

import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import Login from "@/components/Auth/General/Login/Login";

export default function LoginForm() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",

  })
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);


  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      toast.success("Login success");
      router.push("/profile");
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  return (
    <div className="flex flex-col space-y-5 w-[25rem]">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-6 bg-gray-100 py-3 px-6 rounded-md">
          <div>
            <MailOutlineRoundedIcon />
          </div>
          <div className="flex flex-col w-full">
            <input
              placeholder="example@gmail.com"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              type="text"
              className="border-2 h-8 w-full text-sm bg-gray-100 outline-none border-none"
            />
          </div>
        </div>
        <div className="flex items-center space-x-6 bg-gray-100 py-3 px-6 rounded-md">
          <div>
            <LockOutlinedIcon />
          </div>
          <div className="flex flex-col w-full">
            <input
              placeholder="••••••"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              type="password"
              className="border-2 h-8 w-full text-sm bg-gray-100 outline-none border-none tracking-widest"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <p className="text-sm">Remember Me</p>
        </div>
        <div>
          <Link href="forgot-password">
            <p className="hover:underline text-sm cursor-pointer">
              Forgot Password?
            </p>
          </Link>
        </div>
      </div>
      <div className="flex space-x-4">
        <div>
          <button onClick={onLogin} className="rounded-lg border-2 py-2 px-3 text-sm">
            Login Now
          </button>
        </div>
        <div>
          <Link href="signup">
            <button className="rounded-lg border-2 py-2 px-3 text-sm">
              Create Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
