import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPage,
  setCustomPageRange,
} from "../../features/contactSlice";
import { useFetchContacts } from "../custom/Hook/useFetchContacts";

export default function Pagination() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.contact.currentPage);
  const searchValue = useSelector((state) => state.contact.searchValue);
  const contactMetaData = useSelector((state) => state.contact.contactMetaData);
  const filterValue = useSelector((state) => state.contact.filterValue);
  const pageRange = useSelector((state) => state.contact.pageRange);
  const fetchContacts = useFetchContacts();

  useEffect(() => {}, [pageRange]);

  const handlePageChange = (newPage) => {
    dispatch(setCurrentPage(newPage));
    fetchContacts(searchValue, newPage, filterValue);
  };

  return (
    <div className="flex items-center justify-center p-8 bg_primary rounded-bl-[10px] rounded-br-[10px] ">
      <ul className="flex items-center -space-x-px h-12 text-md cursor-pointer">
        <li
          onClick={() => {
            // If already on the first page, do nothing
            if (currentPage === 1) return;

            const updatedRange =
              pageRange[0] > 1
                ? [pageRange[0] - 1, ...pageRange]
                : [...pageRange];

            if (updatedRange.length > 5) updatedRange.pop();
            dispatch(setCustomPageRange(updatedRange));
            handlePageChange(currentPage - 1);
          }}
          className={`flex items-center justify-center px-3 h-12 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 bg-[#303339] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-tl-[8px]  rounded-bl-[8px] ${
            currentPage === 1 && "cursor-not-allowed"
          }`}
        >
          <i className="fa-solid fa-angle-left"></i>
        </li>
        {pageRange.map((pageIndex) => (
          <li
            key={pageIndex}
            onClick={() => {
              if (pageIndex === currentPage) return;

              fetchContacts(searchValue, pageIndex, filterValue);
              dispatch(setCurrentPage(pageIndex));
            }}
            className={`flex items-center justify-center px-3 h-12 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 bg-[#303339] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
              pageIndex == currentPage ? "bg-gray-700" : ""
            }`}
          >
            {pageIndex}
          </li>
        ))}

        <li
          onClick={() => {
            const lastPageInRange = pageRange[pageRange.length - 1];
            // If already on the last page
            if (contactMetaData.totalPages === lastPageInRange) {
              if (currentPage !== lastPageInRange) {
                handlePageChange(currentPage + 1);
              }
              return -1;
            }
            const updatedRange = [...pageRange, lastPageInRange + 1];
            if (updatedRange.length > 5) updatedRange.shift(); // Keep the range size to 5
            dispatch(setCustomPageRange(updatedRange));
            handlePageChange(currentPage + 1);
          }}
          className={`flex items-center justify-center px-3 h-12 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 bg-[#303339] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-br-[8px]  rounded-tr-[8px]  ${
            currentPage === contactMetaData?.totalPages && "cursor-not-allowed"
          }`}
        >
          <i className="fa-solid fa-angle-right"></i>
        </li>
      </ul>
    </div>
  );
}
