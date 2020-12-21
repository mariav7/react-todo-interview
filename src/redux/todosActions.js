import { ADD_TODO_ACTION, DELETE_TODO_ACTION, EDIT_TODO_ACTION } from "./todosReducers";

export const deleteTodoAction = (todo) => ({
    type: DELETE_TODO_ACTION,
    payload: todo.id
})

export const addTodoAction = (name) => ({
    type: ADD_TODO_ACTION,
    payload: {name}
})

export const editTodoAction = (name) => ({
    type: EDIT_TODO_ACTION,
    payload: {name}
})
