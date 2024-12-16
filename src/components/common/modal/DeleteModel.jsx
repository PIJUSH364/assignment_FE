import React, { useState } from "react";
import axios from "axios";
import { baseurl } from "../../../env";

import { useFetchContacts } from "../../custom/Hook/useFetchContacts";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../../features/contactSlice";
const buttonStyles =
  "bg-[#a83281] hover:bg-white hover:text-[#a83281] text-white font-medium p-2 px-8 rounded-[4px] mt-4";

export default function DeleteModel({ setShouldShow, id }) {
  const fetchContacts = useFetchContacts();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const searchValue = useSelector((state) => state.contact.searchValue);
  const currentPage = useSelector((state) => state.contact.currentPage);
  const contactList = useSelector((state) => state.contact.contactList);
  const filterValue = useSelector((state) => state.contact.filterValue);
  const handleDelete = async () => {
    try {
      setIsLoading(true);
      const res = await axios.delete(`${baseurl}/delete_contact/${id}`);
      if (res.status === 200) {
        alert(res.data.message);
        setShouldShow(false);

        if (currentPage != 1 && contactList.length == 1) {
          dispatch(setCurrentPage(currentPage - 1));
          fetchContacts(searchValue, currentPage - 1, filterValue);
        } else {
          fetchContacts(searchValue, currentPage, filterValue);
        }
      } else {
        alert("Failed to delete the contact. Please try again.");
      }
    } catch (error) {
      alert("An error occurred while deleting the contact.");
      console.error("Error deleting contact:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="w-full bg-[#4f545bcf] rounded-[8px]">
      <p
        className="text-end p-2 pr-4 cursor-pointer"
        onClick={() => setShouldShow(false)}
      >
        <i className="fa-solid fa-x "></i>
      </p>
      <p className="text-center py-2 text-[22px] tracking-wider">
        Are you sure ?
      </p>
      <div className="flex justify-around pb-8">
        <button
          className={buttonStyles}
          onClick={handleDelete}
          disabled={isLoading}
        >
          {isLoading ? "Deleting..." : "Yes"}
        </button>
        <button
          className={buttonStyles}
          disabled={isLoading}
          onClick={() => setShouldShow(false)}
        >
          No
        </button>
      </div>
    </div>
  );
}
