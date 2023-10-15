// Task.js
import React, { useEffect } from 'react';

const Task = ({ text }) => {
  useEffect(() => {
    const task = document.getElementById(text);
    task.addEventListener("dragstart", () => task.classList.add("is-dragging"));
    task.addEventListener("dragend", () => task.classList.remove("is-dragging"));

    return () => {
      task.removeEventListener("dragstart", () => task.classList.add("is-dragging"));
      task.removeEventListener("dragend", () => task.classList.remove("is-dragging"));
    }
  }, [text]);

  return <p id={text} className="task" draggable="true">{text}</p>
};

export default Task;
