import React, { useState } from "react";

export default function Pagination({ metaData, setCurrentPage, currentPage }) {
  const [pageRange, setPageRange] = useState(
    new Array(metaData.totalPages).fill(null).map((_, index) => index + 1)
  );

  return (
    <div className="flex items-center justify-center p-8 bg-[#292c30] rounded-bl-[10px] rounded-br-[10px]">
      <ul className="flex items-center -space-x-px h-12 text-md cursor-pointer">
        <li
          onClick={() => {
            setPageRange((prevRange) => {
              const range = [...prevRange];
              range[0] > 1 && range.unshift(range[0] - 1);
              if (range.length > 5) range.pop();
              setCurrentPage(range[0]);
              return range;
            });
          }}
          className="flex items-center justify-center px-3 h-12 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 bg-[#303339] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-tl-[8px]  rounded-bl-[8px]"
        >
          <i class="fa-solid fa-angle-left"></i>
        </li>
        {pageRange.map((pageIndex) => (
          <li
            key={pageIndex}
            onClick={() => setCurrentPage(pageIndex)}
            className={`flex items-center justify-center px-3 h-12 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 bg-[#303339] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
              pageIndex == currentPage ? "bg-gray-700" : ""
            }`}
          >
            {pageIndex}
          </li>
        ))}

        <li
          onClick={() => {
            setPageRange((prevRange) => {
              if (metaData.totalPages == prevRange[prevRange.length - 1])
                return prevRange;
              const range = [...prevRange];
              range.push(range[range.length - 1] + 1);
              if (range.length > 5) range.shift();
              setCurrentPage(range[range.length - 1]);
              return range;
            });
          }}
          className="flex items-center justify-center px-3 h-12 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 bg-[#303339] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-br-[8px]  rounded-tr-[8px]"
        >
          <i class="fa-solid fa-angle-right"></i>
        </li>
      </ul>
    </div>
  );
}
