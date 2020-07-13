import { combineReducers } from "redux";
import userInfo from "./info";

//Создаём корневой редьюсер, куда засунем остальные
const rootReducer = combineReducers({
    userInfo // У нас один
})

export default rootReducer;