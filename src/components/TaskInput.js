import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import {
    Input,
    InputGroup,
    FormLabel,
    Box,
    Button,
    GridItem
  } from "@chakra-ui/react"
  import { addTodoAction } from '../redux/todosActions'

const TaskInput = props => {
    const [name, setText] = useState('')
    const dispatch = useDispatch()
  
    const handleChange = (newtask) => setText(newtask.target.value)
  
    const handleKeyDown = (newtask) => {
      const trimmedText = name.trim()
      if (newtask.which === 13 && trimmedText) {
        dispatch(addTodoAction(trimmedText))
        setText('')
      }
    }
    
    const handleClick = () => {
        const trimmedText = name.trim()
        dispatch(addTodoAction(trimmedText))
        setText('')
    }
    
    return (
        <GridItem colSpan={5} rowSpan={1}>
            <Box m="25px">
                <FormLabel fontSize="xl">Task</FormLabel>
                <InputGroup> 
                    <Input
                    placeholder="Enter task name"
                    size="lg"
                    value={name}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    />
                    <Button
                    mx="25px"
                    size="lg"
                    colorScheme="blue"
                    onClick={handleClick}>
                        Add Task
                    </Button>
                </InputGroup>
            </Box>
        </GridItem> 
    );
};

export default TaskInput;
