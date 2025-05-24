import { useNavigate } from "react-router-dom";
import { Input } from "../Component/Input";
import { useState } from "react";

export interface RegisterValues {
  fullName?: string;
  phone?: number | null;
  email: string;
  password: string;
  company?: string;
  isAgency?: string;
}

export const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState<RegisterValues>({
    fullName: "",
    phone: null,
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(values);
    navigate("/profile");
  };
  return (
    <div className="bg-[#F7F8F9] flex flex-col gap-4 p-4 justify-center h-screen md:px-[35%]">
      <div className="text-[28px] text-[#1D2226] font-bold pb-6">
        Create your PopX account
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <Input
            label="Full Name"
            name="fullName"
            placeholder="Enter full name"
            setValues={setValues}
            required
          />
          <Input
            label="Phone Number"
            name="phone"
            type="tel"
            placeholder="Enter phone number"
            setValues={setValues}
            required
          />
          <Input
            label="Email address"
            name="email"
            type="email"
            placeholder="Enter email address"
            setValues={setValues}
            required
          />
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Enter password"
            setValues={setValues}
            required
          />
          <Input
            label="Company Name"
            placeholder="Enter company name"
            setValues={setValues}
            name="company"
          />
          <div className="flex flex-col gap-1 px-2">
            <label className="text-[13px]">
              Are you an Agency?<span className="text-red-500">*</span>
            </label>
            <div className="flex gap-4 text-[14px]">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  checked
                  className="accent-[#642AF5]"
                  name="isAgency"
                />
                <span className="text-xs">Yes</span>
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  className="accent-[#642AF5]"
                  name="isAgency"
                />
                <span className="text-xs">No</span>
              </label>
            </div>
          </div>
          <input
            type="submit"
            className="text-[16px] disabled:bg-[#CBCBCB] bg-[#6C25FF] text-white font-semibold  p-2 rounded cursor-pointer  mt-24 md:mt-0"
            value="Create Account"
            disabled={
              values.fullName === "" ||
              values.phone === null ||
              values.phone?.toString().length !== 10 ||
              values.email === "" ||
              values.password === "" ||
              values.company === ""
            }
          />
        </div>
      </form>
    </div>
  );
};
