import React from "react";
import ClipBoard from "../assets/Clipboard.svg";

const NoTask = () => {
  return (
    <>
      <div className="p-9 flex justify-center text-gray300 items-center flex-col">
        <img src={ClipBoard} alt="" />
        <h1 className="font-bold mt-4">You don't have tasks registered yet</h1>
        <p>Create tasks and organize your to-do items</p>
      </div>
    </>
  );
};

export default NoTask;
