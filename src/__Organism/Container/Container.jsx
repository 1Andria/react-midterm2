import React, { useEffect, useState } from "react";
import Comment from "../../__Molecule/Comment/Comment";
import NewComment from "../../__Molecule/NewComment/NewComment";

function Container() {
  const [comment, setComment] = useState(() => {
    return JSON.parse(localStorage.getItem("comment")) || [];
  });
  const [commentValue, setCommentValue] = useState("");

  const [replyed, setReplyed] = useState(null);

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem("comment")) || [];
    setComment(storedComments);
  }, []);

  useEffect(() => {
    localStorage.setItem("comment", JSON.stringify(comment));
  }, [comment]);

  function AddComment(e) {
    e.preventDefault();
    if (commentValue.trim() === "") {
      alert("you should enter something");
      setCommentValue("");
      return;
    }
    const newComment = {
      time: Date().slice(3, Date().length - 36),
      information: commentValue,
      id: Date.now(),
      reply: [],
    };
    setComment([...comment, newComment]);
    setCommentValue("");
  }

  function AddReply(replyText, parentId) {
    if (replyText.trim() === "") return;

    const newReply = {
      time: Date().slice(3, Date().length - 36),
      information: replyText,
      id: Date.now(),
      reply: [],
    };

    function addReply(comments) {
      return comments.map((com) => {
        if (com.id === parentId) {
          return { ...com, reply: [...com.reply, newReply] };
        } else if (com.reply.length > 0) {
          return { ...com, reply: addReply(com.reply) };
        }
        return com;
      });
    }

    setComment(addReply(comment));
    setReplyed(null);
  }

  function DeleteComment(id) {
    function Delete(comments) {
      return comments
        .filter((com) => com.id !== id)
        .map((com) => ({
          ...com,
          reply: Delete(com.reply),
        }));
    }

    setComment(Delete(comment));
  }

  return (
    <>
      <div className="w-[100%] gap-[20px] h-screen bg-[#F5F6FA] flex flex-col justify-between items-center pb-[64px] pt-[64px]">
        <div className="max-w-[730px] w-full flex flex-col gap-[20px] overflow-y-auto">
          {comment.map((coment, key) => {
            return (
              <NewComment
                key={key}
                comment={coment}
                DeleteComment={DeleteComment}
                setReplyed={setReplyed}
                replyed={replyed}
                AddReply={AddReply}
              />
            );
          })}
        </div>
        <Comment
          AddComment={AddComment}
          setCommentValue={setCommentValue}
          commentValue={commentValue}
          btnText="SEND"
        />
      </div>
    </>
  );
}

export default Container;
