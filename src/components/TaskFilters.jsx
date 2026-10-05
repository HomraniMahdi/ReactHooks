import { FILTERS } from '../constants/task'

function TaskFilters({ filter, onChangeFilter }) {
  return (
    <div className="filters">
      {FILTERS.map((f) => (
        <button
          key={f}
          className={`btn ${filter === f ? 'btn--active' : ''}`}
          onClick={() => onChangeFilter(f)}
        >
          {f}
        </button>
      ))}
    </div>
  )
}

export default TaskFilters