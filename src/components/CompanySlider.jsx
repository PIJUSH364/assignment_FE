import React from "react";
import CompanyName from "./common/CompanyName";

export const CompanySlider = () => {
  return (
    <div className="bg-white text-black py-10">
      <h1 className="text-center pt-8 pb-2 font-medium text-4xl tracking-wide">
        Teams at their top of recruiting game use Kula
      </h1>
      <div className="flex pt-20 ">
        <marquee behavior="smooth" direction="left">
          <img
            src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63063be12b0d3754d167b98e_locad.svg"
            alt="company-logo"
          />
        </marquee>
      </div>
    </div>
  );
};
