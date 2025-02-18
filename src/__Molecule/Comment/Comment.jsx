import React from "react";
import Person from "../../assets/Images/Person.png";
import CommentInput from "../../__Atom/CommentInput/CommentInput";
import Button from "../../__Atom/Button/Button";
function Comment({ commentValue, AddComment, setCommentValue, btnText }) {
  return (
    <>
      <div className=" max-[585px]:hidden max-w-[730px] w-full h-[144px] bg-white p-[24px] gap-[5px] flex justify-between rounded-lg ">
        <img src={Person} alt="person" className=" w-[40px] h-[40px]" />
        <CommentInput
          commentValue={commentValue}
          setCommentValue={setCommentValue}
        />
        <Button
          onClick={AddComment}
          btnText={btnText}
          btnColor="bg-[#5357B6]"
          btnWidth="w-[104px]"
        />
      </div>
      <div className=" min-[585px]:hidden max-w-[730px] gap-[16px] w-full h-auto bg-white p-[16px]  flex flex-col  rounded-lg ">
        <CommentInput
          commentValue={commentValue}
          setCommentValue={setCommentValue}
        />
        <div className="flex w-full justify-between">
          <img src={Person} alt="person" className=" w-[40px] h-[40px]" />
          <Button
            onClick={AddComment}
            btnText={btnText}
            btnColor="bg-[#5357B6]"
            btnWidth="w-[104px]"
          />
        </div>
      </div>
    </>
  );
}

export default Comment;
