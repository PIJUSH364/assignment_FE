export default DeleteModal = ({ setShouldShow }) => {
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
