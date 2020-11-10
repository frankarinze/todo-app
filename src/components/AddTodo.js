import React, { useState, useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";

const AddTodo = () => {

    const [name, setName] = useState('');
    const { addTodo } = useContext(GlobalContext);
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            id: uuid(),
            name
        }
        addTodo(newUser);
        history.push("/");
    }

    const onChange = (e) => {
        setName(e.target.value);
    }
    return (
        <>
                <form onSubmit={onSubmit} className="form">
                    <h4>Add New Todo</h4>
                    <input
                        type="text"
                        placeholder="Enter todo title"
                        value={name}
                        onChange={onChange}
                        required
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

export default AddTodo
