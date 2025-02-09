import React from "react";

function Button({ btnText, AddComment }) {
  return (
    <>
      <button
        onClick={AddComment}
        type="button"
        className=" w-[104px] h-[48px] border-none rounded-lg bg-[#5357B6] text-white"
      >
        {btnText}
      </button>
    </>
  );
}

export default Button;
