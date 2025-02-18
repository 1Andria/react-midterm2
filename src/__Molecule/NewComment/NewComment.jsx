import React, { useRef, useState } from "react";
import Likes from "../../__Atom/Likes/Likes";
import Personal from "../../__Atom/Personal/Personal";
import Reply from "../../__Atom/Reply/Reply";
import Delete from "../../__Atom/Delete/Delete";
import Edit from "../../__Atom/Edit/Edit";
import DeleteDiv from "../DeleteDiv/DeleteDiv";
import Comment from "../Comment/Comment";
import Button from "../../__Atom/Button/Button";

function NewComment({
  comment,
  DeleteComment,
  replyed,
  setReplyed,
  AddReply,
  setComment,
  name,
}) {
  const [deleteDiv, setDeleteDiv] = useState(false);
  const [replyValue, setReplyValue] = useState(`@${name} `);
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
    setTimeout(() => {
      textareaRef.current.focus();
    }, 10);
  }

  function EditComment() {
    if (editTxt.trim() === "") return;
    setComment((Comments) =>
      Comments.map((com) =>
        com.id === comment.id ? { ...com, information: editTxt } : com
      )
    );
    setEdit(false);
  }

  return (
    <>
      <div
        className={`max-w-[730px] w-full h-auto bg-white p-[24px] flex justify-between gap-[5px] rounded-lg `}
      >
        <div className="max-[620px]:hidden">
          <Likes commentId={comment.id} />
        </div>
        <div className="flex flex-col max-w-[618px] w-full">
          <div className="flex justify-between">
            <Personal comment={comment} name={name} />
            <div className="flex gap-[10px] max-[620px]:hidden">
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
            <div className="w-full min-w-[75px] h-[80px]  pt-[10px] ">
              <textarea
                className="w-full h-full resize-none rounded-lg focus:border-[#5357B6] focus:outline-none border pl-[24px] pr-[24px] pt-[12px] border-[#E9EBF0]"
                ref={textareaRef}
                value={editTxt}
                onChange={(e) => setEditTxt(e.target.value)}
              />
            </div>
          ) : (
            <div
              className="w-full min-w-[75px] overflow-y-auto  pt-[10px]
               [&::-webkit-scrollbar]:h-0.5
               [&::-webkit-scrollbar-track]:bg-white
               [&::-webkit-scrollbar-thumb]:bg-white
               dark:[&::-webkit-scrollbar-track]:bg-[#C5C6EF]
               dark:[&::-webkit-scrollbar-thumb]:bg-[#5357B6]  "
            >
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
          <div className="flex w-full justify-between items-center min-[620px]:hidden pt-[20px]">
            <Likes />
            <div className="flex gap-[15px] max-[400px]:gap-[30px] ">
              <Reply
                setEdit={setEdit}
                edit={edit}
                onClick={() => setReplyed(comment.id)}
              />
              <Delete onClick={DivAppear} />
              <Edit setReplyed={setReplyed} onClick={EditActive} />
            </div>
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

      <div className="pl-[45px] max-[620px]:pl-[10px]">
        <div className="flex justify-end pl-[10px] border-l-[2px] border-l-[#E9EBF0] ">
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
                  name={name}
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
