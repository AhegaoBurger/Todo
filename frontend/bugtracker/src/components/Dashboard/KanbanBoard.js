import React, { useState, useEffect } from 'react';
import Task from './Task';
import './KanbanBoard.css';

const KanbanBoard = () => {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const droppables = document.querySelectorAll(".swim-lane");

    const handleDragOver = (e) => {
      e.preventDefault();
      const zone = e.currentTarget;
      const mouseY = e.clientY;
      const els = zone.querySelectorAll(".task:not(.is-dragging)");

      let closestTask = null;
      let closestOffset = Number.NEGATIVE_INFINITY;

      els.forEach((task) => {
        const { top } = task.getBoundingClientRect();
        const offset = mouseY - top;
        if (offset < 0 && offset > closestOffset) {
          closestOffset = offset;
          closestTask = task;
        }
      });

      const curTask = document.querySelector(".is-dragging");

      if (!closestTask) {
        zone.appendChild(curTask);
      } else {
        zone.insertBefore(curTask, closestTask);
      }
    };

    droppables.forEach((zone) => {
      zone.addEventListener("dragover", handleDragOver);
    });

    return () => {
      droppables.forEach((zone) => {
        zone.removeEventListener("dragover", handleDragOver);
      });
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    setTasks([...tasks, inputValue]);
    setInputValue('');
  }

  return (
    <div className="board">
      <form id="todo-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="New TODO..." value={inputValue} onChange={e => setInputValue(e.target.value)} />
        <button type="submit">Add +</button>
      </form>
      <div className="lanes">
        <div className="swim-lane" id="todo-lane">
          <h3 className="heading">TODO</h3>
          {tasks.map(task => <Task key={task} text={task} />)}
        </div>
        <div className="swim-lane">
          <h3 className="heading">Doing</h3>
        </div>
        <div className="swim-lane">
          <h3 className="heading">Done</h3>
        </div>
      </div>
    </div>
  );
}

export default KanbanBoard;
