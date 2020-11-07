import React, { useContext } from 'react'
import { TaskListContext } from '../context/TaskListContext'

const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListContext)
  return (
    <li className="list-item">
      <span>{task.title} </span>  <span>{task.description} </span>

      <div>
        <button
          className="btn-delete task-btn"
          onClick={() => removeTask(task.id)}
        >
          <i className="bx bxs-trash-alt"></i>
        </button>{' '}
        <button className="btn-edit task-btn" onClick={() => findItem(task.id)}>
          {/* <i className="fas fa-pen"></i> */}
          <i className="bx bx-edit"></i>

        </button>
      </div>
    </li>
  )
}

export default Task