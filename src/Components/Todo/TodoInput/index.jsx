import { PlusIcon } from "@heroicons/react/16/solid";
import React from "react";

const TodoInput = ({ handleAddClick, handleInputChange, inputValue }) => {
  return (
    <React.Fragment>
      <div className="w-full flex justify-center items-center">
        <form className=" w-full flex justify-center items-center px-96">
          <div className=" w-full flex justify-center items-center">
            <div className="border-b border-gray-900/10 pb-12 w-full px-9">
              <h1 className="mt-10 text-left text-3xl font-semibold leading-7 text-gray-900">
                Todo List
              </h1>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Please Enter the list below for todo.
              </p>

              <div className="mt-10">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Enter Text
                  </label>
                  <div className="mt-2 flex">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-indigo-200 w-full">
                      <input
                        type="text"
                        name="username"
                        id="username"
                        value={inputValue}
                        className="block flex-1 w-full  border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 px-2 placeholder:px-2"
                        placeholder="Enter your text here..."
                        onChange={(e) => {
                          handleInputChange(e.target.value);
                        }}
                      />
                    </div>
                    <div className="flex w-12 h-12 border-black border-100">
                      <PlusIcon onClick={handleAddClick} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default TodoInput;

