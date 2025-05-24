import { useNavigate } from "react-router-dom";

export const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-end md:justify-center h-screen gap-4 p-4 md:px-[35%] bg-[#F7F8F9]">
      <span className="text-[28px] font-bold text-[#1D2226]">
        Welcome to PopX
      </span>
      <span className="text-[18px] text-[#1D2226] opacity-60">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </span>
      <div className="flex flex-col gap-2 pt-4">
        <button
          onClick={() => navigate("/register")}
          className="bg-[#6C25FF] text-[#FFFFFF] text-[16px] font-semibold  p-2 rounded-[6px] cursor-pointer hover:opacity-[90%]"
        >
          Create Account
        </button>
        <button
          onClick={() => navigate("/login")}
          className="bg-[#6C25FF4B] text-[#1D2226] font-semibold text-[16px] p-2 rounded-[6px] cursor-pointer hover:opacity-[90%]"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};
