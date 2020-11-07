import React, { useState, useEffect, useContext } from 'react'
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import { TaskListContext } from "../context/TaskListContext";
import Task from "../components/Task";
import Search from '../components/search/Search'


const TodoList = () => {
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
}

const Home = () => {
    const { tasks } = useContext(TaskListContext);
    const [taskForm, setTaskForm] = useState(false)

    return (
        <div >
            {tasks.length > 0 ? (
                <TodoList />

            ) : (
                    <div className="no-tasks">
                        <p>Add new todo</p>
                        <button onClick={() => setTaskForm(true)} className="btn add-new-btn">
                            <i className="bx bx-plus font-size-16 "></i>
                   Add New
                  </button>
                    </div>
                )}
            { taskForm ? (<TaskForm />) : ('')}
        </div>
    )
}

// const Home = () => {
//     const { tasks } = useContext(TaskListContext);
//     const [taskForm, setTaskForm] = useState(false)

//     return (
//         <div >
//             {tasks.length > 0 ? (
//                 <TodoList />

//             ) : (
//                     <div className="no-tasks">
//                         <p>Add new todo</p>
//                         <button onClick={setTaskForm(true)} className="btn add-new-btn">
//                             <i className="bx bx-plus font-size-16 "></i>
//                    Add New
//                   </button>
//                     </div>
//                 )}
//                 <TaskForm />
//             {/* {taskForm ? ( <TaskForm />):('')} */}
//         </div>
//     )
// }

export default Home

