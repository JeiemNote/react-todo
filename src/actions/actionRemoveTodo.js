export default function removeTodo(id) {

    return {
        type: 'TODO_REMOVE',
        id: id
    }
}