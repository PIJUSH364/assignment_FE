import React, { useCallback, useEffect, useState } from "react";
import Modal from "../common/Modal";
import ContactModel from "../common/modal/ContactModel";
import { useDispatch } from "react-redux";
import { setCurrentPage, setSearchValue } from "../../features/contactSlice";
import { useFetchContacts } from "../custom/Hook/useFetchContacts";
import FilterModel from "../common/modal/FilterModel";

const defaultFormData = {
  name: "",
  email: "",
  phone_number: "",
  status: "draft",
  tag: "",
};

export default function Action() {
  const dispatch = useDispatch();
  const fetchContacts = useFetchContacts();
  const [searchInput, setSearchInput] = useState("");
  const [shouldShow, setShouldShow] = useState(false);
  const [selectModal, setSelectModal] = useState({
    filterModal: false,
    newContactModal: false,
  });

  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      if (timer) clearTimeout(timer); // Clear previous timer
      timer = setTimeout(() => {
        func(...args); // Execute the function after delay
      }, delay);
    };
  };

  const debouncedSearch = useCallback(
    debounce((value) => {
      dispatch(setSearchValue(value));
      dispatch(setCurrentPage(1));
      fetchContacts(value, 1);
    }, 500), //  after 1 sec its tiger
    []
  );

  const handleSearch = (e) => {
    setSearchInput(e.target.value.trim());
    debouncedSearch(e.target.value.trim());
  };

  return (
    <>
      <div className="flex justify-between bg-[#292c30] p-4 pb-8 rounded-[10px] rounded-b-[0px]">
        <div className="flex gap-4">
          <button className="flex gap-2 w-[18rem] bg-transparent border-2 border-[#79808c]  text-white  py-[6px] px-2 rounded-[4px]">
            <input
              className="w-full bg-transparent outline-none text-[#79808c] placeholder-[#79808c] font-[3px]"
              type="text"
              placeholder="Search By ..."
              value={searchInput}
              onChange={handleSearch}
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
            className="flex gap-2 bg-[#a83281] hover:bg-white hover:text-[#a83281]  text-white font-[3px] py-[6px] px-4 rounded-[4px]"
          >
            <p>
              <i className="fa-solid fa-filter"></i>
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
            className="flex gap-2 bg-[#a83281] hover:bg-white hover:text-[#a83281]  text-white font-[3px] py-[6px] px-4 rounded-[4px]"
          >
            <p>+</p>
            <p> Add new</p>
          </button>
        </div>
      </div>

      <Modal shouldShow={shouldShow} setShouldShow={setShouldShow}>
        {selectModal.filterModal && (
          <FilterModel
            setShouldShow={setShouldShow}
            setSearchInput={setSearchInput}
          />
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
