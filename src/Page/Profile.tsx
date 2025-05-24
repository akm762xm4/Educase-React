import { FaCamera } from "react-icons/fa";
import ProfilePic from "../assets/profilePic.jpg";
export const Profile = () => {
  return (
    <div className="flex flex-col bg-primary md;px-[35%] h-screen md:justify-center">
      <div className="bg-white p-3 text-xl md:text-2xl">Account Settings</div>
      <div className="flex p-4 gap-4">
        <span className="relative">
          <img
            className="w-20 h-20 rounded-full object-cover "
            src={ProfilePic}
            alt="Error 404"
          />
          <span className="absolute top-13 left-15 bg-accent p-1.5 rounded-full">
            <FaCamera className="size-3" color="white" />
          </span>
        </span>
        <span className="flex flex-col font-bold">
          <span>Marry Doe</span>
          <span className="text-gray-700">Marry@Gmail.Com</span>
        </span>
      </div>
      <div className="p-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
        exercitationem similique minus at inventore aut eius quia!
      </div>
    </div>
  );
};
