function TaskStats({ total, done, remaining }) {
  return (
    <p className="stats">
      Total : <strong>{total}</strong> · Terminées : <strong>{done}</strong> ·
      Restantes : <strong>{remaining}</strong>
    </p>
  )
}
export default TaskStats