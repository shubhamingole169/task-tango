# TaskTango

TaskTango is a vibrant, frontend-only to-do list application built for the **Frontend UI Hackathon 2025**. It features category-based task management, drag-and-drop reordering, task completion animations, a motivational quote widget, and a playful, responsive design. Built with React (Vite), plain CSS, and JavaScript, it uses localStorage for data persistence and adheres to the hackathon's requirements for a functional, production-ready mini-app.

## Features
- **Category Tabs**: Organize tasks into categories (Work, Personal, Shopping) with smooth tab transitions.
- **Drag-and-Drop**: Reorder tasks within a category using react-beautiful-dnd with fluid animations.
- **Task Form**: Add tasks with name, category, and optional due date, stored in localStorage.
- **Completion Animations**: Animated checkmarks for completed tasks and confetti bursts (canvas-confetti) when a category is fully completed.
- **Motivational Quote Widget**: Displays a random quote after task completion for an engaging user experience.
- **Responsive Design**: Optimized for mobile (320px+), tablet (768px+), and desktop (1024px+) with CSS media queries.
- **Accessibility**: ARIA labels, keyboard navigation, and high-contrast design for inclusivity.

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/task-tango.git
   cd task-tango