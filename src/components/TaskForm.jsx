import { useState } from 'react';

export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      setError('Task title cannot be empty.');
      return;
    }
    onAddTask(trimmedTitle);
    setTitle('');
    setError('');
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
    if (error) {
      setError('');
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit} noValidate>
      <div className="task-form__row">
        <label className="visually-hidden" htmlFor="task-title">
          New task
        </label>
        <input
          id="task-title"
          className="task-form__input"
          type="text"
          placeholder="Enter a new task..."
          value={title}
          onChange={handleChange}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? 'task-error' : undefined}
          data-testid="task-input"
        />
        <button className="button button--primary" type="submit" data-testid="add-task-button">
          Add Task
        </button>
      </div>
      {error && (
        <p id="task-error" className="task-form__error" role="alert" data-testid="task-error">
          {error}
        </p>
      )}
    </form>
  );
}
