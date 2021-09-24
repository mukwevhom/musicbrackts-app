import { ActionType } from '../action-types'

interface ChangeSongsPageAction {
    type : ActionType.CHANGE_SONGS_PAGE;
    payload: number
}

export type Action = ChangeSongsPageAction