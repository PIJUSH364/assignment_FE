import React from "react";
import Action from "./Action";
import Table from "./Table";
import SideNavBar from "./SideNavBar";
export default function Home() {
  return (
    <div className="flex h-screen">
      <SideNavBar />
      <div className="flex flex-col w-full p-4 pt-0">
        <Action />
        <Table />
      </div>
    </div>
  );
}
