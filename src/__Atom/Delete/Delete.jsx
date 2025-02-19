import React from "react";
import Bin from "../../assets/Images/Delete.png";

function Delete({ onClick }) {
  return (
    <>
      <div
        className="flex gap-[8px] items-center cursor-pointer"
        onClick={onClick}
      >
        <img src={Bin} className="h-[14px] w-[12px]" alt="reply" />
        <h3 className="text-[#ED6368] text-base font-normal max-[427px]:hidden">
          Delete
        </h3>
      </div>
    </>
  );
}
export default Delete;
