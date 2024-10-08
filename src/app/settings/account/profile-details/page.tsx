"use client"

import ProfileInfoForm from "@/components/Form/ProfileInfoForm";
import useMe from "@/hooks/useMe";
import { useUpdateMe } from "@/hooks/useUpdateMe";
import { Button, FormInstance } from "antd";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";

export default function ProfileDetailsPage() {
    const formRef = useRef<FormInstance>(null);
    const { back } = useRouter();
    const { userData } = useMe()
    const { update, isMutating } = useUpdateMe()

    const onSubmit = () => {
        formRef.current?.validateFields().then((values) => {
            update({ ...values, id: userData?.data?._id, });
        });
    };

    return (
        <div className="flex flex-col items-center">
            <div className="w-[80%] flex flex-col space-y-3">
                <p onClick={() => back()} className="flex space-x-4 items-center cursor-pointer"><IoIosArrowBack /> Go back</p>
                <div className='flex flex-col space-y-4 items-center'>
                    <div className="rounded-2xl ring-1 ring-gray-200 lg:flex h-full bg-white flex flex-col space-y-4 place-content-center my-3 tab:my-1 ml-0 lap:ml-4 p-3 tab:p-4 w-full">
                        <p className='font-semibold text-xl'>Profile Information</p>
                        <div className='flex flex-col space-y-4'>
                            <ProfileInfoForm formRef={formRef} record={userData} />
                            <Button
                                key="save-button"
                                size="large"
                                loading={isMutating && true}
                                onClick={onSubmit}
                                className="!rounded-md !bg-indigo-500 w-full lap:w-[8rem] !text-white !hover:bg-indigo-500 outline-none"
                            >
                                Save
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
