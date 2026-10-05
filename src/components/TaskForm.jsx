import { useState, useRef, memo } from 'react'
import { PRIORITIES } from '../constants/task'

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState('MEDIUM')
  const [error, setError] = useState('')
  const titleInputRef = useRef(null)

  function handleSubmit(event) {
    event.preventDefault()

    const cleanTitle = title.trim()
    if (cleanTitle === '') {
      setError('Le titre ne peut pas être vide.')
      titleInputRef.current.focus() // on aide l'utilisateur à corriger
      return
    }

    onAddTask(cleanTitle, priority)
    setTitle('')
    setError('')
    titleInputRef.current.focus() // focus remis sur le champ titre
  }

  return (
    <>
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          ref={titleInputRef}
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

export default memo(TaskForm)