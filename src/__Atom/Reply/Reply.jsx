import React from "react";
import ReplyImg from "../../assets/Images/Reply.png";

function Reply() {
  return (
    <>
      <div className="flex gap-[8px] items-center">
        <img src={ReplyImg} className="w-[14px] h-[12px]" alt="reply" />
        <h3 className="text-[#5357B6] text-base font-normal">Reply</h3>
      </div>
    </>
  );
}

export default Reply;
