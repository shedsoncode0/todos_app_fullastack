import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Plus from "./assets/plus.svg";
import TodoCard from "./components/TodoCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-screen h-screen bg-[#191919] overflow-y-scroll overflow-x-hidden">
        <Header />
        <div className="w-full flex justify-center items-center bg-slate-600 bg-gradient-to-b from-gray700 from-50% to-50% to-[#191919]">
          <div className="w-full max-w-2xl flex gap-5 justify-center items-center p-3">
            <input
              className="p-[14px] outline-none text-[16px] placeholder:text-gray300 flex-1"
              type="text"
              placeholder="Add a new task"
            />
            <button className="p-[14px] flex gap-2 items-center bg-blueDark rounded-lg font-bold text-[14px] text-gray100">
              Add
              <img src={Plus} alt="icon" />
            </button>
          </div>
        </div>
        <section className="w-full flex flex-1 flex-col items-center justify-center">
          <div className="w-full flex-1 flex-col justify-center max-w-2xl p-3">
            <div className="py-[15px] text-[14px]  flex justify-between items-center">
              <h1 className="font-bold text-blue flex items-center gap-2">
                Created Tasks{" "}
                <div className="px-[4px] bg-gray300 h-5 rounded-full flex justify-center items-center text-center">
                  <h1>1</h1>
                </div>
              </h1>
              <h1 className="font-bold text-purple">Completed</h1>
            </div>
            <div className="py-5 w-full text-gray300 space-y-4">
              <TodoCard />
              <TodoCard />
              <TodoCard />
              <TodoCard />
              
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
