import { useRef } from 'react'

function SearchBar({ value, onChange }) {
  const searchInputRef = useRef(null)

  return (
    <div className="search">
      <input
        ref={searchInputRef}
        type="search"
        placeholder="Rechercher une tâche..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button
        type="button"
        className="btn"
        onClick={() => searchInputRef.current.focus()}
      >
        Focus search
      </button>
    </div>
  )
}