import React from "react";
import Image from "next/image";
import Creative from "../../../stuff/Creative.svg"
import SignupModal from "@/components/Modals/SignupModal";
import Link from "next/link";

export default function CTASection() {
  return (
    <div className="px-4">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="relative isolate overflow-hidden px-6 pt-16 sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Today&apos;s Steps, Tomorrow&apos;s Memories: Your Daily Journey Companion.

          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Capture life&apos;s moments, reflect, and cherish memories. Your personal journaling companion, making every day memorable.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <SignupModal />
            <Link href="#ProductOverview" passHref>
              <p className="text-sm font-semibold leading-6 text-black">
                Learn more <span aria-hidden="true">→</span>
              </p></Link>
          </div>
        </div>
        <div className="relative mt-16 h-80 lg:mt-8 hidden lap:flex">
          <Image
            alt="Creative"
            src={Creative}

            className="absolute left-0 top-0 max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
          />
        </div>
      </div>
    </div>
  );
}
