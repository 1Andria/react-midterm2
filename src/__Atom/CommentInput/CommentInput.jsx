import React from "react";

function CommentInput({ commentValue, setCommentValue }) {
  return (
    <div className="max-w-[506px] max-[585px]:max-w-[526px] w-full h-[96px] rounded-lg ">
      <textarea
        type="text"
        value={commentValue}
        onChange={(e) => setCommentValue(e.target.value)}
        placeholder="Add a comment... "
        className="h-full rounded-lg focus:border-[#5357B6] focus:outline-none  w-full border border-[#E9EBF0] pl-[24px] pr-[24px] pt-[12px] resize-none  "
      />
    </div>
  );
}

export default CommentInput;
