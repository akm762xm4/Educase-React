import type { RegisterValues } from "../Page/Register";

interface InputProps {
  label: string;
  type?: string;
  name: string;
  required?: boolean;
  placeholder: string;
  setValues: React.Dispatch<React.SetStateAction<RegisterValues>>;
}

export const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  required = false,
  placeholder,
  setValues,
  name,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((rest) => ({ ...rest, [name]: value }));
  };
  return (
    <div className="relative">
      <input
        title={label}
        type={type}
        name={name}
        placeholder={placeholder}
        className="outline-none border border-[#CBCBCB] placeholder:text-[#919191] rounded-[6px] w-full p-3 text-[14px] font-semibold"
        onChange={handleChange}
      />
      <label className="absolute left-2 -top-2.5 bg-[#F7F8F9] text-[13px] px-1 text-[#6C25FF] font-bold">
        {label} {required && <span className="text-[#DD4A3D]">*</span>}
      </label>
    </div>
  );
};
