import { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm.jsx';
import TaskList from './components/TaskList.jsx';
import { loadTasks, saveTasks } from './utils/storage.js';

export default function App() {
  const [tasks, setTasks] = useState(loadTasks);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (title) => {
    setTasks((current) => [...current, { id: Date.now(), title, completed: false }]);
  };

  const toggleTask = (id) => {
    setTasks((current) =>
      current.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  };

  const deleteTask = (id) => {
    setTasks((current) => current.filter((task) => task.id !== id));
  };

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <main className="app">
      <h1 className="app__title">Task Manager</h1>
      <TaskForm onAddTask={addTask} />
      <p className="app__summary">
        <span data-testid="task-count">Total Tasks: {tasks.length}</span>
        <span className="app__completed">Completed: {completedCount}</span>
      </p>
      <TaskList tasks={tasks} onToggleTask={toggleTask} onDeleteTask={deleteTask} />
    </main>
  );
}
