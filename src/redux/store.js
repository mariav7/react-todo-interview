import { createStore, combineReducers } from 'redux'
import { todosReducer } from './todosReducers'

export default createStore(combineReducers({
    todos: todosReducer,
}))