import ForgotPassword from "@/components/Auth/General/ForgotPassword/ForgotPassword";
import Image from "next/image";
import sm from "@/stuff/sm1 (4).svg";

export default function ForgotPasswordPage() {
  return (
    <div className="px-16 pb-8 flex items-center justify-evenly">
      <div>
        <Image src={sm} className="min-w-full" alt="Logo" />
      </div>
      <ForgotPassword />
    </div>
  );
}
