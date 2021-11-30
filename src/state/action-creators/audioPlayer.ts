import { ActionType } from '../action-types'
import { Dispatch } from 'redux';
import { Action } from '../actions/audioPlayer';

const playSong = (song_id: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.PLAY_SONG,
            payload: song_id
        })
    }
}

const pauseSong = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.PAUSE_SONG
        })
    }
}

const setSongDuration = (duration: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_SONG_DURATION,
            payload: duration
        })
    }
}

const setSongCurrTime = (currentTime: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_SONG_CURR_TIME,
            payload: currentTime
        })
    }
}

const setSongLoading = (songIsLoading: boolean) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_SONG_LOADING,
            payload: songIsLoading
        })
    }
}

const setBufferedLength = (bufferedLength: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_BUFFERED_LENGTH,
            payload: bufferedLength
        })
    }
}

const setSongSeekTime = (seekTime: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_SONG_SEEK_TIME,
            payload: seekTime
        })
    }
}

export {
    playSong,
    pauseSong,
    setSongDuration,
    setSongCurrTime,
    setSongLoading,
    setBufferedLength,
    setSongSeekTime
}