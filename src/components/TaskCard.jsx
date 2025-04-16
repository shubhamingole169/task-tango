import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TaskCard = ({ task, onToggle, onDelete }) => {
  const [isChecked, setIsChecked] = useState(task.completed);

  useEffect(() => {
    setIsChecked(task.completed);
  }, [task.completed]);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    onToggle(task.id);
  };

  return (
    <motion.div
      className="task-card"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      role="listitem"
    >
      <div className="task-content">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleToggle}
          id={`task-${task.id}`}
          aria-label={`Mark ${task.name} as ${isChecked ? 'incomplete' : 'complete'}`}
        />
        <label htmlFor={`task-${task.id}`} className={isChecked ? 'completed' : ''}>
          {task.name}
        </label>
        {task.dueDate && (
          <span className="due-date">
            Due: {new Date(task.dueDate).toLocaleDateString()}
          </span>
        )}
      </div>
      <button
        className="delete-btn"
        onClick={() => onDelete(task.id)}
        aria-label={`Delete task ${task.name}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m-10 5v10a2 2 0 002 2h8a2 2 0 002-2V11m-4 0v10M8 11v10" />
        </svg>
      </button>
    </motion.div>
  );
};

export default TaskCard;