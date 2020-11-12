export default (state, action) => {
    switch (action.type) {
      
      case 'CREATE_TODO':
        return {
          ...state,
          todos: [action.payload, ...state.todos]
        }
        case 'DELETE_TODO':
        return {
          ...state,
          todos: state.todos.filter(todo => {
            return todo.id !== action.payload;
          })
        }
      case 'UPDATE_TODO':
        const updateTodo = action.payload;
  
        const updatetodos = state.todos.map(todo => {
          if (todo.id === updateTodo.id) {
            return updateTodo;
          }
          return todo;
        })
        return {
          ...state,
          todos: updatetodos
        }
  
      default:
        return state;
    }
  }

  