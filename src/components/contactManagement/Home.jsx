import React, { useEffect } from "react";
import SideNavBar from "./SideNavBar";
import { useSelector } from "react-redux";
import { useFetchContacts } from "../custom/Hook/useFetchContacts";

export default function Home() {
  const loaderStatus = useSelector((state) => state.contact.loaderStatus);
  const contactList = useSelector((state) => state.contact.contactList);
  const searchValue = useSelector((state) => state.contact.searchValue);
  const currentPage = useSelector((state) => state.contact.currentPage);
  const filterValue = useSelector((state) => state.contact.filterValue);
  const fetchContacts = useFetchContacts();
  return null
  useEffect(() => {
    fetchContacts(searchValue, currentPage, filterValue);
  }, []);

  return (
    <div className="flex  h-screen">
      <SideNavBar className="sm:block hidden" /> {/* Hide on small screens */}
      <div className="flex flex-col w-full p-4 pt-0">
        <Action />
        {loaderStatus ? (
          <CustomSkelton msg="Loading..." />
        ) : contactList.length > 0 ? (
          <Table />
        ) : (
          <CustomSkelton msg="No record found!   :)" />
        )}
      </div>
    </div>
  );
}

export const CustomSkelton = ({ msg = "Loading..." }) => {
  return (
    <div className="min-h-[55vh] flex justify-center items-center text-[#303339]  text-center rounded-bl-[10px] rounded-br-[10px]">
      <p className="tracking-wider text-xl font-nunito">{msg}</p>
    </div>
  );
};
