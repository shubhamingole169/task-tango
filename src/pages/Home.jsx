import { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import confetti from 'canvas-confetti';
import Header from '../components/Header';
import CategoryTabs from '../components/CategoryTabs';
import TaskCard from '../components/TaskCard';
import QuoteWidget from '../components/QuoteWidget';
import { initialTasks, categories, quotes } from '../data/mockData';

const Home = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : initialTasks;
  });
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [showQuote, setShowQuote] = useState(false);
  const [currentQuote, setCurrentQuote] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    const categoryTasks = tasks.filter((task) => task.category === activeCategory);
    if (categoryTasks.length > 0 && categoryTasks.every((task) => task.completed)) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff6f61', '#26a69a', '#ffca28'],
      });
    }
  }, [tasks, activeCategory]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    if (updatedTasks.find((task) => task.id === id)?.completed) {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setCurrentQuote(randomQuote);
      setShowQuote(true);
      setTimeout(() => setShowQuote(false), 5000);
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedTasks = Array.from(tasks);
    const [movedTask] = reorderedTasks.splice(result.source.index, 1);
    reorderedTasks.splice(result.destination.index, 0, movedTask);
    setTasks(reorderedTasks);
  };

  const filteredTasks = tasks.filter((task) => task.category === activeCategory);

  return (
    <div className="home">
      <Header onAddTask={addTask} />
      <CategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      {filteredTasks.length === 0 ? (
        <p className="no-tasks">No tasks in this category.</p>
      ) : (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="tasks">
            {(provided) => (
              <div
                className="task-list"
                {...provided.droppableProps}
                ref={provided.innerRef}
                role="list"
              >
                {filteredTasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <TaskCard
                          task={task}
                          onToggle={toggleTask}
                          onDelete={deleteTask}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
      {showQuote && (
        <QuoteWidget quote={currentQuote} onClose={() => setShowQuote(false)} />
      )}
    </div>
  );
};

export default Home;