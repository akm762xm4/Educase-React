import { useNavigate } from "react-router-dom";

export const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-end md:justify-center h-screen gap-4 p-4 md:px-[35%] bg-primary">
      <span className="text-4xl font-bold">Welcome to PopX</span>
      <span className=" text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas natus
        corporis fugiat dolorum alias vitae?
      </span>
      <div className="flex flex-col gap-2 pt-4">
        <button
          onClick={() => navigate("/register")}
          className="bg-accent text-white font-semibold  p-2 rounded cursor-pointer hover:opacity-[90%]"
        >
          Create Account
        </button>
        <button
          onClick={() => navigate("/login")}
          className="bg-accent/30 font-semibold  p-2 rounded cursor-pointer hover:opacity-[90%]"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};
