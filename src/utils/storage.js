const STORAGE_KEY = 'task-manager.tasks';

const SAMPLE_TASKS = [
  { id: 1, title: 'Learn React', completed: false },
  { id: 2, title: 'Learn Git', completed: false },
  { id: 3, title: 'Learn GitHub Actions', completed: false },
];

export function loadTasks() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === null) {
      return SAMPLE_TASKS;
    }
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : SAMPLE_TASKS;
  } catch {
    return SAMPLE_TASKS;
  }
}

export function saveTasks(tasks) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch {
    // Storage unavailable (e.g. private mode or quota exceeded); keep running in memory.
  }
}
