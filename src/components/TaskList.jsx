import TaskItem from './TaskItem.jsx';

export default function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  if (tasks.length === 0) {
    return <p className="task-empty">No tasks yet. Add your first task above.</p>;
  }

  return (
    <ul className="task-list" data-testid="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggleTask} onDelete={onDeleteTask} />
      ))}
    </ul>
  );
}
