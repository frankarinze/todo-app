import React, { useContext,useState,useEffect} from "react";
import { TaskListContext } from "../context/TaskListContext";
import Task from "./Task";
import Search from './search/Search'


const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  const [search, setSearch] = useState('')
  const [filteredSearch, setFilteredSearch] = useState([])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    setFilteredSearch(
      tasks.filter((task) =>
        task.title.toLowerCase().includes(search.toLowerCase())
      )
    )
  }, [search, tasks]);

  return (
    <div>
      {/* <Search handleChange={handleChange} /> */}
      {tasks.length > 0 ? (
        <ul className="list">
          {
            filteredSearch.map(task => (
              <Task key={task.id} task={task} />
            ))
          }
        </ul>

      ) : (
        <div className="no-tasks">
          <p>Add new todo</p>
          <button type="submit" className="btn add-new-btn">
          <i className="bx bx-plus font-size-16 "></i>
            Add New
        </button>
        </div>
      )
      }
    </div>

  );
}

export default TaskList;