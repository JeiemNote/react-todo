export default function completedTodo(check,id) {
    return {
        type: 'TODO_COMPLETED',
        payload: check,
        id: id
    }
}