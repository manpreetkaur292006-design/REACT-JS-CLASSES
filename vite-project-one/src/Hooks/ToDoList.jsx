import React from "react";
import { useState } from "react";

const ToDoList = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    setList([...list, task]);
    setTask("");
  };
  return (
    <>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTask}>Add Task</button>

      {list.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </>
  );
};

export default ToDoList;
