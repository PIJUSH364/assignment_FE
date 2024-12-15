import React, { useCallback, useEffect, useState } from "react";
import Modal from "../common/Modal";
import axios from "axios";
import { baseurl } from "../../env";

import InputField from "../common/InputField";
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
          <NewContactModal
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
const inputClass =
  "w-full bg-[#292c30] outline-none text-[#79808c] placeholder-[#79808c] font-[3px] p-2 rounded-[4px]";

const NewContactModal = ({ setShouldShow, defaultFormData }) => {
  const [formData, setFormData] = useState(defaultFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value?.trim() }));
  }, []);

  const handleSubmit = async () => {
    const { name, email, phone_number } = formData;

    if (!name || !email || !phone_number) {
      alert("Please fill out all required fields.");
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await axios.post(`${baseurl}/create_contact`, formData);
      alert(res.data.message);

      if (res.status === 200) {
        setFormData(defaultFormData);
        setShouldShow(false);
      }
    } catch (err) {
      alert(err.response?.data?.message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setShouldShow(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="w-full bg-[#4f545bcf] rounded-[8px]">
      <p
        className="text-end p-2 pr-4 cursor-pointer"
        onClick={() => setShouldShow(false)}
      >
        <i className="fa-solid fa-x"></i>
      </p>
      <p className="text-center py-4 text-[22px] tracking-wider">New Contact</p>
      <div className="flex flex-col gap-4 p-10 pt-4 pb-8 ">
        <InputField
          name="name"
          placeholder="Name *"
          value={formData.name}
          onChange={handleChange}
        />
        <InputField
          type="email"
          name="email"
          placeholder="Email *"
          value={formData.email}
          onChange={handleChange}
        />
        <InputField
          type="number"
          name="phone_number"
          placeholder="Phone number *"
          value={formData.phone_number}
          onChange={handleChange}
        />
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="draft">Draft</option>
          <option value="finalized">Finalized</option>
        </select>
        <InputField
          type="text"
          name="tag"
          placeholder="Tag"
          value={formData.tag}
          onChange={handleChange}
        />
        <button
          className="w-full bg-[#292c30] font-[3px] p-2 rounded-[4px] bg-[#a83281] hover:bg-white hover:text-[#a83281] text-white mt-4"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
};
