import React from "react";
import Action from "./Action";
import Table from "./Table";
import SideNavBar from "./SideNavBar";

export default function Home() {
  return (
    <div
      className="bg-white text-black py-4 px-4 "
      style={{ border: "2px solid red" }}
    >
      <div className="flex gap-2">
        <SideNavBar />
        <div
          className="flex flex-col w-full"
          style={{ border: "2px solid black" }}
        >
          <Action />
          <Table />
        </div>
      </div>
    </div>
  );
}
