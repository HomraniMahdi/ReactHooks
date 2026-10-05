import TaskForm from './components/TaskForm.jsx'
import SearchBar from './components/SearchBar.jsx'
import TaskFilters from './components/TaskFilters.jsx'
import TaskStats from './components/TaskStats.jsx'
import TaskList from './components/TaskList.jsx'

const FAKE_TASKS = [
  { id: 1, title: 'Apprendre useState', priority: 'HIGH', status: 'TODO' },
  { id: 2, title: 'Lire la doc de useEffect', priority: 'MEDIUM', status: 'DONE' },
  { id: 3, title: 'Ranger le bureau', priority: 'LOW', status: 'TODO' },
]

function App() {
  return (
    <main className="app">
      <h1>Task Manager</h1>
      <TaskForm />
      <SearchBar />
      <TaskFilters filter="ALL" onChangeFilter={() => {}} />
      <TaskStats total={5} done={2} remaining={3} />
      <TaskList tasks={FAKE_TASKS} onToggle={() => {}} onDelete={() => {}} />
    </main>
  )
}

export default App