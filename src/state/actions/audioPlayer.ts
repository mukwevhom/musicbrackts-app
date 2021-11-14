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

interface SetSongLoading {
    type : ActionType.SET_SONG_LOADING;
    payload: boolean;
}

export type Action = PlaySongAction | PauseSongAction | SetSongDurationAction | SetSongCurrTimeAction | SetSongLoading