import React from "react";
import Person from "../../assets/Images/Person.png";
import CommentInput from "../../__Atom/CommentInput/CommentInput";
import Button from "../../__Atom/Button/Button";
function Comment({ commentValue, AddComment, setCommentValue }) {
  return (
    <>
      <div className="max-w-[730px] w-full h-[144px] bg-white p-[24px] flex justify-between rounded-lg ">
        <img src={Person} alt="person" className=" w-[40px] h-[40px]" />
        <CommentInput
          commentValue={commentValue}
          setCommentValue={setCommentValue}
        />
        <Button
          onClick={AddComment}
          btnText="SEND"
          btnColor="bg-[#5357B6]"
          btnWidth="w-[104px]"
        />
      </div>
    </>
  );
}

export default Comment;
