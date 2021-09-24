import { Action } from '../actions/songsPagination'
import { ActionType } from '../action-types'

type State = {
    currentPage: number,
    songsPerPage: number
}

const initialState = {
    currentPage: 1,
    songsPerPage: 20
}

const songsPaginationReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.CHANGE_SONGS_PAGE: {
            state.currentPage = action.payload
            return state
        }
        default:
            return state
    }
}

export default songsPaginationReducer