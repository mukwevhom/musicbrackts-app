import React, {useState} from 'react';
import styled from 'styled-components';
import { Pause, Play, SkipBack, SkipForward, RotateCw } from 'react-feather';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { State, actionCreators } from '../../state';

const StyledPlayerControls = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`

const StyledTimeInfo = styled.div`
    font-size: 16px;
    line-height: 1.2;
    color: #9CA3AF;
    @media (max-width: 575px) {
        display: none;
    }
`

const StyledSkipControl = styled.div`
    cursor: pointer;
`

const StyledPlayControl = styled.div`
    cursor: pointer;
    &.song-loading {
        svg {
            display: inline-block;
            vertical-align: bottom;
            animation-name: spin;
            animation-duration: 900ms;
            animation-iteration-count: infinite;
            animation-timing-function: linear; 
        }
    }
`

const PlayerControls = () => {
    const state = useSelector((state: State) => state.audioPlayer)
    const dispatch = useDispatch()
    const { pauseSong, playSong } = bindActionCreators(actionCreators, dispatch)

    function formatTime(time: number) {
        let minutes = Math.floor(time / 60);
        var seconds = Math.floor(time - minutes * 60).toLocaleString('en-ZA', {minimumIntegerDigits: 2, useGrouping:false});

        return `${minutes}:${seconds}`
    }

    return (
        <StyledPlayerControls>
            <StyledTimeInfo>
               {formatTime(state.currentTime)} / {formatTime(state.duration)}
            </StyledTimeInfo>
            <StyledSkipControl>
                <SkipBack />
            </StyledSkipControl>
            <StyledPlayControl className={`${state.songLoading ? 'song-loading': ''}`}>
                { (!state.songLoading && state.songPlaying) && (
                    <Pause size={40} onClick={() => {pauseSong();}} />
                )}
                { (!state.songLoading && !state.songPlaying) && (
                    <Play size={40} onClick={() => {playSong(state.songId);}} />
                )}
                { state.songLoading && (
                    <RotateCw size={40} />
                )}
            </StyledPlayControl>

            <StyledSkipControl>
                <SkipForward />
            </StyledSkipControl>
        </StyledPlayerControls>
    )
}

export default PlayerControls;