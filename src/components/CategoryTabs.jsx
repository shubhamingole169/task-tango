import { motion } from 'framer-motion';

const CategoryTabs = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="category-tabs" role="tablist">
      {categories.map((category) => (
        <motion.button
          key={category}
          className={`tab ${activeCategory === category ? 'active' : ''}`}
          onClick={() => onCategoryChange(category)}
          role="tab"
          aria-selected={activeCategory === category}
          aria-controls={`panel-${category}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryTabs;