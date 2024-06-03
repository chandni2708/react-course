import { PencilSquareIcon, TrashIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";

const TodoList = ({ todos, deleteTodo, setAllTodoData }) => {
  const [editIndex, setEditIndex] = useState(-1);
  const [editValue, setEditValue] = useState("");

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditValue(todos[index]);
  };

  const handleEditChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleEditSave = () => {
    if (editIndex !== -1) {
      const newTodo = [...todos];
      newTodo[editIndex] = editValue;
      setAllTodoData(newTodo);
      setEditIndex(-1);
    }
  };

  return (
    <React.Fragment>
      <div className="w-full flex flex-col items-center justify-center">
        {todos.map((todo, index) => {
          return (
            <div
              className="flex justify-between items-center w-1/2 my-4 bg-blue-500 text-black bg-opacity-10 rounded-lg py-4 px-8"
              key={index}
            >
              {editIndex === index ? (
                <input
                  className=" flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 px-2 placeholder:px-2"
                  type="text"
                  value={editValue}
                  onChange={handleEditChange}
                  autoFocus
                />
              ) : (
                <p className="text-lg font-semibold">{todo}</p>
              )}
              {editIndex !== index ? (
                <div className="flex justify-center gap-3 items-center">
                  <div className="flex border-black border-100 justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-8 h-8"
                      onClick={() => handleEditClick(index)}
                    >
                      <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                      <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                    </svg>
                  </div>
                  <div className="flex w-8 h-8 border-black border-100">
                    <TrashIcon onClick={() => deleteTodo(index)} />
                  </div>
                </div>
              ) : (
                <div className="flex justify-center gap-3 items-center">
                  <div className="flex border-black border-100 justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="size-6"
                      onClick={handleEditSave}
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default TodoList;

