import {combineReducers, createStore} from "redux";
import todoReducer from "./todo-reducer";

const rootReducers = combineReducers({
    todo: todoReducer
});

type RootReducersType = typeof rootReducers;
export type GlobalStateType = ReturnType<RootReducersType>

const store = createStore(rootReducers);

export default store;