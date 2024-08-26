"use client";

import React, { useState } from "react";
import { Modal } from "antd";
import { Button } from "@mui/base/Button";
import LoginForm from "../Auth/Form/LoginForm";
import google from "@/stuff/google.svg";
import facebook from "@/stuff/facebook.svg";
import twitter from "@/stuff/twitter.svg";
import Image from "next/image";
import { isAuthenticate } from "@/constants/strings";
import { useRouter } from "next/navigation";

export default function SignupModal() {
  const { push } = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    isAuthenticate ? push("/profile") :
      setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        onClick={showModal}
        className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        Get started
      </Button>
      <Modal footer={null} open={isModalOpen} onCancel={handleCancel}>
        <div className="flex flex-col space-y-4 justify-center items-center">
          <LoginForm />
          <hr className="w-[50%] self-center" />
          <div className="flex flex-col justify-between items-center space-y-2">
            <p className="text-sm">Or you can join with</p>
            <div className="flex space-x-4">
              <Image src={google} className="w-8" alt="google" />
              <Image src={facebook} className="w-8" alt="facebook" />
              <Image src={twitter} className="w-8" alt="twitter" />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
