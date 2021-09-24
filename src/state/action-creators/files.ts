import { ActionType } from '../action-types'
import { Dispatch } from 'redux';
import { Action } from '../actions';

const addSongFile = (file: File) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADD_SONG_FILE,
            payload: file
        })
    }
}

const removeSongFile = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.REMOVE_SONG_FILE
        })
    }
}

const addArtworkFile = (file: File) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADD_ARTWORK_FILE,
            payload: file
        })
    }
}

const removeArtworkFile = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.REMOVE_ARTWORK_FILE
        })
    }
}

const setIsUploading = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_IS_UPLOADING
        })
    }
}

export {
    addSongFile,
    removeArtworkFile,
    addArtworkFile,
    removeSongFile,
    setIsUploading
}