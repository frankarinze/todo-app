import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";

const TodoList = () => {
    const { todos, deleteTodo } = useContext(GlobalContext);

    return (
        <div>
            {todos.length > 0 ? (
                <>
                    {todos.map(todo => (
                        <ul className="d-flex" key={todo.id}>
                            <li className="list-item">
                                <span>{todo.name} </span>
                                <span>{todo.content} </span>
                                <div className="ml-auto">
                                    <Link to={`/edit/${todo.id}`} color="warning" className="btn btn-warning mr-1">Edit</Link>
                                    <button type="button" className="btn-edit task-btn" onClick={() => deleteTodo(todo.id)} >Delete</button>
                                </div>
                            </li>
                        </ul>
                    ))}
                </>
            ) : (
                    <h4 className="text-center">Add new Todo</h4>
                )}
        </div>
    )
}

export default TodoList;