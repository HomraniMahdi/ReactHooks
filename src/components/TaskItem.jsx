function TaskItem({ task, onToggle, onDelete }) {
  const isDone = task.status === 'DONE'

  return (
    <li className={`task ${isDone ? 'task--done' : ''}`}>
      <input
        type="checkbox"
        checked={isDone}
        onChange={() => onToggle(task.id)}
      />
      <span className="task__title">{task.title}</span>
      <span className={`badge badge--${task.priority.toLowerCase()}`}>
        {task.priority}
      </span>
      <button className="btn btn--danger" onClick={() => onDelete(task.id)}>
        Supprimer
      </button>
    </li>
  )
}
export default TaskItem