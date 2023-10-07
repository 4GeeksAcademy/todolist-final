import React from "react";
import { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


const TaskList = () => {
  //  this is a useState hook and it is split in 2
  //	the variable and a func to edit that variable
  //	ex. [varName, funcName(this is alwasys the 'set'+ the name of the var)]
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleTaskAdd = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };
  //	.map((item, index) => { return () }) .filter() .forEach() .reduce()
  // let data = ["dance", "jump", "cry"]
  const handleTaskDelete = (banana) => {
    const updatedTasks = tasks.filter((task, i) => i !== banana);
    setTasks(updatedTasks);
  };

  return (
    <div className="bigbox">
      <h1 className="layer big">Todos</h1>
      <div className="layer normal">
        <input
          className="layer"
          type="text"
          placeholder="What needs to be done"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleTaskAdd();
            }
          }}
        />
      
      </div>
      {tasks.length === 0 ? (
        <p className="layer normal">No tasks, add a task</p>
      ) : (
        <ul className="layer">
          {tasks.map((task, i) => (
            <li key={i}>
              <span>{task}</span>
              <button onClick={() => handleTaskDelete(i) }    className="button button-hidden">&#x0078;</button>
            </li>
          ))}
        </ul>
      )}
       <p className="counter">{tasks.length} items left</p>
      <div className="sheet1"></div>
      <div className ="sheet2"></div>
    </div>
  );
};

export default TaskList;
