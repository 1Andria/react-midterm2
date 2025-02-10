import React from "react";
import Button from "../../__Atom/Button/Button";

function DeleteDiv({ DivAppear, DeleteComment, comment }) {
  return (
    <>
      <div className=" w-full absolute h-full bg-[rgba(0,0,0,0.5)]  top-[0px] flex justify-center items-center">
        <div className="h-[252px] rounded-lg max-w-[400px] w-full bg-white p-[32px] ">
          <h3 className="text-[#334253] text-2xl font-normal ">
            Delete comment
          </h3>
          <p className="text-[#67727E] font-normal text-base">
            Are you sure you want to delete this comment? This will remove the
            comment and can’t be undone.
          </p>
          <div className="flex justify-between">
            <Button
              btnText="NO,CANCEL"
              btnColor="#5357B6"
              btnWidth="161px"
              onClick={DivAppear}
            />
            <Button
              btnText="YES,DELETE"
              btnColor="#5357B6"
              btnWidth="161px"
              onClick={() => DeleteComment(comment.id)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteDiv;
