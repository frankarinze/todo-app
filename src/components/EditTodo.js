import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";

const EditTodo = (props) => {
    const { editTodo, todos } = useContext(GlobalContext);
    const [selectedTodo, setSelectedTodo] = useState({
        id: '',
        name: ''
    })
    const history = useHistory();
    const currentTodoId = props.match.params.id;

    useEffect(() => {
        const userId = currentTodoId;
        const selectedTodo = todos.find(user => user.id === userId);
        setSelectedTodo(selectedTodo);
    }, [currentTodoId, todos])

    const onChange = (e) => {
        setSelectedTodo({ ...selectedTodo, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        editTodo(selectedTodo);
        history.push("/")
    }

    return (
        <>
            <form onSubmit={onSubmit} className="form">
                <h4>Edit todo</h4>
                <input
                    type="text"
                    placeholder="Enter todo title"
                    value={selectedTodo.name}
                    onChange={onChange}
                    required
                    name="name"
                    className="form-control"
                />
                {/* <input
                type="text"
                placeholder="Add description here"
                value={description}
                onChange={descriptionChange}
                required
                className="form-control"
            /> */}

                <div className="buttons">
                    <button type="submit" className="btn add-task-btn">
                        {/* {editItem ? 'Edit Task' : 'Add Task'} */}
                    Add Task
                </button>
                    <Link to="/" className="btn clear-btn">Clear list</Link>
                </div>
            </form>

        </>
    )
}

export default EditTodo
