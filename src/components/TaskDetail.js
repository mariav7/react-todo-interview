import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Box, HStack } from '@chakra-ui/react'
import { deleteTodoAction, editTodoAction } from '../redux/todosActions'

const selectTodoById = (state, todoId) => {
  return state.todos.find((todo) => todo.id === todoId)
}

const TaskDetail = ({ id }) => {
  const todo = useSelector((state) => selectTodoById(state, id))
  const { name } = todo

  const dispatch = useDispatch()

  const onEdit = () => {
    dispatch(editTodoAction(todo.id))
  }

  const onDelete = () => {
    dispatch(deleteTodoAction(todo))
  }

  return (
      <HStack spacing="5px">
          <Box w="60%">
              {name}
          </Box>
          <Box w="15%" align="center">
              <Button size="md" onClick={() => onEdit(name)}>EDIT</Button>
          </Box>
          <Box w="15%" align="center">
              <Button size="md" colorScheme="red" onClick={onDelete}>DELETE</Button>
          </Box>
      </HStack>
  )
}

export default TaskDetail
