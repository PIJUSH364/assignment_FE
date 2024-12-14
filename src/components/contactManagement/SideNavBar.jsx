import React from "react";

export default function SideNavBar() {
  const data = [
    {
      tag: "Software",
      number: 34567,
    },
    {
      tag: "Doctor",
      number: 3488567,
    },
    {
      tag: "driver",
      number: 5534567,
    },
    {
      tag: "farmer",
      number: 2334567,
    },
  ];
  return (
    <div className="w-1/5 bg-[#292c30] p-2 pl-4 rounded-tr-[10px] ">
      <p className="pb-12 text-[16px]">LISTS</p>
      <div className="flex flex-col gap-4">
        {data.map((ele, index) => (
          <div key={index} className="cursor-pointer">
            <p className="capitalize text-[15px]">{ele.tag}</p>
            <p className="text-[13px] font-light tracking-wide transform transition-all duration-300 ease-in-out hover:scale-110 hover:pl-2">
              {ele.number}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
