import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Modal from "../common/Modal";

import { useSelector } from "react-redux";
import { useFetchContacts } from "../custom/Hook/useFetchContacts";
import DeleteModel from "../common/modal/DeleteModel";
import ContactModel from "../common/modal/ContactModel";

export default function Table() {
  const [EditContactData, setEditContactData] = useState(null);
  const [deleteContactId, setDeleteContactId] = useState(null);
  const [shouldShow, setShouldShow] = useState(false);
  const [selectModal, setSelectModal] = useState({
    deleteModal: false,
    editContactModal: false,
  });
  const loaderStatus = useSelector((state) => state.contact.loaderStatus);
  const contactList = useSelector((state) => state.contact.contactList);
  const searchValue = useSelector((state) => state.contact.searchValue);
  const currentPage = useSelector((state) => state.contact.currentPage);
  const fetchContacts = useFetchContacts();

  useEffect(() => {
    fetchContacts(searchValue, currentPage);
    alert("call form table");
  }, []);

  return (
    <>
      <div>
        {contactList && contactList.length > 0 && (
          <>
            <table className="border-b-[1px] border-[#79808c]">
              <thead className=" border-none">
                <tr>
                  <th className="border-none">Contact Id</th>
                  <th className="border-none">Name</th>
                  <th className="border-none">Email</th>
                  <th className="border-none">Phone</th>
                  <th className="border-none">Tag</th>
                  <th className="border-none">Status</th>
                  <th className="border-none text-center">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-[#79808c]">
                {loaderStatus ? (
                  <h1 className="text-center pt-16">Loading...</h1>
                ) : contactList.length > 0 ? (
                  contactList.map((contact, index) => (
                    <tr key={contact.id}>
                      <td>{contact.contact_id}</td>
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

                        {/*  <i className="fa-solid fa-magnifying-glass"></i> */}
                      </td>
                    </tr>
                  ))
                ) : (
                  <h1 className="text-center pt-16">No record found</h1>
                )}
              </tbody>
            </table>
            <Pagination />
          </>
        )}
      </div>
      <Modal shouldShow={shouldShow} setShouldShow={setShouldShow}>
        {selectModal.deleteModal && (
          <DeleteModel setShouldShow={setShouldShow} id={deleteContactId} />
        )}
        {selectModal.editContactModal && (
          <ContactModel
            setShouldShow={setShouldShow}
            defaultFormData={EditContactData}
            isEditModal={true}
          />
        )}
      </Modal>
    </>
  );
}
