import { useNavigate } from "react-router-dom";
import { Input } from "../Component/Input";

export const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 p-4 justify-center h-screen md:px-[35%]">
      <div className="text-4xl font-bold pb-6">Create your PopX account</div>
      <form>
        <div className="flex flex-col gap-4">
          <Input label="Full Name" required />
          <Input label="Phone Number" required />
          <Input label="Email address" required />
          <Input label="Password" required />
          <Input label="Company Name" />
          <div className="flex flex-col gap-1 px-2">
            <label className="text-sm">
              Are you an Agency?<span className="text-red-500">*</span>
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  checked
                  className="accent-accent"
                  name="isAgency"
                />
                <span className="text-xs">Yes</span>
              </label>
              <label className="flex items-center gap-1">
                <input type="radio" className="accent-accent" name="isAgency" />
                <span className="text-xs">No</span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            onClick={() => navigate("/profile")}
            className="bg-accent text-white font-semibold  p-2 rounded cursor-pointer hover:opacity-[90%] mt-24 md:mt-0"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};
