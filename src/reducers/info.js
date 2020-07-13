// Инициализируем наш стейт
const initialState = {
    todo: [
        {id: 0, text: "Захват мира", completed: false},
    ]
}

// И собственно всё что мы делаем с состоянием нашего приложения
export default function userInfo(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO': // По полю type в экшенах мы и определяем что же запускать.
            return {
                ...state, // Берём старый стейт и делаем новый, вставляя в него новые поля
                todo: [...state.todo,
                    {
                        id: state.todo.length,
                        text: action.payload,
                        completed: false
                    }
                ]
            }
        case 'TODO_COMPLETED':
            return {
                ...state,
                todo: state.todo.map(obj => {
                    if (obj.id === action.id) {
                        return {
                            ...obj,
                            completed: action.payload
                        }
                    }
                    return obj;
                })
            };
        case 'TODO_REMOVE':
            return{
                ...state,
                todo: state.todo.filter(({ id }) => id !== action.id)
            }

        default:
            return state;
    }
}