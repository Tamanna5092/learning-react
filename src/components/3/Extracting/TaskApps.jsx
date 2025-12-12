import React, { useReducer } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { initialTasks } from "./InitialTasks";
import "./TaskApps.css";
import taskReducer from "./reducer/TaskReducer";

export default function TaskApps() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  const getNextId = (data) => {
    const maxId = data.reduce((prev, current) =>
      prev && prev.id > current.id ? prev : current
    );
    return maxId.id + 1;
  };

  // handlers
  const handleAddTask = (text) => {
    dispatch({
      type: "added",
      id: getNextId(tasks),
      text,
    });
  };

  const handleChangeTask = (task) => {
    dispatch({
      type: "changed",
      task,
    });
  };

  const handleDeleteTask = (taskId) => {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  };

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAdd={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}
