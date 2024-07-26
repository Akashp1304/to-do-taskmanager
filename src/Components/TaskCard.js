// src/components/TaskCard.js
import React, { useState } from 'react';
import Modal from './Modal';
import './TaskCard.css';

const TaskCard = ({ task, onDelete, onUpdate, onMarkDone }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);
  const [priority, setPriority] = useState(task.priority);

  const handleUpdate = () => {
    onUpdate({ ...task, title, description, dueDate, priority });
    setIsEditing(false);
  };

  return (
    <div className={`task-card ${task.priority.toLowerCase()} ${task.done ? 'done' : ''}`}>
      <div>
        <div className="task-content">
          <h3>Title: {task.title}</h3>
          
          <p className="description">Description: {task.description}</p>
          <p className="description">Due Date: <span>{task.dueDate}</span></p>
          <p>Priority: {task.priority}</p>
        </div>
        <div className="task-buttons">
          <button
            className="edit-btn"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
          <button
            className="delete-btn"
            onClick={() => onDelete(task.id)}
          >
            Delete
          </button>
        </div>
      </div>

      <Modal isOpen={isEditing} onClose={() => setIsEditing(false)}>
        <div className="edit-section">
          <label>Task Name</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="edit-section">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="edit-section">
          <label>Due Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div className="edit-section">
          <label>Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="task-buttons">
          <button className="save-btn" onClick={handleUpdate}>
            Save Changes
          </button>
          <button className="done-btn" onClick={() => onMarkDone(task.id)}>
            Mark as Done
          </button>
          <button className="cancel-btn" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default TaskCard;
