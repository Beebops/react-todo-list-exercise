import { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

const TodoList = () => {
  const [todos, setTodos] = useState([])

  const makeTodo = (todoObj) => {
    setTodos((todos) => [...todos, todoObj])
  }

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id))
  }

  const toggleCompletion = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    )
  }

  const todoComponents = todos.map((todo) => (
    <Todo
      key={todo.id}
      id={todo.id}
      title={todo.title}
      isCompleted={todo.isCompleted}
      removeTodo={removeTodo}
      toggleCompletion={toggleCompletion}
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
