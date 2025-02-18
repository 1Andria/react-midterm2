import React from "react";
import Person from "../../assets/Images/Person.png";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addDefaultLocale(en);
import ReactTimeAgo from "react-time-ago";

function Personal({ comment }) {
  return (
    <>
      <div className="flex gap-[16px] items-center ">
        <img src={Person} alt="person" />
        <h3 className=" text-[#334253] font-normal ">Mike</h3>
        <p className="text-[#67727E]">
          <ReactTimeAgo date={comment.id} locale="en-US" />
        </p>
      </div>
    </>
  );
}

export default Personal;
