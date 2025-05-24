import { useNavigate } from "react-router-dom";
import { Input } from "../Component/Input";
import { useState } from "react";

export interface LoginValues {
  email: string;
  password: string;
}

export const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState<LoginValues>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(values);
    navigate("/profile");
  };
  return (
    <div className="bg-[#F7F8F9] flex flex-col gap-4 p-4 md:justify-center h-screen md:px-[35%]">
      <div className="text-[28px] text-[#1D2226] font-bold">
        Signin to your PopX account
      </div>
      <span className="text-gray-500 text-[18px] mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </span>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <Input
            placeholder="Enter email address"
            label="Email address"
            name="email"
            type="email"
            setValues={setValues}
            required
          />
          <Input
            placeholder="Enter password"
            label="Password"
            name="password"
            type="password"
            setValues={setValues}
            required
          />
          <input
            type="submit"
            disabled={values.email === "" || values.password === ""}
            className="text-[16px] disabled:bg-[#CBCBCB] bg-[#6C25FF] text-white font-semibold  p-2 rounded cursor-pointer "
            value="Login"
          />
        </div>
      </form>
    </div>
  );
};
