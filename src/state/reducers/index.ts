import { combineReducers } from "redux";
import filesReducer from "./filesReducer";

const reducers = combineReducers({
    files: filesReducer
})

export default reducers
export type State = ReturnType<typeof reducers>