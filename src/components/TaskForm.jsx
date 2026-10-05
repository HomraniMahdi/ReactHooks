import { useState } from 'react'
import { PRIORITIES } from '../constants/task'

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState('MEDIUM')
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault() // empêche le rechargement de la page

    const cleanTitle = title.trim()
    if (cleanTitle === '') {
      setError('Le titre ne peut pas être vide.')
      return
    }

    onAddTask(cleanTitle, priority)
    setTitle('')
    setError('')
  }

  return (
    <>
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titre de la tâche"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          {PRIORITIES.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
        <button type="submit" className="btn btn--primary">Ajouter</button>
      </form>
      {error && <p className="error">{error}</p>}
    </>
  )
}

export default TaskForm