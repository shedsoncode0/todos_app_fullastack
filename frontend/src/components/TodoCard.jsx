import React from "react";
import Trash from "../assets/trash.svg";
import Check from "../assets/check.svg";
import { useState } from "react";

const TodoCard = ({ task, id, done }) => {
   const [checked, setChecked] = useState(false)
  return (
    <div className="w-full p-[15px] rounded-lg border-gray400 border flex card bg-gray500 gap-4">
      <div onClick={() => setChecked(!checked)} className="">{checked ? <img className="w-7" src={Check} alt="" /> : <div className="border-2 border-blue p-2 rounded-full"></div>}</div>
      <div className="flex-1 text-gray100 text-[14px]">How are you guys doing today</div>
      <div><img src={Trash} alt="icon" /></div>
    </div>
  );
};

export default TodoCard;
