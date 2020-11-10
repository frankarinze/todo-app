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
          todos: state.todos.filter(user => {
            return user.id !== action.payload;
          })
        }
      case 'UPDATE_TODO':
        const updateUser = action.payload;
  
        const updatetodos = state.todos.map(user => {
          if (user.id === updateUser.id) {
            return updateUser;
          }
          return user;
        })
        return {
          ...state,
          todos: updatetodos
        }
  
      default:
        return state;
    }
  }

  