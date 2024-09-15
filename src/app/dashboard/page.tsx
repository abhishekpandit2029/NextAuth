import Link from "next/link";
import StyleIcon from '@mui/icons-material/Style';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import StarsIcon from '@mui/icons-material/Stars';
import { RxDrawingPin } from "react-icons/rx";
import { FaRegCopy } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { MdOutlineAutoDelete } from "react-icons/md";
import AddToDairy from "@/components/Modals/AddToDairy";

const entries = [
    {
        title: "Day 21 of Daily Writing",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ut...",
        tags: ["#writing"]
    },
    {
        title: "Day 22 of Daily Writing",
        content: "Duis aute irure dolor in reprehenderit in voluptate velit esse Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium cillum...",
        tags: ["#motivation", "#inspiration"]
    },
    {
        title: "Day 23 of Daily Writing",
        content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium accusantium...",
        tags: ["#life", "#reflection"]
    },
    {
        title: "Day 24 of Daily Writing",
        content: "At vero eos et accusamus et iusto odio dignissimos ducimus Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium qui...",
        tags: ["#inspiration", "#personal-growth"]
    },
    {
        title: "Day 25 of Daily Writing",
        content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium odit...",
        tags: ["#creativity", "#writing-tips"]
    }
];

export default function DashboardPage() {
    return (
        <div className="bg-white px-2 lg:px-8 h-screen">
            <div className="max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:flex lg:max-w-none h-screen">
                <div className="rounded-2xl bg-gray-50 ring-1 ring-inset ring-gray-900/5 my-4 ml-4 min-w-[12rem]">
                    <div className="flex flex-col space-y-6 p-6">

                        <AddToDairy />
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
                            <div key={index} className="ring-1 ring-inset ring-gray-300 p-4 rounded-2xl flex flex-col space-y-3">
                                <div><p className="font-bold text-lg">{entry.title}</p></div>
                                <div><p>{entry.content}</p></div>
                                <div><p className="text-xs text-gray-500">{entry.tags.join(' ')}</p></div>
                                <div className="flex space-x-4 justify-end">
                                    <RxDrawingPin className="cursor-pointer text-xl" />
                                    <FaRegCopy className="cursor-pointer text-xl" />
                                    <CiEdit className="cursor-pointer text-xl" />
                                    <MdOutlineAutoDelete className="cursor-pointer text-xl" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
