import React from "react";
import Likes from "../../__Atom/Likes/Likes";
import Personal from "../../__Atom/Personal/Personal";
import Reply from "../../__Atom/Reply/Reply";
import Delete from "../../__Atom/Delete/Delete";
import Edit from "../../__Atom/Edit/Edit";

function NewComment({ comment }) {
  return (
    <>
      <div className="max-w-[730px] w-full h-[144px] bg-white p-[24px] flex justify-between rounded-lg ">
        <Likes commentId={comment.id} />
        <div className="flex flex-col max-w-[618px] w-full">
          <div className="flex justify-between">
            <Personal comment={comment} />
            <div className="flex gap-[7px]">
              <Reply />
              <Delete />
              <Edit />
            </div>
          </div>
          <div className="w-full min-w-[75px] overflow-y-auto ">
            <p>{comment.information}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewComment;
