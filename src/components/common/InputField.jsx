import React from "react";

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
      className="input_class"
    />
  );
}
