import React from "react";
import { Stack, Heading, Grid, GridItem, List } from "@chakra-ui/react"
import { useSelector, shallowEqual } from 'react-redux'

/* Components */
import TaskList from "./components/TaskList"
import TaskInput from "./components/TaskInput"
import TaskDetail from "./components/TaskDetail"
import { TaskInfosStore } from "./components/TaskInfos";

const selectTodoIds = (state) => state.todos.map((todo) => todo.id)

function App() {
  const todoIds = useSelector(selectTodoIds, shallowEqual)

    const taskList = todoIds.map((todoId) => {
    return <TaskList key={todoId} id={todoId} />
    })

    const taskDetail = todoIds.map((todoId) => {
      return <TaskDetail key={todoId} id={todoId} />
      })

  return (
    <Stack>
      <Heading size="xl" bg="#203e7a" color="white"m="0"p="25px">React ToDo</Heading>
      <Grid >

        <TaskInput />

        <GridItem colSpan={2} rowSpan={1}border="1px" borderColor="gray.300">
          <Heading size="lg" m="0" p="20px">Tasks</Heading>
        </GridItem>

        <GridItem colSpan={3} rowSpan={3} border="1px" borderColor="gray.300">
          {taskDetail}
          <TaskInfosStore />
        </GridItem>

        <GridItem colSpan={2} rowSpan={2}>
          <List spacing={3} fontSize="25px" m="0" px="25px">
              {taskList}
          </List>
        </GridItem>

      </Grid>
    </Stack>
  );
}

export default App;
