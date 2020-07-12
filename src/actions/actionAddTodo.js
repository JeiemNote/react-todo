export default function addTodo(text) {
    return {
        type: 'ADD_TODO',
        payload: text
    }
}