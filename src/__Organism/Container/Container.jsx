import React, { useEffect, useState } from "react";
import Comment from "../../__Molecule/Comment/Comment";
import NewComment from "../../__Molecule/NewComment/NewComment";
import DeleteDiv from "../../__Molecule/DeleteDiv/DeleteDiv";

function Container() {
  const [comment, setComment] = useState(() => {
    return JSON.parse(localStorage.getItem("comment")) || [];
  });
  const [commentValue, setCommentValue] = useState("");
  const [deleteDiv, setDeleteDiv] = useState(false);

  function DivAppear() {
    setDeleteDiv(!deleteDiv);
  }

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
    };
    setComment([...comment, newComment]);
    setCommentValue("");
  }

  const DeleteComment = (id) => {
    setComment(comment.filter((comment) => comment.id !== id));
  };

  return (
    <>
      <div className="w-[100%] gap-[20px] h-screen bg-[#F5F6FA] flex flex-col justify-between items-center pb-[64px] pt-[64px]">
        <div className="max-w-[730px] w-full overflow-y-auto">
          {comment.map((coment, key) => {
            return (
              <NewComment key={key} comment={coment} DivAppear={DivAppear} />
            );
          })}
        </div>
        <Comment
          AddComment={AddComment}
          setCommentValue={setCommentValue}
          commentValue={commentValue}
        />
        {deleteDiv && (
          <DeleteDiv DivAppear={DivAppear} DeleteComment={DeleteComment} />
        )}
      </div>
    </>
  );
}

export default Container;
