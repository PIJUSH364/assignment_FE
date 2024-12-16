import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function SideNavBar() {
  const categoryContactData = useSelector(
    (state) => state.contact.categoryContactData
  );

  useEffect(() => {}, [categoryContactData]);

  return (
    <div
      className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/5 bg_primary p-4 rounded-tr-[10px] rounded-br-[10px]"
      style={{ height: "calc(100vh - 85px)" }}
    >
      {/* Replace '64px' with the height of your nav bar */}
      <p className="pb-12 text-[16px]">LISTS</p>
      <div className="flex flex-col gap-4">
        {categoryContactData &&
          categoryContactData.map((ele, index) => (
            <div key={index} className="cursor-pointer">
              <p className="capitalize text-[15px]">{ele.tag}</p>
              <p className="side_bar_number">{ele.count}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
