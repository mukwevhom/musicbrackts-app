import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PlayerControls from './AudioPlayer/PlayerControls';
import SongInfo from './AudioPlayer/SongInfo';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { State, actionCreators } from '../state';
import ProgressBar from './AudioPlayer/ProgressBar';
import { setBufferedLength } from '../state/action-creators';

const StyledAudioPlayer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(247,248,250,1);
    padding: .75em 0;
    #audio {
        display:none !important;
    }
`

const AudioPlayer = () => {
    const state = useSelector((state: State) => state.audioPlayer)
    const dispatch = useDispatch()
    const { setSongDuration, setSongCurrTime, setSongLoading, setBufferedLength } = bindActionCreators(actionCreators, dispatch)

    useEffect(() => {
        const audio = document.getElementById("audio") as HTMLAudioElement;
        
        if(audio) {
            // state setters wrappers
            const setAudioData = () => {
                setSongDuration(audio.duration);
                setSongCurrTime(audio.currentTime);
                setSongLoading(false);
                setBufferedLength(audio.buffered.length)
            }

            const setAudioTime = () => setSongCurrTime(audio.currentTime);

            audio.addEventListener("loadeddata", setAudioData);

            audio.addEventListener("timeupdate", setAudioTime);

            audio.addEventListener('waiting', () => { setSongLoading(true) });

            state.songPlaying ? audio.play() : audio.pause();

            return () => {
                audio.removeEventListener("loadeddata", setAudioData);
                audio.removeEventListener("timeupdate", setAudioTime);
            }
        }
    })

    // useEffect(() => {
    //     const audio = document.getElementById("audio") as HTMLAudioElement;

    //     audio.oncanplay = function() {
    //         audio.currentTime = state.seekTime;
    //     }
    // }, [state.seekTime])

    return (
        <StyledAudioPlayer>
            <audio id="audio" loop={false}>
                <source src={`${process.env.REACT_APP_API_URL}/file/song/${state.songId}`} />
                Your browser does not support the <code>audio</code> element.
            </audio>
            {!state.songLoading && (<ProgressBar />)}
            
            <div className="container mx-auto flex justify-between items-center flex-col sm:flex-row gap-y-2">
                <SongInfo />
                <PlayerControls />
            </div>
        </StyledAudioPlayer>
    )
}

export default AudioPlayer;