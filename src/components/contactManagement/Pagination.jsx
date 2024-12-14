import React, { useState } from "react";

export default function Pagination() {
  const [pageRange, setPageRange] = useState(
    new Array(5).fill(null).map((_, index) => index + 1)
  );

  return (
    <div className="flex items-center justify-center p-8 bg-[#292c30] rounded-bl-[10px] rounded-br-[10px]">
      <ul className="flex items-center -space-x-px h-12 text-md cursor-pointer">
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-3 h-12 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 bg-[#303339] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-tl-[8px]  rounded-bl-[8px]"
          >
            <span className="sr-only">Previous</span>
            <i class="fa-solid fa-angle-left"></i>
          </a>
        </li>
        {pageRange.map((pageIndex) => (
          <li
            key={pageIndex}
            className="flex items-center justify-center px-3 h-12 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 bg-[#303339] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            {pageIndex}
          </li>
        ))}

        <li>
          <a
            href="#"
            className="flex items-center justify-center px-3 h-12 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 bg-[#303339] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-br-[8px]  rounded-tr-[8px]"
          >
            <i class="fa-solid fa-angle-right"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
