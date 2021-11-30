import { ActionType } from '../action-types'

interface PlaySongAction {
    type : ActionType.PLAY_SONG;
    payload: string;
}

interface PauseSongAction {
    type : ActionType.PAUSE_SONG;
}

interface SetSongDurationAction {
    type : ActionType.SET_SONG_DURATION;
    payload: number;
}

interface SetSongCurrTimeAction {
    type : ActionType.SET_SONG_CURR_TIME;
    payload: number;
}

interface SetSongLoadingAction {
    type : ActionType.SET_SONG_LOADING;
    payload: boolean;
}

interface SetBufferedLengthAction {
    type : ActionType.SET_BUFFERED_LENGTH;
    payload: number;
}

interface SetSongSeekTimeAction {
    type : ActionType.SET_SONG_SEEK_TIME;
    payload: number;
}

export type Action = PlaySongAction | PauseSongAction | SetSongDurationAction | SetSongCurrTimeAction | SetSongLoadingAction | SetBufferedLengthAction | SetSongSeekTimeAction