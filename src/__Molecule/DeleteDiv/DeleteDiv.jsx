import React, { useRef } from "react";
import Button from "../../__Atom/Button/Button";

function DeleteDiv({ DivAppear, DeleteComment, comment }) {
  const deleteRef = useRef(null);

  function outsideClick(event) {
    if (!deleteRef.current.contains(event.target)) {
      DivAppear();
    }
  }
  document.addEventListener("mousedown", outsideClick);

  function TaskDeleted() {
    DeleteComment(comment.id);
    DivAppear();
  }

  return (
    <>
      <div className=" pl-[10px] pr-[10px] w-full absolute h-full bg-[rgba(0,0,0,0.5)] left-0 top-[0px] flex justify-center items-center">
        <div
          ref={deleteRef}
          className="h-[252px] rounded-lg max-w-[400px] w-full bg-white p-[32px] flex flex-col justify-between "
        >
          <h3 className="text-[#334253] text-2xl font-normal ">
            Delete comment
          </h3>
          <p className="text-[#67727E] font-normal text-base">
            Are you sure you want to delete this comment? This will remove the
            comment and can’t be undone.
          </p>
          <div className="flex justify-between gap-[5px]">
            <Button
              btnText="NO,CANCEL"
              btnColor="bg-[#67727E]"
              btnWidth="w-[161px]"
              onClick={DivAppear}
            />
            <Button
              btnText="YES,DELETE"
              btnColor="bg-[#ED6368]"
              btnWidth="w-[161px]"
              onClick={TaskDeleted}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteDiv;
