import React, { useEffect, useState } from "react";
import Plus from "../../assets/Images/+.png";
import Minus from "../../assets/Images/-.png";

function Likes({ commentId }) {
  const LikeKey = `likes-${commentId}`;
  const [likes, setLikes] = useState(() => {
    const Liked = localStorage.getItem(LikeKey);
    return Liked ? JSON.parse(Liked) : 0;
  });

  useEffect(() => {
    localStorage.setItem(LikeKey, JSON.stringify(likes));
  }, [likes]);

  function PlusLike() {
    setLikes(likes + 1);
  }

  function MinusLike() {
    setLikes(likes - 1);
  }

  return (
    <>
      <div className=" w-[40px] h-[100px] rounded-[10px] bg-[#F5F6FA] flex flex-col justify-evenly items-center ">
        <button onClick={PlusLike} className=" h-[12px] w-[11px]">
          <img
            src={Plus}
            alt="Plus"
            className="text-[#C5C6EF] cursor-pointer"
          />
        </button>
        <h3 className="text-[#5357B6] text-base font-normal ">{likes}</h3>
        <button className=" h-[12px] w-[11px]" onClick={MinusLike}>
          <img
            src={Minus}
            alt="Minus"
            className="text-[#C5C6EF] cursor-pointer"
          />
        </button>
      </div>
    </>
  );
}

export default Likes;
