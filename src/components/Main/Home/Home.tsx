import React from "react";
import Image from "next/image";
import sm from "@/stuff/sm1 (3).svg";

export default function Home() {
  return (
    <div className="px-16 flex justify-between items-center mb-8">
      <div>
        <div className="font-[900]">
          <p className="text-[4rem] text-teal-700">
            Content <span className="text-[3rem] text-black">for</span>{" "}
          </p>
          <p className="text-[3rem]">
            your{" "}
            <span className="text-[3.5rem] text-teal-700">Profile&#39;s</span>{" "}
          </p>
          <p className="text-[3rem]">
            crafted by{" "}
            <span className="text-[3.5rem] whitespace-nowrap text-teal-700">
              Creative minds.
            </span>
          </p>
        </div>
        <p className="mt-2">
          Nextgen is a premier short-form content agency. We make content that
          customers and algorithms love.
        </p>
      </div>
      <div>
        <Image src={sm} alt="Logo" />
      </div>
    </div>
  );
}
