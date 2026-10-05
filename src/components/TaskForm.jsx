import { PRIORITIES } from '../constants/task'

function TaskForm() {
  return (
    <form className="task-form">
      <input type="text" placeholder="Titre de la tâche" />
      <select>
        {PRIORITIES.map((p) => (
          <option key={p} value={p}>{p}</option>
        ))}
      </select>
      <button type="submit" className="btn btn--primary">Ajouter</button>
    </form>
  )
}

export default TaskForm