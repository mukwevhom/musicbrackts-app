import { Action } from '../actions/audioPlayer'
import { ActionType } from '../action-types'

type State = {
    songId: string,
    songPlaying: boolean,
    playerActive: boolean,
    duration: number,
    currentTime: number,
    songLoading: boolean,
    bufferedLength: number,
    seekTime: number
}

const initialState = {
    songId: '',
    songPlaying: false,
    playerActive: false,
    duration: 0,
    currentTime: 0,
    songLoading: false,
    bufferedLength: 0,
    seekTime: 0
}

const audioPlayerReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.PLAY_SONG: {
            return {
                ...state,
                songId: action.payload,
                songPlaying: true,
                playerActive: true
            }
        }
        case ActionType.PAUSE_SONG: {
            return {
                ...state,
                songPlaying: false
            }
        }
        case ActionType.SET_SONG_DURATION: {
            return {
                ...state,
                duration: action.payload
            }
        }
        case ActionType.SET_SONG_CURR_TIME: {
            return {
                ...state,
                currentTime: action.payload
            }
        }
        case ActionType.SET_SONG_LOADING: {
            return {
                ...state,
                songLoading: action.payload
            }
        }
        case ActionType.SET_BUFFERED_LENGTH: {
            return {
                ...state,
                bufferedLength: action.payload
            }
        }
        case ActionType.SET_SONG_SEEK_TIME: {
            return {
                ...state,
                seekTime: action.payload
            }
        }
        default:
            return state
    }
}

export default audioPlayerReducer