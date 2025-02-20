import toast from "react-hot-toast";

export const showConfirmationToast = (action = () => { }) => {
  toast.custom((t) => (
    <div className="bg-white w-64 p-4 rounded-md shadow-lg border flex flex-col items-center font-nunito">
      <p className="text-gray-800 font-medium text-base">Are you sure?</p>
      <div className="mt-3 flex gap-3">
        <button
          onClick={() => {
            toast.dismiss(t.id);
            action()
            console.log("User clicked Yes");
          }}
          className="bg-green-500 text-white px-6 py-1 rounded-md font-nunito font-normal text-sm"
        >
          Yes
        </button>
        <button
          onClick={() => toast.dismiss(t.id)}
          className="bg-red-500 text-white px-6 py-1 rounded-md font-nunito font-normal text-sm"
        >
          No
        </button>
      </div>
    </div>
  ));
};

import React from "react";
