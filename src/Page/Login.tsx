import { useNavigate } from "react-router-dom";
import { Input } from "../Component/Input";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 p-4 justify-center h-screen md:px-[35%]">
      <div className="text-4xl font-bold">Signin to your PopX account</div>
      <span className="text-gray-500 mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
        facilis enim! Repudiandae dolore nesciunt tenetur?
      </span>
      <form>
        <div className="flex flex-col gap-4">
          <Input label="Email address" required />
          <Input label="Password" required />
          <button
            type="submit"
            onClick={() => navigate("/profile")}
            className="bg-secondary/30 text-white font-semibold  p-2 rounded cursor-pointer hover:opacity-[90%] "
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
