import React from "react";
import iconcheck from "../public/images/icon-check.svg";
import iconcross from "../public/images/icon-cross.svg";

import Image from "next/image";
import { useDispatch } from "react-redux";
import { checkTask, deleteTask } from "../redux/todoSlice";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
function ToDoItem(item: any) {
  const dispatch = useDispatch();

  const handleCheck = async () => {
    dispatch(checkTask(item.item.id));
  };
  const handleDelete = async () => {
    dispatch(deleteTask(item.item.id));
  };

  return (
    <div className="flex justify-between p-5 group border-b border-gray-300 cursor-grab ">
      <div className="flex justify-start">
        {item.item.checked ? (
          <div
            onClick={handleCheck}
            className="cursor-pointer bg-gradient-to-r  from-linear-gradient-from to-linear-gradient-to xl:p-3 p-2 rounded-full"
          >
            <Image className=" h-3 w-3 text-white " src={iconcheck} alt="" />
          </div>
        ) : (
          <div
            onClick={handleCheck}
            className="hover:border-2 hover:border-l-linear-gradient-from/70 hover:border-t-linear-gradient-from/50 hover:border-r-linear-gradient-to/40 hover:border-b-linear-gradient-to/25 cursor-pointer rounded-full border-2 flex xl:p-4 p-3 relative  border-gray-200"
          />
        )}
        <div
          className={classNames(
            item.item.checked
              ? "my-auto line-through text-lighttheme-LightGrayishBlue ml-5 xs:text-xs xl:text-xl cursor-default "
              : "my-auto ml-5 text-darktheme-VeryDarkGrayishBlue xs:text-xs xl:text-xl cursor-default hover:text-darktheme-VeryDarkBlue"
          )}
        >
          {item.item.name}
        </div>
      </div>

      <button onClick={handleDelete} className="hidden group-hover:block ">
        <Image className=" h-5 w-5 text-gray-600 " src={iconcross} alt="" />
      </button>
    </div>
  );
}

export default ToDoItem;
