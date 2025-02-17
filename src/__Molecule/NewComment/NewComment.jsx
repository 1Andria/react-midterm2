import React, { useRef, useState } from "react";
import Likes from "../../__Atom/Likes/Likes";
import Personal from "../../__Atom/Personal/Personal";
import Reply from "../../__Atom/Reply/Reply";
import Delete from "../../__Atom/Delete/Delete";
import Edit from "../../__Atom/Edit/Edit";
import DeleteDiv from "../DeleteDiv/DeleteDiv";
import Comment from "../Comment/Comment";
import Button from "../../__Atom/Button/Button";

function NewComment({ comment, DeleteComment, replyed, setReplyed, AddReply }) {
  const [deleteDiv, setDeleteDiv] = useState(false);
  const [replyValue, setReplyValue] = useState("@Mike ");
  const [edit, setEdit] = useState(false);
  const [editTxt, setEditTxt] = useState(comment.information);
  const textareaRef = useRef(null);

  function DivAppear() {
    setDeleteDiv(!deleteDiv);
  }

  function ReplySubmit() {
    if (replyValue.trim() === "") return;
    AddReply(replyValue, comment.id);
    setReplyValue("");
    setReplyed(null);
  }

  function EditActive() {
    setEdit(!edit);
    textareaRef.current.focus();
  }

  function EditComment() {
    if (editTxt.trim() === "") return;
    comment.information = editTxt;
    setEdit(false);
  }

  return (
    <>
      <div
        className={` max-w-[730px]   w-full h-auto bg-white p-[24px] flex justify-between rounded-lg `}
      >
        <Likes commentId={comment.id} />
        <div className="flex flex-col max-w-[618px] w-full">
          <div className="flex justify-between">
            <Personal comment={comment} />
            <div className="flex gap-[7px]">
              <Reply
                setEdit={setEdit}
                edit={edit}
                onClick={() => setReplyed(comment.id)}
              />
              <Delete onClick={DivAppear} />
              <Edit setReplyed={setReplyed} onClick={EditActive} />
            </div>
          </div>

          {edit ? (
            <div className="w-full min-w-[75px]  pt-[10px] ">
              <textarea
                className="w-full h-full resize-none"
                ref={textareaRef}
                value={editTxt}
                onChange={(e) => setEditTxt(e.target.value)}
              />
            </div>
          ) : (
            <div className="w-full min-w-[75px] overflow-y-auto  pt-[10px] ">
              <p>{comment.information}</p>
            </div>
          )}

          {edit && (
            <div className="w-full flex justify-end pt-[20px]">
              <Button
                btnText="UPDATE"
                btnColor="bg-[#5357B6]"
                btnWidth="w-[104px]"
                onClick={EditComment}
              />
            </div>
          )}
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
            <div className="ml-[40px] flex flex-col gap-[10px] max-w-[632px] w-full">
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
