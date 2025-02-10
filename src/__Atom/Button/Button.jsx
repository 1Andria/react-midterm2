import React from "react";

function Button({ btnText, onClick, btnColor, btnWidth }) {
  return (
    <>
      <button
        onClick={onClick}
        type="button"
        className={`${btnWidth} h-[48px] border-none rounded-lg ${btnColor} text-white hover:cursor-pointer`}
      >
        {btnText}
      </button>
    </>
  );
}

export default Button;
