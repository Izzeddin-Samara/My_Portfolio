import React from "react";

interface InputProps {
  type: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  name: string;
  error?: string;
}

const InputField: React.FC<InputProps> = ({
  type,
  value,
  onChange,
  name,
  error,
}) => {
  return (
    <div className="w-full flex flex-col">
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        className={`w-full border border-gray-500 outline-none focus:ring-3 text-md md:text-md md:p-4 p-4 rounded-lg focus:ring-purple-700 mt-4 ${
          error
            ? "border-red-600 focus:ring-red-600"
            : "border-gray-300 focus:ring-blue-800"
        }`}
      />
      {error && <span className="text-red-600 text-[14px] mt-2">{error}</span>}
    </div>
  );
};

export default InputField;