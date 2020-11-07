import React, { useState, useContext, useEffect } from 'react'
import { TaskListContext } from '../context/TaskListContext'

const TaskForm = () => {
  const { addTask, clearList, editTask, editItem } = useContext(TaskListContext)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')


  const handleSubmit = e => {
    e.preventDefault()
    if (!editItem) {
      addTask(title,description) 
      setTitle('') 
      setDescription('')
    } else {
      editTask(title,description, editItem.id)
    }
  }

  const titleChange = e => {
    setTitle(e.target.value)
    // console.log(e.target.value)
  }
  const descriptionChange = e => {
    setDescription(e.target.value)
  }

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title)
      console.log(editItem)
    } else {
      setTitle('')
    }
  }, [editItem])

  return (
    <form onSubmit={handleSubmit} className="form">
      <h4>Add New Todo</h4>
      <input
        type="text"
        placeholder="Enter todo title"
        value={title}
        onChange={titleChange}
        required
        className="form-control"
      />
      <input
        type="text"
        placeholder="Add description here"
        value={description}
        onChange={descriptionChange}
        required
        className="form-control"
      />

      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {editItem ? 'Edit Task' : 'Add Task'}
        </button>
        <button className="btn clear-btn" onClick={clearList}>
          Clear
        </button>
      </div>
    </form>
  )
}

export default TaskForm