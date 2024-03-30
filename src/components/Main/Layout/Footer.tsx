import React from "react";
import Image from "next/image";
import Logo from "@/stuff/logo-removebg.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const FooterItemsArray = [
  {
    id: "1",
    items: "Products",
    subitems: [
      "Why NextGen?",
      "Product Updates",
      "Security",
      "Status",
      "Email Marketing",
      "Transactional Email",
    ],
  },
  {
    id: "2",
    items: "Resources",
    subitems: [
      "Marketing Library",
      "Marketing Tools",
      "Marketing Glossary",
      "Integration Directory",
    ],
  },
  {
    id: "3",
    items: "Community",
    subitems: ["Agencies", "Freelancers", "Developers", "Events"],
  },
  {
    id: "4",
    items: "Company",
    subitems: ["Careers", "Newsroom", "Our Story", "Accessibility"],
  },
];

function FooterItems() {
  return (
    <div className="flex space-x-16 text-[15px]">
      {FooterItemsArray.map((item) => (
        <div key={item.id}>
          <h2 className="mb-6 text-md font-semibold text-gray-900 uppercase">
            {item.items}
          </h2>
          <ul className="text-gray-500 leading-7 dark:text-gray-400 font-medium">
            {item.subitems.map((subitem, index) => (
              <li key={index}>
                <a href="#" className="hover:underline">
                  {subitem}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <div className="w-full flex flex-col px-16 py-6 space-y-8">
      <div className="flex justify-between items-center">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-3">
            <Image src={Logo} className="w-11 h-11" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Next<span className="text-teal-700">G</span>en
            </span>
          </div>
          <p className="text-[15px] w-[15rem]">
            with new challenges, featured solutions, selected articles and our
            latest news
          </p>
          <div className="flex space-x-4">
            <input
              placeholder="example@gmail.com"
              type="text"
              className="border-2 h-10 text-sm outline-none p-4 rounded-lg"
            />
            <button className="rounded-lg border-2 p-2 text-sm">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex space-x-16 text-[15px]">
          <FooterItems />
          <div className="w-[15rem] flex flex-col">
            <h2 className="mb-6 text-md font-semibold text-gray-900 uppercase">
              Contact Us
            </h2>
            <p className="leading-6">
              (555) 123-4567 support@nextgen.com 1234 Social Media Street Suite
              567 Cityville, Digitaland 54321 United States
            </p>
            <div className="flex mt-4">
              <FacebookIcon
                style={{ fontSize: "25px" }}
                className="hover:text-teal-700 cursor-pointer mr-2"
              />
              <TwitterIcon
                style={{ fontSize: "25px" }}
                className="hover:text-teal-700 cursor-pointer mx-2"
              />
              <LinkedInIcon
                style={{ fontSize: "25px" }}
                className="hover:text-teal-700 cursor-pointer mx-2"
              />
              <InstagramIcon
                style={{ fontSize: "25px" }}
                className="hover:text-teal-700 cursor-pointer mx-2"
              />
              <YouTubeIcon
                style={{ fontSize: "25px" }}
                className="hover:text-teal-700 cursor-pointer ml-2"
              />
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="flex items-center justify-between text-gray-900 text-[15px]">
        <p>© 2023 NextGen Software, All rights reserved.</p>
        <div className="flex space-x-4">
          <p className="hover:underline cursor-pointer">Privacy Policy</p>
          <p className="hover:underline cursor-pointer">Terms of Use</p>
          <p className="hover:underline cursor-pointer">Cookie Policy</p>
          <p className="hover:underline cursor-pointer">License</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
