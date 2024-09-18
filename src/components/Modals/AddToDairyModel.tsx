"use client";

import React, { useState } from "react";
import { Modal } from "antd";
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddToDairyForm from "../Form/AddToDairyForm";

export default function AddToDairyModel() {
    const [isModalOpen, setIsModalOpen] = useState(false);

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
            <Modal width={"50%"} footer={null} open={isModalOpen} onCancel={handleCancel}>
                <div className="flex flex-col space-y-4">
                    <p className="whitespace-nowrap text-xl font-bold leading-6 text-gray-900">
                        Add Your Thought
                    </p>
                    <AddToDairyForm />
                </div>
            </Modal>
        </>
    );
}
