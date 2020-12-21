let id = 0;

const initialState = []

export const ADD_TODO_ACTION = 'ADD_TODO_ACTION'
export const DELETE_TODO_ACTION = 'DELETE_TODO_ACTION'
export const EDIT_TODO_ACTION = 'EDIT_TODO_ACTION'

export function todosReducer (state = initialState, action) {
    switch (action.type) {
      case ADD_TODO_ACTION:
        return [
          ...state, 
          {
            id: ++id, 
            ...action.payload
          }
        ]
      case DELETE_TODO_ACTION:
        return state.filter(todo => todo.id !== action.payload)
      case EDIT_TODO_ACTION:
        return state.map(todo => {
          if (todo.id === action.payload.id) {
            return {...todo, name: action.payload}
          } else {
            return todo
          }
        })
      default:
        return state
    }
  }