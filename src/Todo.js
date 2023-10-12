const Todo = ({ id, title, removeTodo }) => {
  const remove = () => {
    removeTodo(id)
  }
  return (
    <div className="Todo">
      <p>{title}</p>
      <button className="removeBtn" onClick={remove}>
        X
      </button>
    </div>
  )
}

export default Todo
