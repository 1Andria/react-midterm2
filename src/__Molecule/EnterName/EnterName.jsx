import React from "react";
import Button from "../../__Atom/Button/Button";

function EnterName({ name, setName, ChangeName }) {
  return (
    <>
      <div className=" w-full absolute h-full bg-[rgba(0,0,0,0.5)] left-0 top-[0px] flex justify-center items-center">
        <div className="h-[282px] rounded-lg max-w-[300px] w-full bg-white p-[32px] flex flex-col justify-between ">
          <h1 className="text-[#334253] text-2xl font-normal">
            Welcome to our space!👋
          </h1>
          <p className="text-[#67727E] font-normal text-base">
            Please enter your name to continue.
          </p>
          <input
            maxLength={8}
            required
            placeholder="name"
            value={name}
            type="text"
            className="focus:border-[#5357B6] focus:outline-none h-[40px] rounded-lg border border-[#5357B6] pl-[20px] "
            onChange={(e) => setName(e.target.value)}
          />
          <Button
            btnText="ENTER"
            btnColor="bg-[#5357B6]"
            btnWidth="w-[90px]"
            onClick={ChangeName}
          />
        </div>
      </div>
    </>
  );
}

export default EnterName;
