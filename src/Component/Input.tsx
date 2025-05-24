interface InputProps {
  label: string;
  type?: string;
  required?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  required = false,
}) => {
  return (
    <div className="relative">
      <input
        title="label"
        type={type}
        className="outline-none border border-secondary/30 rounded w-full p-3 text-sm font-semibold"
        value="Marry Doe"
        readOnly
      />
      <label className="absolute left-2 -top-2.5 bg-white text-xs px-1 text-accent font-bold">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
    </div>
  );
};
