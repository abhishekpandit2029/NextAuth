import { MdOutlineAutoDelete } from "react-icons/md";
import React from 'react';
import type { PopconfirmProps } from 'antd';
import { message, Popconfirm } from 'antd';
import { useCardUpdateMutation } from "../Modals/EditCardContentModel";
import { useDeleteMutation } from "@/lib/fetcher";
import { MdOutlineDelete } from "react-icons/md";
import { MdOutlineRestore } from "react-icons/md";
import revalidate from "@/lib/revalidate";


export function SoftDeleteAction(record: any) {
    const { update } = useCardUpdateMutation("Content deleted successfully");

    const confirm: PopconfirmProps['onConfirm'] = async () => {
        update({
            id: record?.record?._id,
            isSoftDelete: true
        })
    };

    return (
        <Popconfirm
            title="Delete The Content"
            description="Are you sure you want to delete this content?"
            onConfirm={confirm}
            okText="Yes"
            cancelText="No"
            arrow={false}
            placement="topRight"
        >
            <MdOutlineAutoDelete className="cursor-pointer text-[1.2rem] tab:text-[1.4rem] hover:text-indigo-500 hover:scale-110 ease-in-out transition duration-200" />
        </Popconfirm>
    );
}

export function RestoreDeleteAction(record: any) {
    const { update } = useCardUpdateMutation("Content deleted successfully");

    const confirm: PopconfirmProps['onConfirm'] = async () => {
        update({
            id: record?.record?._id,
            isSoftDelete: false
        })
    };

    return (
        <Popconfirm
            title="Restore The Content"
            description="Are you sure you want to Restore this content?"
            onConfirm={confirm}
            okText="Yes"
            cancelText="No"
            arrow={false}
            placement="topRight"
        >
            <MdOutlineRestore className="cursor-pointer text-[1.2rem] tab:text-[1.4rem] hover:text-indigo-500 hover:scale-110 ease-in-out transition duration-200" />
        </Popconfirm>
    );
}

export function HardDeleteAction(record: any) {
    const { trigger } = useDeleteMutation(
        "/thoughtcard/deletecarddata",
        {
            onSuccess() {
                message.success("Content deleted successfully");
                revalidate("/thoughtcard/getcardsdata");
            },
        }
    );

    const confirm: PopconfirmProps['onConfirm'] = async () => {
        trigger({
            id: record?.record?._id
        })
    };

    return (
        <Popconfirm
            title="Delete The Content Permanently"
            description="Are you sure you want to delete this content Permanently?"
            onConfirm={confirm}
            okText="Yes"
            cancelText="No"
            arrow={false}
            placement="topRight"
        >
            <MdOutlineDelete className="cursor-pointer text-[1.2rem] tab:text-[1.4rem] hover:text-indigo-500 hover:scale-110 ease-in-out transition duration-200" />
        </Popconfirm>
    );
}
