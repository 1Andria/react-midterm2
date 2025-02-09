import React from "react";
import Pen from "../../assets/Images/pen.png";
function Edit() {
  return (
    <>
      <div className="flex gap-[8px] items-center">
        <img src={Pen} className="w-[14px] h-[14px]" alt="reply" />
        <h3 className="text-[#5357B6] text-base font-normal">Edit</h3>
      </div>
    </>
  );
}

export default Edit;
