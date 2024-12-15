import React, { useCallback, useEffect, useState } from "react";
import Modal from "../common/Modal";
import axios from "axios";
import { baseurl } from "../../env";
import InputField from "../common/InputField";
import ContactModel from "../common/modal/ContactModel";
const defaultFormData = {
  name: "",
  email: "",
  phone_number: "",
  status: "draft",
  tag: "",
};

export default function Action() {
  const [shouldShow, setShouldShow] = useState(false);
  const [selectModal, setSelectModal] = useState({
    filterModal: false,
    newContactModal: false,
  });

  return (
    <>
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

        <div className="flex gap-4">
          <button
            onClick={() => {
              setShouldShow(true);
              setSelectModal(() => ({
                filterModal: true,
                newContactModal: false,
              }));
            }}
            classname="flex gap-2 bg-[#a83281] hover:bg-white hover:text-[#a83281]  text-white font-[3px] py-[6px] px-4 rounded-[4px]"
          >
            <p>
              <i classname="fa-solid fa-filter"></i>
            </p>
            <p>Filter</p>
          </button>
          <button
            onClick={() => {
              setShouldShow(true);
              setSelectModal(() => ({
                filterModal: false,
                newContactModal: true,
              }));
            }}
            classname="flex gap-2 bg-[#a83281] hover:bg-white hover:text-[#a83281]  text-white font-[3px] py-[6px] px-4 rounded-[4px]"
          >
            <p>+</p>
            <p> Add new</p>
          </button>
        </div>
      </div>

      <Modal shouldShow={shouldShow} setShouldShow={setShouldShow}>
        {selectModal.filterModal && (
          <FilterModal setShouldShow={setShouldShow} />
        )}

        {selectModal.newContactModal && (
          <ContactModel
            setShouldShow={setShouldShow}
            defaultFormData={defaultFormData}
          />
        )}
      </Modal>
    </>
  );
}

const FilterModal = ({ setShouldShow }) => {
  const [selectedStatus, setSelectedStatus] = useState("");
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
          onClick={() => setSelectedStatus("Draft")}
          className={` font-[3px] p-2 px-8 rounded-[20px] ${
            selectedStatus === "Draft"
              ? "bg-white text-[#303339]"
              : "bg-[#303339] text-white"
          }  `}
        >
          Draft
        </button>
        <button
          onClick={() => setSelectedStatus("Finalized")}
          className={` font-[3px] p-2 px-8 rounded-[20px] ${
            selectedStatus === "Finalized"
              ? "bg-white text-[#303339]"
              : "bg-[#303339] text-white"
          } `}
        >
          Finalized
        </button>
      </div>
    </div>
  );
};
