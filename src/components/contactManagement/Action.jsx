import React, { useState } from "react";
import Modal from "../common/Modal";

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
            class="flex gap-2 bg-[#a83281] hover:bg-white hover:text-[#a83281]  text-white font-[3px] py-[6px] px-4 rounded-[4px]"
          >
            <p>
              <i class="fa-solid fa-filter"></i>
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
            class="flex gap-2 bg-[#a83281] hover:bg-white hover:text-[#a83281]  text-white font-[3px] py-[6px] px-4 rounded-[4px]"
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
          <NewContactModal setShouldShow={setShouldShow} />
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

const NewContactModal = ({ setShouldShow }) => {
  return (
    <div className="w-full bg-[#4f545bcf] rounded-[8px]">
      <p
        className="text-end p-2 pr-4 cursor-pointer"
        onClick={() => setShouldShow(false)}
      >
        <i className="fa-solid fa-x "></i>
      </p>
      <p className="text-center py-4 text-[22px] tracking-wider">New Contact</p>
      <form className="flex flex-col gap-4 p-10 pt-4 pb-8 ">
        <input
          type="text"
          placeholder="Name"
          className="w-full bg-[#292c30] outline-none text-[#79808c] placeholder-[#79808c] font-[3px] p-2 rounded-[4px]"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-[#292c30] outline-none text-[#79808c] placeholder-[#79808c] font-[3px] p-2 rounded-[4px]"
        />
        <input
          type="number"
          placeholder="Phone number"
          className="w-full bg-[#292c30] outline-none text-[#79808c] placeholder-[#79808c] font-[3px] p-2 rounded-[4px]"
        />
        <select className="w-full bg-[#292c30] outline-none text-[#79808c] placeholder-[#79808c] font-[3px] p-2 rounded-[4px]">
          <option value="Draft" disabled selected>
            Draft
          </option>
          <option value="Finalized" className="bg-[#292c30] hover:bg-[#292c30]">
            Finalized
          </option>
        </select>
        <input
          type="text"
          placeholder="Tag"
          className="w-full bg-[#292c30] outline-none text-[#79808c] placeholder-[#79808c] font-[3px] p-2 rounded-[4px]"
        />

        <button className="w-full bg-[#292c30] font-[3px] p-2 rounded-[4px] bg-[#a83281] hover:bg-white hover:text-[#a83281]  text-white mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};
