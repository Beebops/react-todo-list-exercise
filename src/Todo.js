const Todo = ({ id, title, isCompleted, removeTodo, toggleCompletion }) => {
  const markCompleted = () => {
    toggleCompletion(id)
  }

  const remove = () => {
    removeTodo(id)
  }

  const completedStyle = {
    textDecoration: isCompleted ? 'line-through' : 'none',
  }
  return (
    <div className="Todo">
      <p onClick={markCompleted} style={completedStyle}>
        {title}
      </p>
      <button className="removeBtn" onClick={remove}>
        X
      </button>
    </div>
  )
}

export default Todo
