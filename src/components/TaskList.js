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
      <Search handleChange={handleChange} />
        <ul className="list">
          {
            filteredSearch.map(task => (
              <Task key={task.id} task={task} />
            ))
          }
        </ul>
    </div>
  );
};

export default TaskList;