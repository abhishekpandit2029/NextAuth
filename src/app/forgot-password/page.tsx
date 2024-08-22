import ForgotPassword from "@/components/Auth/General/ForgotPassword/ForgotPassword";
import Image from "next/image";
import forgotpassword from "@/stuff/forgotpassword.svg";

export default function ForgotPasswordPage() {
  return (
    <div className="px-16 pb-8 flex items-center justify-evenly">
      <div>
        <Image src={forgotpassword} className="min-w-full" alt="Logo" />
      </div>
      <ForgotPassword />
    </div>
  );
}
