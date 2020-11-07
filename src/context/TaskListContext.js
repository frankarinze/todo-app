import React, { createContext, useState, useEffect } from 'react'
import {v4 as uuid} from 'uuid'

export const TaskListContext = createContext()

const TaskListContextProvider = props => {
  const initialState = JSON.parse(localStorage.getItem('tasks')) || []

  const [tasks, setTasks] = useState(initialState);


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const [editItem, setEditItem] = useState(null)

  // Add todo
  const addTask = (title ,description) => {
    setTasks([...tasks, { title,description, id: uuid() }])
  }

  // Remove tasks
  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  // Clear tasks
  const clearList = () => {
    setTasks([])
  }

  // Find task
  const findItem = id => {
    const item = tasks.find(task => task.id === id)
    setEditItem(item)
  }

  // Edit task
  const editTask = (title,description, id) => {
    const newTasks = tasks.map(task => (task.id === id ? { title, description,id } : task))
    console.log(newTasks)
    setTasks(newTasks)
    setEditItem(null)
  }

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        clearList,
        findItem,
        editTask,
        editItem
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  )
}

export default TaskListContextProvider