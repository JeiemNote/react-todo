export default function completedTodo(check,id) {
    // Функция с полялми, которые мы передали диспатчем в компоненте
    // Закидываем нужные поля, главное - type, по нему найдём в сторе что делать с данными
    // А другие это уже на вкус и цвет, но часто юзают payload.
    return {
        type: 'TODO_COMPLETED',
        payload: check,
        id: id
    }
}