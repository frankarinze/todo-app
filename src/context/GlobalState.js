import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    todos: [ ]
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // TODO Actions
    const addTodo = (todo,content) => {
        dispatch({
            type: 'CREATE_TODO',
            payload: todo,content
        })
    }

    const deleteTodo = (id) => {
        dispatch({
            type: 'DELETE_TODO',
            payload: id
        })
    }

    const editTodo = (todo,content) => {
        dispatch({
            type: 'UPDATE_TODO',
            payload: todo,content
        })
    }

    return (
        <GlobalContext.Provider value={{
            todos: state.todos,
            deleteTodo,
            addTodo,
            editTodo
        }}>
            {children}
        </GlobalContext.Provider>
    )
}