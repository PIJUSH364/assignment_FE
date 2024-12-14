import React from "react";

export default function Action() {
  return (
    <div className="flex justify-between bg-[#292c30] p-4 pb-8 rounded-[10px] rounded-b-[0px]">
      <div className="flex gap-4">
        <button className="flex gap-2 w-[18rem] bg-transparent border-2 border-[#79808c]  text-white  py-[6px] px-2 rounded-[4px]">
          <input
            className="w-full bg-transparent outline-none text-[#79808c] placeholder-[#79808c] font-[3px]"
            type="text"
            placeholder="Search By ..."
            name=""
            id=""
          />
        </button>
      </div>

      <div>
        <button class="flex gap-2 bg-[#a83281] hover:bg-white hover:text-[#a83281]  text-white font-[3px] py-[6px] px-4 rounded-[4px]">
          <p>+</p>
          <p> Add new</p>
        </button>
      </div>
    </div>
  );
}
