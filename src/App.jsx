import { useState } from 'react'
import TaskForm from './components/TaskForm'
import SearchBar from './components/SearchBar'
import TaskFilters from './components/TaskFilters'
import TaskStats from './components/TaskStats'
import TaskList from './components/TaskList'
import { STATUS } from './constants/task'

function App() {
  const [tasks, setTasks] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [filter, setFilter] = useState('ALL')

  function addTask(title, priority) {
    const newTask = {
      id: crypto.randomUUID(),
      title,
      priority,
      status: STATUS.TODO,
    }
    setTasks((prev) => [...prev, newTask])
  }

  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, status: task.status === STATUS.DONE ? STATUS.TODO : STATUS.DONE }
          : task
      )
    )
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  const total = tasks.length
  const done = tasks.filter((task) => task.status === STATUS.DONE).length
  const remaining = total - done

  const search = searchValue.trim().toLowerCase()
  const visibleTasks = tasks.filter(
    (task) =>
      (filter === 'ALL' || task.status === filter) &&
      task.title.toLowerCase().includes(search)
  )

  return (
    <main className="app">
      <h1>Task Manager</h1>
      <TaskForm onAddTask={addTask} />
      <SearchBar value={searchValue} onChange={setSearchValue} />
      <TaskFilters filter={filter} onChangeFilter={setFilter} />
      <TaskStats total={total} done={done} remaining={remaining} />
      <TaskList tasks={visibleTasks} onToggle={toggleTask} onDelete={deleteTask} />
    </main>
  )
}

export default App