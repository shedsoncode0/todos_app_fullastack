import React from "react";
import Trash from "../assets/trash.svg";
import Check from "../assets/check.svg";
import { useState } from "react";

const TodoCard = ({ task, id, done }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="w-full p-[15px] rounded-lg border-gray400 border flex card bg-gray500 gap-4">
      <div onClick={() => setChecked(!checked)} className="">
        <div
          className={` ${checked ? "" : "border-2 p-2"}  border-blue rounded-full`}
        >
          {checked && <img className="w-[25px]" src={Check} alt="icon" />}
        </div>
      </div>
      <div className={` ${checked ? "line-through text-gray300" : ""} flex-1 text-gray100 text-[14px]`}>
        How are you guys doing today
      </div>
      <div>
        <img src={Trash} alt="icon" />
      </div>
    </div>
  );
};

export default TodoCard;
