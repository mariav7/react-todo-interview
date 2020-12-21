import React from 'react';
import { ListItem, ListIcon } from "@chakra-ui/react"
import { MdBook } from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux'

const selectTodoById = (state, todoId) => {
    return state.todos.find((todo) => todo.id === todoId)
  }

const TaskList = ({ id }) => {
    const todo = useSelector((state) => selectTodoById(state, id))
    const { name } = todo

    const dispatch = useDispatch()

    const showDetail = () => {
        dispatch({ type: 'delete_todo', payload: todo.id })
      }

    return (
        <ListItem onClick={showDetail}>
            <ListIcon as={MdBook} color="#203e7a"/>
            {name}
        </ListItem>
    );
};

export default TaskList;