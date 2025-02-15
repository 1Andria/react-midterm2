import React from "react";
import Person from "../../assets/Images/Person.png";
function Personal({ comment }) {
  return (
    <>
      <div className="flex gap-[16px] items-center ">
        <img src={Person} alt="person" />
        <h3 className=" text-[#334253] font-normal ">Mike</h3>
        <p className="text-[#67727E]">{comment.time}</p>
      </div>
    </>
  );
}

export default Personal;
