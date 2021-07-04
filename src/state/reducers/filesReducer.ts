import { Action } from '../actions'
import { ActionType } from '../action-types'

type State = {
    songFile: Array<File>,
    artworkFile: Array<File>,
    isUploading: boolean
}

const initialState = {
    songFile: [],
    artworkFile: [],
    isUploading: false
}

const filesReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.ADD_SONG_FILE: {
            state.songFile.push(action.payload)
            return state
        }
        case ActionType.REMOVE_SONG_FILE: {
            state.songFile.pop()
            return state
        }
        case ActionType.ADD_ARTWORK_FILE: {
            state.artworkFile.push(action.payload)
            return state
        }
        case ActionType.REMOVE_ARTWORK_FILE: {
            state.artworkFile.pop()
            return state
        }
        case ActionType.SET_IS_UPLOADING: {
            return {
                ...state,
                isUploading: !state.isUploading
            }
        }
        default:
            return state
    }
}

export default filesReducer