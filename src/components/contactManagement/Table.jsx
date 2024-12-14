import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import axios from "axios";
import { baseurl } from "../../env";

export default function Table() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios
      .get(`${baseurl}/all_contact`)
      .then((res) => {
        if (res.data.code == 200 && res.data.data) {
          setData([...res.data.data]);
        }
      })
      .catch((error) => {
        console.log("error", error.message);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);
  console.log(data);
  return (
    <div>
      {loader && <h1 className="text-center pt-16">Loading...</h1>}
      {!loader && data.length === 0 && (
        <h1 className="text-center pt-16">No record found</h1>
      )}
      {data && data.length > 0 && (
        <>
          <table className="border-b-[1px] border-[#79808c]">
            <thead className=" border-none">
              <tr>
                <th className="border-none">
                  <input
                    type="checkbox"
                    className="w-5 h-5 appearance-none border border-white bg-gray-500 rounded-md focus:ring-2 focus:ring-white cursor-pointer"
                  />
                </th>
                <th className="border-none">Name</th>
                <th className="border-none">Email</th>
                <th className="border-none">Phone</th>
                <th className="border-none">Tag</th>
                <th className="border-none">Status</th>
                <th className="border-none text-center">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#79808c]">
              {data &&
                data.map((contact, index) => (
                  <tr key={contact.id}>
                    <td>
                      <input
                        type="checkbox"
                        className="w-5 h-5 appearance-none border border-white bg-gray-500 rounded-md focus:ring-2 focus:ring-white cursor-pointer"
                      />
                    </td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone_number}</td>
                    <td>
                      <button className=" bg-[#303339] px-4 py-[1px] rounded-[4px] text-[15px] capitalize">
                        {contact.tag}
                      </button>
                    </td>
                    <td>
                      <button
                        className={` bg-[#303339] px-4 py-[1px] rounded-[4px] text-[15px] capitalize border-[1px] border-[#${
                          index == 1 ? "48bb78" : "4299e1"
                        }]`}
                      >
                        {contact.status}
                      </button>
                    </td>
                    <td className="flex gap-4 justify-center">
                      <i className="fa-regular fa-pen-to-square text-blue-500 hover:text-blue-700 cursor-pointer"></i>
                      <i className="fa-solid fa-trash text-red-500 hover:text-red-700 cursor-pointer"></i>

                      {/*
                  <button className="action-btn delete-btn"> */}
                      {/* <i class="fa-solid fa-filter"></i>
                    <i class="fa-solid fa-magnifying-glass"></i> */}
                      {/* </button> */}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <Pagination />
        </>
      )}
    </div>
  );
}
