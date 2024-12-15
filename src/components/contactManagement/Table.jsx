import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import axios from "axios";
import { baseurl } from "../../env";
import Modal from "../common/Modal";
import { ContactModal } from "./Action";

export default function Table() {
  const [data, setData] = useState([]);
  const [EditContactData, setEditContactData] = useState(null);
  const [deleteContactId, setDeleteContactId] = useState(null);
  const [loader, setLoader] = useState(true);
  const [metaData, setSetaData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [shouldShow, setShouldShow] = useState(false);

  const [selectModal, setSelectModal] = useState({
    deleteModal: false,
    editContactModal: false,
  });

  useEffect(() => {
    axios
      .get(`${baseurl}/all_contact?page=${currentPage}&limit=${5}`)
      .then((res) => {
        if (res.data.code == 200 && res.data.data.data) {
          setData(res.data.data.data);
          setSetaData(res.data.data.meta);
        }
      })
      .catch((error) => {
        console.log("error", error.message);
      })
      .finally(() => {
        setLoader(false);
      });
  }, [currentPage]);

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
                            setDeleteContactId(contact.id);
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
            <Pagination
              metaData={metaData}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </>
        )}
      </div>
      <Modal shouldShow={shouldShow} setShouldShow={setShouldShow}>
        {selectModal.deleteModal && (
          <DeleteModal setShouldShow={setShouldShow} id={deleteContactId} />
        )}
        {selectModal.editContactModal && (
          <ContactModal
            setShouldShow={setShouldShow}
            defaultFormData={EditContactData}
            isEditModal={true}
          />
        )}
      </Modal>
    </>
  );
}

const buttonStyles =
  "bg-[#a83281] hover:bg-white hover:text-[#a83281] text-white font-medium p-2 px-8 rounded-[4px] mt-4";
const DeleteModal = ({ setShouldShow, id }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      const res = await axios.delete(`${baseurl}/delete_contact/${id}`);
      if (res.status === 200) {
        alert(res.data.message);
        setShouldShow(false);
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
};
