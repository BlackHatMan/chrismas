
import {combineReducers, createStore} from "redux";
import {productReducer} from "./productReducer";

const combine = combineReducers({
    productReducer
})

export const store = createStore(combine)