import React from "react";
import { Modal } from "antd";
import AddToDairyForm from "../Form/AddToDairyForm";
import { IThoughtCards } from "@/app/dashboard/profile/page";

interface ICardModel {
    handleCancel: () => void;
    onSave: () => void
    onCancel: () => void
    isModalOpen: boolean;
    initialData: IThoughtCards | undefined
}

export default function EditCardContentModel(props: ICardModel) {
    const { handleCancel, isModalOpen, initialData, onCancel, onSave } = props;

    return (
        <>
            <Modal
                width={"50%"}
                footer={null}
                open={isModalOpen}
                onCancel={handleCancel}
            >
                <div className="flex flex-col space-y-4">
                    <p className="whitespace-nowrap text-xl font-bold leading-6 text-gray-900">
                        Add Your Thought
                    </p>
                    <AddToDairyForm record={initialData} onSave={onSave} onCancel={onCancel} />
                </div>
            </Modal>
        </>
    );
}
