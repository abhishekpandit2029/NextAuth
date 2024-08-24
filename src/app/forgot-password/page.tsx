import ForgotPassword from "@/components/Auth/General/ForgotPassword/ForgotPassword";
import Image from "next/image";
import forgotpassword from "@/stuff/forgotpassword.svg";

export default function ForgotPasswordPage() {
  return (
    <div className="flex tab:px-8 tab:pb-4 lap:px-16 lap:pb-8 items-center justify-evenly">
      <div className="hidden tab:flex">
        <Image src={forgotpassword} className="min-w-full" alt="Logo" />
      </div>
      <ForgotPassword />
    </div>
  );
}
