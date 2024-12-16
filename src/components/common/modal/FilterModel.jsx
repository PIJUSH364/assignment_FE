import React, { useState } from "react";

export default function FilterModel({ setShouldShow, setSearchInput }) {
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleFilter = (status) => {
    setSearchInput("");
    setTimeout(() => {
      setShouldShow(false);
    }, 1000);
  };
  return (
    <div className="w-full bg-[#4f545bcf] rounded-[8px]">
      <p
        className="text-end p-2 pr-4 cursor-pointer"
        onClick={() => setShouldShow(false)}
      >
        <i className="fa-solid fa-x "></i>
      </p>
      <div className="flex gap-4 justify-center py-8">
        <button
          onClick={() => {
            setSelectedStatus("draft");
            handleFilter("draft");
          }}
          className={` font-[3px] p-2 px-8 rounded-[20px] ${
            selectedStatus === "draft"
              ? "bg-white text-[#303339]"
              : "bg-[#303339] text-white"
          }  `}
        >
          Draft
        </button>
        <button
          onClick={() => {
            handleFilter("finalized");
            setSelectedStatus("finalized");
          }}
          className={` font-[3px] p-2 px-8 rounded-[20px] ${
            selectedStatus === "finalized"
              ? "bg-white text-[#303339]"
              : "bg-[#303339] text-white"
          } `}
        >
          Finalized
        </button>
      </div>
    </div>
  );
}
