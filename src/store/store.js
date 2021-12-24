
import {combineReducers, createStore} from "redux";
import {productReducer} from "./productReducer";
import { favoriteReducer } from "./favoriteReducer";

const combine = combineReducers({
    productReducer,
    favoriteReducer
})

export const store = createStore(combine)