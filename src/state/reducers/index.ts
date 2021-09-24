import { combineReducers } from "redux";
import filesReducer from "./filesReducer";
import songsPaginationReducer from "./songsPaginationReducer";

const reducers = combineReducers({
    files: filesReducer,
    songsPagination: songsPaginationReducer
})

export default reducers
export type State = ReturnType<typeof reducers>