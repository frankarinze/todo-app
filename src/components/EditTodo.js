import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";

const EditTodo = (props) => {
    const { editTodo, todos } = useContext(GlobalContext);
    const [selectedTodo, setSelectedTodo] = useState({
        id: '',
        name: '',
        content : ''
    })
    const history = useHistory();
    const currentTodoId = props.match.params.id;

    useEffect(() => {
        const todoId = currentTodoId;
        const selectedTodo = todos.find(todo => todo.id === todoId);
        setSelectedTodo(selectedTodo);
    }, [currentTodoId, todos])

    const inputChange = (e) => {
        setSelectedTodo({
             ...selectedTodo, 
             [e.target.name]: e.target.value ,
             [e.target.content]: e.target.value 
            })
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
                    onChange={inputChange}
                    required
                    name="name"
                    className="form-control"
                />
                <input
                type="text"
                placeholder="Add description here"
                value={selectedTodo.content}
                onChange={inputChange}
                required
                name = "content"
                className="form-control"
            />

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
