import React from 'react';
import TaskCard from './TaskCard';
import './TaskList.css';

const TaskList = ({ tasks, onDelete, onUpdate, onMarkDone }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDelete={onDelete}
          onUpdate={onUpdate}
          onMarkDone={onMarkDone}
        />
      ))}
    </div>
  );
};

export default TaskList;
