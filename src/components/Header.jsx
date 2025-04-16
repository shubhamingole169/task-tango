import { useState } from 'react';
import { motion } from 'framer-motion';

const Header = ({ onAddTask }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <header className="header">
      <h1>TaskTango</h1>
      <motion.button
        className="add-task-btn"
        onClick={() => setIsFormOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Add new task"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
        Add Task
      </motion.button>
      {isFormOpen && (
        <div className="modal">
          <div className="modal-content">
            <button
              className="close-btn"
              onClick={() => setIsFormOpen(false)}
              aria-label="Close form"
            >
              &times;
            </button>
            <TaskForm onSubmit={onAddTask} onClose={() => setIsFormOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

function TaskForm({ onSubmit, onClose }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Work');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onSubmit({ id: Date.now().toString(), name, category, dueDate, completed: false });
    setName('');
    setDueDate('');
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <h2>Add New Task</h2>
      <div>
        <label htmlFor="task-name">Task Name</label>
        <input
          id="task-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          aria-required="true"
        />
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Shopping">Shopping</option>
        </select>
      </div>
      <div>
        <label htmlFor="due-date">Due Date (Optional)</label>
        <input
          id="due-date"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Add Task
      </motion.button>
    </form>
  );
}