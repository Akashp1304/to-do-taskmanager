// src/components/TaskForm.js
import React, { useState } from 'react';
import CustomDropdown from './CustomDropdown';
import './TaskForm.css';

const TaskForm = ({ onAdd, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Low');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      onAdd({ title, description, dueDate, priority });
      setTitle('');
      setDescription('');
      setDueDate('');
      setPriority('Low');
      onClose();
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>


      <input
      className='due-date'
        type="date"
        value={dueDate}
        
        onChange={(e) => setDueDate(e.target.value)}
      />







      
      <CustomDropdown value={priority} onChange={setPriority} />
      <button type="submit" className="add-btn">Add Task</button>
    </form>
  );
};

export default TaskForm;
