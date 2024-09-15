"use client";

import React, { useState } from "react";
import { Modal } from "antd";
import { Button } from "@mui/base/Button";
import LoginForm from "../Form/LoginForm";
import google from "@/stuff/google.svg";
import facebook from "@/stuff/facebook.svg";
import twitter from "@/stuff/twitter.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddToDairyForm from "../Form/AddToDairyForm";

export default function AddToDairy() {
    const { push } = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const isAuthenticate = typeof window !== 'undefined' ? localStorage?.getItem("isAuth") || "" : null

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <p className="whitespace-nowrap text-base font-semibold leading-6 text-gray-900 cursor-pointer" onClick={showModal}>
                <AddBoxIcon /> Add New
            </p>
            <Modal footer={null} open={isModalOpen} onCancel={handleCancel}>
                <div className="flex flex-col space-y-4 justify-center items-center">
                    <AddToDairyForm />
                </div>
            </Modal>
        </>
    );
}
