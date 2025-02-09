import React, { useEffect, useState } from "react";
import Comment from "../../__Molecule/Comment/Comment";
import NewComment from "../../__Molecule/NewComment/NewComment";

function Container() {
  const [comment, setComment] = useState(() => {
    return JSON.parse(localStorage.getItem("coms")) || [];
  });
  const [commentValue, setCommentValue] = useState("");

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem("coms")) || [];
    setComment(storedComments);
  }, []);

  useEffect(() => {
    localStorage.setItem("coms", JSON.stringify(comment));
  });

  function AddComment(e) {
    e.preventDefault();
    if (commentValue.trim() === "") {
      alert("you should enter something");
      setTaskInp("");
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
  return (
    <>
      <div className="w-[100%] gap-[20px] h-screen bg-[#F5F6FA] flex flex-col justify-between items-center pb-[64px] pt-[64px]">
        <div className="max-w-[730px] w-full overflow-y-auto">
          {comment.map((coment, key) => {
            return <NewComment key={key} comment={coment} />;
          })}
        </div>
        <Comment
          AddComment={AddComment}
          setCommentValue={setCommentValue}
          commentValue={commentValue}
        />
      </div>
    </>
  );
}

export default Container;
