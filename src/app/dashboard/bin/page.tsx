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
import { HardDeleteAction, RestoreDeleteAction, SoftDeleteAction } from "@/components/Dashboard/CardActions";
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
import { MdOutlineDelete } from "react-icons/md";
import { MdRestore } from "react-icons/md";
import NoData from "@/stuff/NoData.svg"

export interface IThoughtCards {
    title: string,
    content: string,
    tags: string[],
    _id: string;
}

interface IGetCardsData {
    thoughtCards: IThoughtCards[]
}


export default function BinPage() {
    const { data } = useGetQuery<IGetCardsData>("/thoughtcard/getcardsdata");
    const BinData = data?.thoughtCards?.filter((items: any) => items?.isSoftDelete === true) || [];

    return (
        <div className="bg-white flex flex-col space-y-4  my-3 tab:my-1 ml-0 lap:ml-4 lg:flex min-h-screen rounded-2xl ring-1 ring-gray-200">
            <div className="">
                {BinData?.length === 0 ? (
                    <div className="flex flex-col items-center justify-center">
                        <Image src={NoData} className="w-[30rem]" alt="Logo" />
                        <p className="font-semibold text-lg text-center">No Data was deleted yet</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 tab:grid-cols-3 lap:grid-cols-4 desk:grid-cols-5 gap-3 tab:gap-4 p-3 tab:p-4">
                        {Array.isArray(data?.thoughtCards) &&
                            data?.thoughtCards?.filter((items: any) => items?.isSoftDelete === true).map((items, index) => (
                                <div key={index} className="ring-1 ring-inset ring-gray-300 p-4 rounded-2xl flex flex-col space-y-3 w-full tab:max-w-[18rem] h-fit">
                                    <div>
                                        <p className="font-bold text-lg">{items?.title}</p>
                                    </div>
                                    <div className="cursor-pointer">
                                        <p>{truncateString(items?.content, 100)}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">{items?.tags?.join(" ")}</p>
                                    </div>
                                    <Divider />
                                    <div className="flex space-x-4 justify-end items-center">
                                        <RestoreDeleteAction record={items} />
                                        <HardDeleteAction record={items} />
                                    </div>
                                </div>
                            ))}
                    </div>
                )}
            </div>
        </div>
    );
}
