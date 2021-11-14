import React, { useEffect } from 'react';
import styled from 'styled-components';
import PlayerControls from './AudioPlayer/PlayerControls';
import SongInfo from './AudioPlayer/SongInfo';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { State, actionCreators } from '../state';

const StyledAudioPlayer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(247,248,250,1);
    padding: .75em 0;
    box-shadow:0 -0.5px 4px 0px #888888;
    #audio {
        display:none !important;
    }
`

const AudioPlayer = () => {
    const state = useSelector((state: State) => state.audioPlayer)
    const dispatch = useDispatch()
    const { setSongDuration, setSongCurrTime, setSongLoading } = bindActionCreators(actionCreators, dispatch)

    useEffect(() => {
        const audio = document.getElementById("audio") as HTMLAudioElement;

        if(audio) {
            // state setters wrappers
            const setAudioData = () => {
                setSongDuration(audio.duration);
                setSongCurrTime(audio.currentTime);
                setSongLoading(false);
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

    return (
        <StyledAudioPlayer>
            <audio id="audio" loop={false}>
                <source src={`${process.env.REACT_APP_API_URL}/file/song/${state.songId}`} />
                Your browser does not support the <code>audio</code> element.
            </audio>
            <div className="container mx-auto flex justify-between items-center flex-col sm:flex-row gap-y-2">
                <SongInfo />
                <PlayerControls />
            </div>
        </StyledAudioPlayer>
    )
}

export default AudioPlayer;