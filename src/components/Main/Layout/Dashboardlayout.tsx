import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface ILayoutProps {
  children: ReactNode;
}

function Dashboardlayout({ children }: ILayoutProps) {
  return (
    <div className="h-full flex flex-col justify-between">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Dashboardlayout;
