import { connect } from 'react-redux'

export function TaskInfos ({todos}) {
    return JSON.stringify(todos)
}

export const TaskInfosStore = connect(
    (state) => ({
        todos: state.todos
    })
)(TaskInfos)