import React, { useState } from "react";

export default function Task({ task, onChangeTask, onDeleteTask }) {
  const [isEditng, setIsEditing] = useState(false);

  let taskContent;

  if (isEditng) {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(false)}>Edit</button>
      </>
    );
  } else {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            onChangeTask({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(true)}>Save</button>
      </>
    );
  }

  return (
    <>
      <li>
        <label>
          <input
            type="checkbox"
            checked={task.done}
            onChange={(e) => {
              onChangeTask({
                ...task,
                done: e.target.checked,
              });
            }}
          />
          {taskContent}
          <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </label>
      </li>
    </>
  );
}
