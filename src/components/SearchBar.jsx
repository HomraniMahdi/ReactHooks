function SearchBar() {
  return (
    <div className="search">
      <input type="search" placeholder="Rechercher une tâche..." />
      <button type="button" className="btn">Focus search</button>
    </div>
  )
}

export default SearchBar