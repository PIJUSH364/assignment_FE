import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import axios from "axios";
import { baseurl } from "../../env";
import Modal from "../common/Modal";

export default function Table() {
  const [data, setData] = useState([]);
  const [EditContactData, setEditContactData] = useState(null);

  const [loader, setLoader] = useState(true);
  const [selectModal, setSelectModal] = useState({
    deleteModal: false,
    editContactModal: false,
  });

  useEffect(() => {
    axios
      .get(`${baseurl}/all_contact`)
      .then((res) => {
        if (res.data.code == 200 && res.data.data) {
          setData(res.data.data);
        }
      })
      .catch((error) => {
        console.log("error", error.message);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);

  const [shouldShow, setShouldShow] = useState(false);
  return (
    <>
      {" "}
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
                        <i
                          onClick={() => {
                            setEditContactData(contact);
                            setShouldShow(true);
                            setSelectModal(() => ({
                              deleteModal: false,
                              editContactModal: true,
                            }));
                          }}
                          className="fa-regular fa-pen-to-square text-blue-500 hover:text-blue-700 cursor-pointer"
                        ></i>
                        <i
                          className="fa-solid fa-trash text-red-500 hover:text-red-700 cursor-pointer"
                          onClick={() => {
                            setShouldShow(true);
                            setSelectModal(() => ({
                              deleteModal: true,
                              editContactModal: false,
                            }));
                          }}
                        ></i>

                        {/*  <i class="fa-solid fa-magnifying-glass"></i> */}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <Pagination />
          </>
        )}
      </div>
      <Modal shouldShow={shouldShow} setShouldShow={setShouldShow}>
        {selectModal.deleteModal && (
          <DeleteModal setShouldShow={setShouldShow} />
        )}
        {selectModal.editContactModal && (
          <EditContactModal
            setShouldShow={setShouldShow}
            data={EditContactData}
          />
        )}
      </Modal>
    </>
  );
}

const DeleteModal = ({ setShouldShow }) => {
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
        <button className=" bg-[#292c30] font-[3px] p-2 px-8 rounded-[4px] bg-[#a83281] hover:bg-white hover:text-[#a83281]  text-white mt-4">
          Yes
        </button>
        <button className=" bg-[#292c30] font-[3px] p-2 px-8 rounded-[4px] bg-[#a83281] hover:bg-white hover:text-[#a83281]  text-white mt-4">
          No
        </button>
      </div>
    </div>
  );
};

const EditContactModal = ({ setShouldShow, data }) => {
  return (
    <div className="w-full bg-[#4f545bcf] rounded-[8px]">
      <p
        className="text-end p-2 pr-4 cursor-pointer"
        onClick={() => setShouldShow(false)}
      >
        <i className="fa-solid fa-x "></i>
      </p>
      <p className="text-center py-4 text-[22px] tracking-wider">
        Edit Contact
      </p>
      <form className="flex flex-col gap-4 p-10 pt-4 pb-8 ">
        <input
          type="text"
          placeholder="Name"
          value={data.name}
          className="w-full bg-[#292c30] outline-none text-[#79808c] placeholder-[#79808c] font-[3px] p-2 rounded-[4px]"
        />
        <input
          value={data.email}
          type="email"
          placeholder="Email"
          className="w-full bg-[#292c30] outline-none text-[#79808c] placeholder-[#79808c] font-[3px] p-2 rounded-[4px]"
        />
        <input
          value={data.phone_number}
          type="number"
          placeholder="Phone number"
          className="w-full bg-[#292c30] outline-none text-[#79808c] placeholder-[#79808c] font-[3px] p-2 rounded-[4px]"
        />
        <select className="w-full bg-[#292c30] outline-none text-[#79808c] placeholder-[#79808c] font-[3px] p-2 rounded-[4px]">
          {
            <option value={data.status} disabled selected>
              {data.status}
            </option>
          }
          {data.status == "draft" && (
            <option
              value="Finalized"
              className="bg-[#292c30] hover:bg-[#292c30]"
            >
              Finalized
            </option>
          )}
          {data.status == "Finalized" && (
            <option value="Draft" className="bg-[#292c30] hover:bg-[#292c30]">
              Draft
            </option>
          )}
        </select>
        <input
          value={data.tag}
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
