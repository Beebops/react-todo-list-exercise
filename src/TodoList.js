import { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

const TodoList = () => {
  const [todos, setTodos] = useState([])

  // create a todo and add it to the todos array
  const makeTodo = (todoObj) => {
    setTodos((todos) => [...todos, todoObj])
  }

  // delete a todo from the todos array
  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id))
  }

  const todoComponents = todos.map((todo) => (
    <Todo
      key={todo.id}
      id={todo.id}
      title={todo.title}
      removeTodo={removeTodo}
    />
  ))
  return (
    <div className="TodoList">
      <TodoForm makeTodo={makeTodo} />
      <div className="allTodos">{todoComponents}</div>
    </div>
  )
}

export default TodoList
