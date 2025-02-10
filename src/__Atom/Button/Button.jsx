import React from "react";

function Button({ btnText, onClick, btnColor, btnWidth }) {
  return (
    <>
      <button
        onClick={onClick}
        type="button"
        className={`w-[${btnWidth}] h-[48px] border-none rounded-lg bg-[${btnColor}] text-white hover:cursor-pointer`}
      >
        {btnText}
      </button>
    </>
  );
}

export default Button;
