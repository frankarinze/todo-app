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
    const addTodo = (user) => {
        dispatch({
            type: 'CREATE_TODO',
            payload: user
        })
    }

    const deleteTodo = (id) => {
        dispatch({
            type: 'DELETE_TODO',
            payload: id
        })
    }

    const editTodo = (user) => {
        dispatch({
            type: 'UPDATE_TODO',
            payload: user
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