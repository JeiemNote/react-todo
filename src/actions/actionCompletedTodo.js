export default function completedTodo(check,id) {
    console.log(check)
    console.log(id)
    return {
        type: 'TODO_COMPLETED',
        payload: check,
        id: id
    }
}