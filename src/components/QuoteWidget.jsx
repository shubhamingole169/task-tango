import { motion } from 'framer-motion';

const QuoteWidget = ({ quote, onClose }) => {
  return (
    <motion.div
      className="quote-widget"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <p>{quote}</p>
      <button onClick={onClose} aria-label="Close quote widget">
        &times;
      </button>
    </motion.div>
  );
};

export default QuoteWidget;