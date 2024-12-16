import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import InputField from "../InputField";
import { baseurl } from "../../../env";
import { useFetchContacts } from "../../custom/Hook/useFetchContacts";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const inputClass =
  "w-full bg-[#292c30] outline-none text-[#79808c] placeholder-[#79808c] font-[3px] p-2 rounded-[4px]";

export default function ContactModel({
  setShouldShow,
  defaultFormData,
  isEditModal = false,
}) {
  const fetchContacts = useFetchContacts();
  const searchValue = useSelector((state) => state.contact.searchValue);
  const currentPage = useSelector((state) => state.contact.currentPage);

  const filterValue = useSelector((state) => state.contact.filterValue);
  const [formData, setFormData] = useState(defaultFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value?.trim() }));
  }, []);

  const handleSubmit = async () => {
    try {
      const { name, email, phone_number } = formData;

      if (!name || !email || !phone_number) {
        alert("Please fill out all required fields.");
        return;
      }

      const config = {
        method: isEditModal ? "PUT" : "POST", // The dynamic method (GET, POST, PUT, DELETE, etc.)
        url: `${baseurl}/${
          isEditModal
            ? `update_contact/${defaultFormData.id}`
            : "create_contact"
        }`,
        data: formData,
      };
      setIsSubmitting(true);
      const res = await axios(config);

      if (res.status === 200) {
        toast.success(res.data.message);
        setFormData(defaultFormData);
        setShouldShow(false);
        fetchContacts(searchValue, currentPage, filterValue);
      }
    } catch (err) {
      toast.error(
        err.response?.data?.message || "An unexpected error occurred."
      );
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
      <p className="text-center py-4 text-[22px] tracking-wider">
        {isEditModal ? "Edit" : "New"} Contact
      </p>
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
          {isSubmitting
            ? `${isEditModal ? "Updating..." : "Submitting..."} `
            : `${isEditModal ? "Update" : "Submit"} `}
        </button>
      </div>
    </div>
  );
}
