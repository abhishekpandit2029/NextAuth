"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import StyleIcon from '@mui/icons-material/Style';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import StarsIcon from '@mui/icons-material/Stars';
import { RxDrawingPin } from "react-icons/rx";
import { FaRegCopy } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { MdOutlineAutoDelete } from "react-icons/md";
import AddToDairyModel from "@/components/Modals/AddToDairyModel";
import EditCardContentModel from "@/components/Modals/EditCardContentModel";
import { FaRegEdit } from "react-icons/fa";
import { Divider, message, Tabs, TabsProps } from "antd";
import axios from "axios";
import AddBoxIcon from '@mui/icons-material/AddBox';
import { DeleteAction } from "@/components/Dashboard/CardActions";
import { truncateString } from "@/constants/format";
import CardViewModel from "@/components/Modals/CardViewModel";
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import useSWR, { SWRConfiguration } from "swr"
import { useGetQuery } from "@/lib/fetcher";
import CardSkeleton from "@/components/Dashboard/CardSkeleton";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import ProfilePic from "@/stuff/pxfuel.jpg"
import AddIcon from '@mui/icons-material/Add';

export interface IThoughtCards {
    title: string,
    content: string,
    tags: string[],
    id: string;
}

interface IGetCardsData {
    thoughtCards: IThoughtCards[]
}


export default function ProfilePage() {
    const [selectedEntry, setSelectedEntry] = useState<IThoughtCards>();
    const [cardViewData, setCardViewData] = useState<IThoughtCards>();
    const [isEditCardModalOpen, setIsEditCardModalOpen] = useState(false);
    const [isAddNewModalOpen, setIsAddNewModalOpen] = useState(false);
    const [isCardModalOpen, setCardModalOpen] = useState(false);

    const { data, isLoading } = useGetQuery<IGetCardsData>("/thoughtcard/getcardsdata");

    useEffect(() => {
        if (!isEditCardModalOpen || !isAddNewModalOpen) {
            // mutate()
        }
    }, [isEditCardModalOpen, isAddNewModalOpen])


    // =====================================
    const handleClickAddNew = () => {
        setIsAddNewModalOpen(true);
    };
    const handleCancelAddNew = () => {
        setIsAddNewModalOpen(false);
    };
    const handleSaveAddNew = () => {
        setIsAddNewModalOpen(false);
        // useGetCardsData()
    };
    // =====================================

    // =====================================
    const handleClick = (entry: any) => {
        setSelectedEntry(entry);
        setIsEditCardModalOpen(true);
    };
    const handleCancel = () => {
        setIsEditCardModalOpen(false);
    };
    const handleSave = () => {
        setIsEditCardModalOpen(false);
        // useGetCardsData()
    };
    // =====================================

    const handleClickCardView = (entry: any) => {
        setCardModalOpen(true);
        setCardViewData(entry)
    };

    const handleCancelCardView = () => {
        setCardModalOpen(false);
    };

    const handleCopy = (content: string) => {
        navigator.clipboard.writeText(content);
        message.success("Content copied successfully");
    };

    return (
        <div className="bg-white flex flex-col space-y-4 place-content-center my-3 tab:my-1 ml-0 lap:ml-4 lg:flex h-fit">
            {isAddNewModalOpen && (
                <AddToDairyModel
                    handleCancel={handleCancelAddNew}
                    isModalOpen={isAddNewModalOpen}
                    onSave={handleSaveAddNew}
                    onCancel={handleCancelAddNew}
                />
            )}
            {isEditCardModalOpen && (
                <EditCardContentModel
                    handleCancel={handleCancel}
                    isModalOpen={isEditCardModalOpen}
                    initialData={selectedEntry}
                    onSave={handleSave}
                    onCancel={handleCancel}
                />
            )}
            {isCardModalOpen && (
                <CardViewModel
                    handleCancel={handleCancelCardView}
                    isModalOpen={isCardModalOpen}
                    initialData={cardViewData}
                />
            )}
            <div className="rounded-2xl ring-1 ring-gray-200 lg:flex w-full p-3 tab:p-4">
                {/* <CardSkeleton /> */}
                <div className="w-full lap:w-2/3 flex flex-col space-y-4 items-center tab:items-start">
                    <div className="flex tab:space-x-12 space-y-4 tab:space-y-0 space-x-0 items-center flex-col tab:flex-row">
                        <Image src={ProfilePic} alt="profile-pic" className="rounded-full w-[8rem]" />
                        <div className="flex space-x-6">
                            <div className="flex flex-col items-center">
                                <p className="font-semibold text-lg tab:text-xl">12</p>
                                <p>Posts</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="font-semibold text-lg tab:text-xl">123M</p>
                                <p>Followers</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="font-semibold text-lg tab:text-xl">1234k</p>
                                <p>Followings</p>
                            </div>
                        </div>

                    </div>
                    <div>
                        <p>Daily writer sharing personal reflections, experiences, and thoughts. Passionate about self-growth, mindfulness, and capturing life's meaningful moments.</p>
                        <p> <a href="www.personalportfolio.com">www.personalportfolio.com</a> </p>
                    </div>
                </div>
            </div>

            <div className="cursor-pointer border-dashed border-2 border-gray-200 flex justify-center rounded-2xl p-3" onClick={handleClickAddNew}>
                <AddIcon /> Add New
            </div>

            <div className="bg-white flex flex-col space-y-1 rounded-2xl ring-1 ring-gray-200 lg:flex h-full ">
                {isLoading ? (
                    <Grid container wrap="wrap" gap={3} justifyContent={"start"} padding={2}>
                        {Array.from({ length: 3 }).map((_, index) => (
                            <CardSkeleton key={index} />
                        ))}
                    </Grid>
                ) : (
                    <div className="grid grid-cols-1 tab:grid-cols-3 lap:grid-cols-4 desk:grid-cols-5 gap-3 tab:gap-4 p-3 tab:p-4">
                        {Array.isArray(data?.thoughtCards) &&
                            data?.thoughtCards?.map((items, index) => (
                                <div key={index} className="ring-1 ring-inset ring-gray-300 p-4 rounded-2xl flex flex-col space-y-3 w-full tab:max-w-[18rem] h-fit">
                                    <div>
                                        <p className="font-bold text-lg">{items?.title}</p>
                                    </div>
                                    <div className="cursor-pointer" onClick={() => handleClickCardView(items)}>
                                        <p>{truncateString(items?.content, 100)}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">{items?.tags?.join(" ")}</p>
                                    </div>
                                    <Divider />
                                    <div className="flex space-x-4 justify-end items-center">
                                        <FaRegEdit
                                            className="cursor-pointer text-lg tab:text-xl hover:text-indigo-500 hover:scale-110 ease-in-out transition duration-200"
                                            onClick={() => handleClick(items)}
                                        />
                                        <FaRegCopy
                                            className="cursor-pointer text-lg tab:text-xl hover:text-indigo-500 hover:scale-110 ease-in-out transition duration-200"
                                            onClick={() => handleCopy(items?.content)}
                                        />
                                        <DeleteAction record={items} />
                                    </div>
                                </div>
                            ))}
                    </div>
                )}
            </div>
        </div>
    );
}
