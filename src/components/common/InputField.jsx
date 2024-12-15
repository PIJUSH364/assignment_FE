import React from "react";
const inputClass =
  "w-full bg-[#292c30] outline-none text-[#79808c] placeholder-[#79808c] font-[3px] p-2 rounded-[4px]";

export default function InputField({
  type = "text",
  name,
  placeholder,
  value,
  onChange = () => {},
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={inputClass}
    />
  );
}
