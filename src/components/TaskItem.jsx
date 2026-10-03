export default function TaskItem({ task, onToggle, onDelete }) {
  const checkboxId = `task-checkbox-input-${task.id}`;

  return (
    <li
      className={`task-item${task.completed ? ' task-item--completed' : ''}`}
      data-testid={`task-item-${task.id}`}
    >
      <input
        id={checkboxId}
        className="task-item__checkbox"
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        data-testid={`task-checkbox-${task.id}`}
      />
      <label className="task-item__title" htmlFor={checkboxId}>
        {task.title}
      </label>
      <button
        className="button button--danger"
        type="button"
        onClick={() => onDelete(task.id)}
        aria-label={`Delete task: ${task.title}`}
        data-testid={`delete-task-${task.id}`}
      >
        Delete
      </button>
    </li>
  );
}
