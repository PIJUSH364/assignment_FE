export default EditContactModal = ({ setShouldShow }) => {
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
          className="w-full bg-[#292c30] outline-none text-[#79808c] placeholder-[#79808c] font-[3px] p-2 rounded-[4px]"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-[#292c30] outline-none text-[#79808c] placeholder-[#79808c] font-[3px] p-2 rounded-[4px]"
        />
        <input
          type="number"
          placeholder="Phone number"
          className="w-full bg-[#292c30] outline-none text-[#79808c] placeholder-[#79808c] font-[3px] p-2 rounded-[4px]"
        />
        <select className="w-full bg-[#292c30] outline-none text-[#79808c] placeholder-[#79808c] font-[3px] p-2 rounded-[4px]">
          <option value="Draft" disabled selected>
            Draft
          </option>
          <option value="Finalized" className="bg-[#292c30] hover:bg-[#292c30]">
            Finalized
          </option>
        </select>
        <input
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
