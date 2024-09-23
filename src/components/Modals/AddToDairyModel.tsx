"use client";

import React from "react";
import { Modal } from "antd";
import AddToDairyForm from "../Form/AddToDairyForm";

interface ICardModel {
    handleCancel: () => void;
    onSave: () => void
    onCancel: () => void
    isModalOpen: boolean;
}

export default function AddToDairyModel(props: ICardModel) {
    const { handleCancel, isModalOpen, onCancel, onSave } = props;

    return (
        <>
            <Modal width={"50%"} footer={null} open={isModalOpen} onCancel={handleCancel} closable={false}>
                <div className="flex flex-col space-y-4">
                    <p className="whitespace-nowrap text-xl font-bold leading-6 text-gray-900">
                        Add Your Thought
                    </p>
                    <AddToDairyForm record={undefined} onSave={onSave} onCancel={onCancel} edit={false} />
                </div>
            </Modal>
        </>
    );
}
