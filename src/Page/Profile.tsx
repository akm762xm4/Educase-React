import { FaCamera } from "react-icons/fa";
import ProfilePic from "../assets/profilePic.png";
export const Profile = () => {
  return (
    <div className=" text-[#1D2226] flex flex-col bg-[#F7F8F9] md:px-[35%] h-screen md:justify-center pb-8">
      <div className="bg-[#FFFFFF] p-3 text-[18px]">Account Settings</div>
      <div className="flex p-4 gap-4">
        <span className="relative">
          <img className="w-20 h-20" src={ProfilePic} alt="Error 404" />
          <span className="absolute top-13 left-15 bg-[#6C25FF] p-1.5 rounded-full">
            <FaCamera className="size-3" color="white" />
          </span>
        </span>
        <span className="flex flex-col">
          <span className="text-[15px] font-bold">Marry Doe</span>
          <span className="text-[14px]">Marry@Gmail.Com</span>
        </span>
      </div>
      <div className="p-4 text-[14px]">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </div>
      <div className="border border-[#CBCBCB] border-dashed" />
      <div className="border border-[#CBCBCB] border-dashed mt-auto" />
    </div>
  );
};
