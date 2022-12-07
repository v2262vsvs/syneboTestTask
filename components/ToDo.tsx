import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import iconmoon from "../public/images/icon-moon.svg";
import iconcheck from "../public/images/icon-check.svg";
import iconcross from "../public/images/icon-cross.svg";
import { RootState } from "../redux/store";
import ToDoItem from "./ToDoItem";
import { useSelector, useDispatch } from "react-redux";
import { addTask, TodoState } from "../redux/todoSlice";
import { setClearCompleted } from "../redux/todoSlice";
import useWindowSize from "../utils/useWindowSize";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
function ToDo() {
  const size = useWindowSize();
  const dragItem = useRef<any>(null);
  const dragOverItem = useRef<any>(null);

  const list = useSelector((state: RootState) => state.todos);
  const [tasks, setTasks] = useState(list);
  const [activeState, setActiveState] = useState("All");

  let taskList = [...list];

  useEffect(() => {
    setTasks(list);
  }, [list]);

  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [checked, setChecked] = useState(false);

  const handleAll = async () => {
    taskList = [...list];
    setActiveState("All");
    setTasks(taskList);
  };
  const handleActive = async () => {
    taskList = [...list];
    taskList = taskList.filter((a) => a.checked == false);
    setActiveState("Active");
    setTasks(taskList);
  };
  const handleComplited = async () => {
    taskList = [...list];
    taskList = taskList.filter((a) => a.checked == true);
    setActiveState("Complited");
    setTasks(taskList);
  };

  const handleClearCompleted = async () => {
    dispatch(setClearCompleted(true));
  };

  const handleCheck = async () => {
    setChecked(!checked);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(task);
    const action = { task, checked };
    dispatch(addTask(action));
  };

  const handleSort = () => {
    taskList = [...list];
    const draggedItemContent = taskList.splice(dragItem.current, 1)[0];
    taskList.splice(dragOverItem.current, 0, draggedItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setTasks(taskList);
  };

  return (
    <div className="min-w-[320px] xl:min-w-[550px] ">
      <div className="flex justify-between items-center text-center ">
        <div className="xs:text-2xl text-xl xl:text-5xl   text-white tracking-widest ">
          TODO
        </div>
        <Image src={iconmoon} width="30" height="30" alt="" />
      </div>

      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex bg-white rounded-md p-5 mt-5 xl:mt-10 shadow-2xl"
      >
        {checked ? (
          <div
            onClick={handleCheck}
            className="cursor-pointer bg-gradient-to-r  from-linear-gradient-from to-linear-gradient-to xl:p-3 p-2 rounded-full"
          >
            <Image className=" h-3 w-3 text-white " src={iconcheck} alt="" />
          </div>
        ) : (
          <div
            onClick={handleCheck}
            className="cursor-pointer rounded-full border-2 flex xl:p-4 p-3 relative border-gray-200 hover:border-l-linear-gradient-from/70 hover:border-t-linear-gradient-from/50 hover:border-r-linear-gradient-to/40 hover:border-b-linear-gradient-to/25"
          />
        )}
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="my-auto outline-none w-full ml-5 xs:text-lg xl:text-xl text-darktheme-VeryDarkGrayishBlue"
          placeholder="Create a new todo..."
        />
      </form>

      <div className=" bg-white rounded-md mt-3 xl:mt-5  shadow-2xl ">
        {tasks.map((item, index) => (
          <div
            className=" "
            key={index}
            draggable
            onDragStart={(e) => (dragItem.current = index)}
            onDragEnter={(e) => (dragOverItem.current = index)}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}
          >
            <ToDoItem item={item} />
          </div>
        ))}
        <div className="flex justify-between p-5 text-lighttheme-DarkGrayishBlue">
          {size.width >= 1440 && (
            <div className="text-md my-auto font-extralight">
              {taskList.length} items left
            </div>
          )}
          <div className="flex gap-x-5 mx-auto text-sm xs:text-sm xl:text-lg font-bold">
            <div
              onClick={handleAll}
              className={classNames(
                activeState == "All"
                  ? "cursor-pointer text-blue-500 hover:text-darktheme-VeryDarkGrayishBlue"
                  : "cursor-pointer hover:text-darktheme-VeryDarkGrayishBlue"
              )}
            >
              All
            </div>
            <div
              onClick={handleActive}
              className={classNames(
                activeState == "Active"
                  ? "cursor-pointer text-blue-500 hover:text-darktheme-VeryDarkGrayishBlue"
                  : "cursor-pointer hover:text-darktheme-VeryDarkGrayishBlue"
              )}
            >
              Active
            </div>
            <div
              onClick={handleComplited}
              className={classNames(
                activeState == "Complited"
                  ? "cursor-pointer text-blue-500 hover:text-darktheme-VeryDarkGrayishBlue"
                  : "cursor-pointer hover:text-darktheme-VeryDarkGrayishBlue"
              )}
            >
              Complited
            </div>
          </div>
          {size.width >= 1440 && (
            <div
              onClick={handleClearCompleted}
              className="-ml-5 my-auto text-md font-light cursor-pointer hover:text-darktheme-DarkGrayishBlue"
            >
              Clear Completed
            </div>
          )}
        </div>
      </div>

      <div className=" my-14 text-center text-sm font-normal text-neutral-500">
        Drag and drop to reoder list
      </div>
    </div>
  );
}

export default ToDo;
