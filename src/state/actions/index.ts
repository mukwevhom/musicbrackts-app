import { ActionType } from '../action-types'

interface AddFileAction {
    type : ActionType.ADD_SONG_FILE | ActionType.ADD_ARTWORK_FILE ;
    payload : File;
}

interface RemoveFileAction {
    type : ActionType.REMOVE_SONG_FILE | ActionType.REMOVE_ARTWORK_FILE | ActionType.SET_IS_UPLOADING;
}

export type Action = AddFileAction | RemoveFileAction