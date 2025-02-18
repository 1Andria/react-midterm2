import React from "react";
import Pen from "../../assets/Images/pen.png";
function Edit({ onClick, setReplyed }) {
  function EditFunc() {
    onClick();
    setReplyed(null);
  }
  return (
    <>
      <div
        onClick={EditFunc}
        className="cursor-pointer flex gap-[8px] items-center"
      >
        <img src={Pen} className="w-[14px] h-[14px]" alt="reply" />
        <h3 className="text-[#5357B6] text-base font-normal max-[400px]:hidden">
          Edit
        </h3>
      </div>
    </>
  );
}

export default Edit;
