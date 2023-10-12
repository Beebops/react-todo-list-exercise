const Todo = ({ id, title, removeTodo }) => {
  const remove = () => {
    removeTodo(id)
  }
  return (
    <div className="Todo">
      <p>{title}</p>
      <button onClick={remove}>❌</button>
    </div>
  )
}

export default Todo
