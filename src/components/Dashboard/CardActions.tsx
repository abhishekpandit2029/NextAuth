import { MdOutlineAutoDelete } from "react-icons/md";
import React, { useEffect } from 'react';
import type { PopconfirmProps } from 'antd';
import { message, Popconfirm } from 'antd';
import axios from "axios";
import { useDeleteMutation } from "@/lib/fetcher";
import revalidate from "@/lib/revalidate";

export function DeleteAction(record: any) {
    const { trigger } = useDeleteMutation(
        "/thoughtcard/deletecarddata",
        {
            onSuccess() {
                message.success("Statement deleted successfully");
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
