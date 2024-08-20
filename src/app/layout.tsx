import type { Metadata } from "next";
import "@/app/globals.css"
import { Poppins } from "next/font/google";
import Dashboardlayout from "@/components/Main/Layout/Dashboardlayout";
import { TokenProvider } from "@/context/TokenProvider";

const oppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "DailyQuill",
  description: "Home page of DailyQuill",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oppins.className}>
        <TokenProvider>
          <Dashboardlayout>
            {children}
          </Dashboardlayout></TokenProvider>
      </body></html>
  );
}
