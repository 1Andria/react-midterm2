import React, { useState } from "react";
import Likes from "../../__Atom/Likes/Likes";
import Personal from "../../__Atom/Personal/Personal";
import Reply from "../../__Atom/Reply/Reply";
import Delete from "../../__Atom/Delete/Delete";
import Edit from "../../__Atom/Edit/Edit";
import DeleteDiv from "../DeleteDiv/DeleteDiv";
import Comment from "../Comment/Comment";

function NewComment({
  comment,
  DeleteComment,
  width,
  replyed,
  setReplyed,
  AddReply,
}) {
  const [deleteDiv, setDeleteDiv] = useState(false);
  const [replyValue, setReplyValue] = useState("@Mike ");

  function DivAppear() {
    setDeleteDiv(!deleteDiv);
  }

  function ReplySubmit() {
    if (replyValue.trim() === "") return;
    AddReply(replyValue, comment.id);
    setReplyValue("");
    setReplyed(null);
  }

  return (
    <>
      <div
        className={` ${width}  w-full h-[144px] bg-white p-[24px] flex justify-between rounded-lg `}
      >
        <Likes commentId={comment.id} />
        <div className="flex flex-col max-w-[618px] w-full">
          <div className="flex justify-between">
            <Personal comment={comment} />
            <div className="flex gap-[7px]">
              <Reply onClick={() => setReplyed(comment.id)} />
              <Delete onClick={DivAppear} />
              <Edit />
            </div>
          </div>
          <div className="w-full min-w-[75px] overflow-y-auto ">
            <p>{comment.information}</p>
          </div>
        </div>
      </div>

      {replyed === comment.id && (
        <Comment
          commentValue={replyValue}
          setCommentValue={setReplyValue}
          AddComment={ReplySubmit}
          btnText="REPLY"
        />
      )}

      <div className="pl-[45px]">
        <div className="flex justify-end border-l-[2px] border-l-[#E9EBF0] ">
          {comment.reply.length > 0 && (
            <div className="flex flex-col gap-[10px] max-w-[632px] w-full">
              {comment.reply.map((reply) => (
                <NewComment
                  key={reply.id}
                  comment={reply}
                  DeleteComment={DeleteComment}
                  width="max-w-[632px]"
                  setReplyed={setReplyed}
                  replyed={replyed}
                  AddReply={AddReply}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      {deleteDiv && (
        <DeleteDiv
          DivAppear={DivAppear}
          comment={comment}
          DeleteComment={DeleteComment}
        />
      )}
    </>
  );
}

export default NewComment;
