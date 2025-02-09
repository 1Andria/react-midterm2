import React from "react";
import Bin from "../../assets/Images/Bin.png";

function Delete() {
  return (
    <>
      <div className="flex gap-[8px] items-center">
        <img src={Bin} className="h-[14px] w-[12px]" alt="reply" />
        <h3 className="text-[#ED6368] text-base font-normal">Delete</h3>
      </div>
    </>
  );
}
export default Delete;
