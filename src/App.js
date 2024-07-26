// src/App.js
import React, { useState } from 'react';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';
import Modal from './Components/Modal';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length, done: false }]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const markTaskAsDone = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, done: true } : task)));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'All') return true;
    if (filter === 'Done') return task.done;
    return task.priority === filter;
  });

  return (
    <div className="app">
      <h1>Task Management</h1>
      <button
        className="add-task-btn"
        onClick={() => setIsModalOpen(true)}
      >
        Add Task
      </button>
      <div className="filter-buttons">
        {['All', 'High', 'Medium', 'Low', 'Done'].map((f) => (
          <button
            key={f}
            className={`filter-btn ${filter === f ? 'active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
      
      <TaskList
        tasks={filteredTasks}
        onDelete={deleteTask}
        onUpdate={updateTask}
        onMarkDone={markTaskAsDone}
      />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <TaskForm onAdd={addTask} onClose={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default App;
