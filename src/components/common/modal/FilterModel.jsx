import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilterValue } from "../../../features/contactSlice";
import { useFetchContacts } from "../../custom/Hook/useFetchContacts";

export default function FilterModel({ setShouldShow, setSearchInput }) {
  const dispatch = useDispatch();
  const fetchContacts = useFetchContacts();
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleFilter = (status) => {
    setSearchInput("");
    dispatch(setFilterValue(status));
    setSelectedStatus(status);
    fetchContacts("", 1, status);
    setTimeout(() => {
      setShouldShow(false);
    }, 500);
  };
  return (
    <div className="modal_bg">
      <p
        className="text-end p-2 pr-4 cursor-pointer"
        onClick={() => setShouldShow(false)}
      >
        <i className="fa-solid fa-x "></i>
      </p>
      <div className="flex gap-4 justify-center py-8">
        <button
          onClick={() => handleFilter("draft")}
          className={` font-[3px] p-2 px-8 rounded-[20px] ${
            selectedStatus === "draft"
              ? "bg-white text-[#303339]"
              : "bg-[#303339] text-white"
          }  `}
        >
          Draft
        </button>
        <button
          onClick={() => handleFilter("finalized")}
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
