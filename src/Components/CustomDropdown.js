// src/components/CustomDropdown.js
import React, { useState } from 'react';
import './CustomDropdown.css';

const CustomDropdown = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const priorities = [
    { value: 'Low', color: '#5cb85c' },
    { value: 'Medium', color: '#f0ad4e' },
    { value: 'High', color: '#d9534f' }
  ];

  const handleSelect = (priority) => {
    onChange(priority);
    setIsOpen(false);
  };

  return (
    <div className="custom-dropdown">
      <div className="dropdown-selected" onClick={() => setIsOpen(!isOpen)}>
        <div className="priority-indicator" style={{ backgroundColor: priorities.find(p => p.value === value).color }}></div>
        <span>{value}</span>
        <div className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>&#9662;</div>
      </div>
      {isOpen && (
        <div className="dropdown-options">
          {priorities.map((priority) => (
            <div
              key={priority.value}
              className="dropdown-option"
              onClick={() => handleSelect(priority.value)}
            >
              <div className="priority-indicator" style={{ backgroundColor: priority.color }}></div>
              <span>{priority.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
