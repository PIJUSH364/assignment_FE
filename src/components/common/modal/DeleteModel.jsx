import React, { useState } from "react";
export default function DeleteModel() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("Deleted!");
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-sm md:max-w-md p-6 rounded-lg shadow-lg">
        <p className="text-end text-gray-600 cursor-pointer text-lg">
          <i className="fa-solid fa-x"></i>
        </p>
        <p className="text-center text-xl font-semibold text-gray-800 font-nunito">
          Are you sure?
        </p>
        <div className="flex justify-between mt-6">
          <button className={`delete-modal-btn`} onClick={handleDelete} disabled={isLoading}>
            {isLoading ? "Deleting..." : "Yes"}
          </button>
          <button className={`delete-modal-btn`}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}
