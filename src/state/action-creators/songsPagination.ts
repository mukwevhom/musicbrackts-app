import { ActionType } from '../action-types'
import { Dispatch } from 'redux';
import { Action } from '../actions/songsPagination';

const changeSongsPage = (pageNumber: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.CHANGE_SONGS_PAGE,
            payload: pageNumber
        })
    }
}

export {
    changeSongsPage
}