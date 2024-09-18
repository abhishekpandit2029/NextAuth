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
import { message } from "antd";


export interface IEntryData {
    title: string,
    content: string,
    tags: string[],
}

const entries = [
    {
        title: "Day 21 of Daily Writing",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ut.",
        tags: ["#writing", "#Emotion"]
    },
    {
        title: "Day 22 of Daily Writing",
        content: "Duis aute irure dolor in reprehenderit in voluptate velit esse Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium cillum.",
        tags: ["#motivation", "#inspiration"]
    },
    {
        title: "Day 23 of Daily Writing",
        content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium accusantium.",
        tags: ["#life", "#reflection"]
    },
    {
        title: "Day 24 of Daily Writing",
        content: "At vero eos et accusamus et iusto odio dignissimos ducimus Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium qui.",
        tags: ["#inspiration", "#personal-growth"]
    },
    {
        title: "Day 25 of Daily Writing",
        content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium odit.",
        tags: ["#creativity", "#writing-tips", "#love"]
    }
];

export default function DashboardPage() {
    const [selectedEntry, setSelectedEntry] = useState<IEntryData>();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = (entry: any) => {
        setSelectedEntry(entry);
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleCopy = (content: string) => {
        navigator.clipboard.writeText(content);
        message.success("Content copied successfully");
    };

    return (
        <div className="bg-white px-2 lg:px-8 h-screen">
            {isModalOpen && (
                <EditCardContentModel
                    handleCancel={handleCancel}
                    isModalOpen={isModalOpen}
                    initialData={selectedEntry}
                />
            )}
            <div className="max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:flex lg:max-w-none h-screen">
                <div className="rounded-2xl bg-gray-50 ring-1 ring-inset ring-gray-900/5 my-4 ml-4 min-w-[12rem]">
                    <div className="flex flex-col space-y-6 p-6">
                        <AddToDairyModel />
                        <Link href="" passHref>
                            <p className="whitespace-nowrap text-base font-semibold leading-6 text-gray-900">
                                <StarsIcon /> Achieve
                            </p>
                        </Link>
                        <Link href="" passHref>
                            <p className="whitespace-nowrap text-base font-semibold leading-6 text-gray-900">
                                <DeleteOutlineIcon /> Bin
                            </p>
                        </Link>
                        <Link href="" passHref>
                            <p className="whitespace-nowrap text-base font-semibold leading-6 text-gray-900">
                                <StyleIcon /> Tags
                            </p>
                        </Link>
                    </div>
                </div>

                <div className="p-4 lg:flex-auto overflow-y-scroll scrollbar-hide">
                    <div className="flex flex-col space-y-4">
                        {entries.map((entry, index) => (
                            <div
                                key={index}
                                className="ring-1 ring-inset ring-gray-300 p-4 rounded-2xl flex flex-col space-y-3"
                            >
                                <div>
                                    <p className="font-bold text-lg">{entry.title}</p>
                                </div>
                                <div>
                                    <p>{entry.content}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">{entry.tags.join(" ")}</p>
                                </div>
                                <div className="flex space-x-4 justify-end">
                                    <FaRegCopy className="cursor-pointer text-xl hover:text-indigo-500 hover:scale-110 ease-in-out transition duration-200"
                                        onClick={() => handleCopy(entry.content)} />
                                    <FaRegEdit
                                        className="cursor-pointer text-xl hover:text-indigo-500 hover:scale-110 ease-in-out transition duration-200"
                                        onClick={() => handleClick(entry)}
                                    />
                                    <MdOutlineAutoDelete className="cursor-pointer text-xl hover:text-indigo-500 hover:scale-110 ease-in-out transition duration-200" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
