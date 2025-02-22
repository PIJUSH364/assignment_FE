import React from 'react'


export const CustomSkelton = ({ msg = "Loading..." }) => {
  return (
    <div className="min-h-[55vh] flex justify-center items-center text-[#303339]  text-center rounded-bl-[10px] rounded-br-[10px]">
      <p className="tracking-wider text-xl font-nunito">{msg}</p>
    </div>
  );
};
