import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const TodoForm = ({ makeTodo }) => {
  const INITIAL_STATE = { title: '' }
  const [formData, setFormData] = useState(INITIAL_STATE)

  const handleSubmit = (evt) => {
    evt.preventDefault()
    makeTodo({ ...formData, id: uuidv4() })
    setFormData(INITIAL_STATE)
  }

  const handleChange = (evt) => {
    const { name, value } = evt.target
    setFormData((formData) => ({ ...formData, [name]: value }))
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <label htmlFor="title"></label>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="add todo"
        value={formData.title}
        onChange={handleChange}
        autocomplete="off"
      />
      <button className="addBtn">Add Todo</button>
    </form>
  )
}

export default TodoForm
