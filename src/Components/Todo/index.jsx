import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList/index";

const TodoComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [allTodoData, setAllTodoData] = useState([]);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleAddClick = () => {
    if (inputValue !== "" && allTodoData.indexOf(inputValue) === -1) {
      setAllTodoData((prev) => [...prev, inputValue.trim()]);
    }
    setInputValue("");
  };

  const deleteTodo = (index) => {
    if (allTodoData.length > 0) {
      const newTodo = allTodoData.filter((_, i) => i !== index);
      setAllTodoData(newTodo);
    }
  };

  return (
    <React.Fragment>
      <div className="w-full flex justify-center items-center">
        <TodoInput
          handleAddClick={handleAddClick}
          handleInputChange={handleInputChange}
          inputValue={inputValue}
        />
      </div>
      <TodoList
        todos={allTodoData}
        deleteTodo={deleteTodo}
        setAllTodoData={setAllTodoData}
      />
    </React.Fragment>
  );
};

export default TodoComponent;

