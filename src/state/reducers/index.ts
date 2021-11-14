import { combineReducers } from "redux";
import filesReducer from "./filesReducer";
import songsPaginationReducer from "./songsPaginationReducer";
import audioPlayerReducer from "./audioPlayerReducer";

const reducers = combineReducers({
    files: filesReducer,
    songsPagination: songsPaginationReducer,
    audioPlayer: audioPlayerReducer
})

export default reducers
export type State = ReturnType<typeof reducers>