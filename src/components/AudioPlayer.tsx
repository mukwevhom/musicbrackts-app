import React from 'react';
import styled from 'styled-components';
import PlayerControls from './AudioPlayer/PlayerControls';
import SongInfo from './AudioPlayer/SongInfo';

const StyledAudioPlayer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(247,248,250,1);
    padding: .75em 0;
    box-shadow:0 -0.5px 4px 0px #888888;
`

const AudioPlayer = () => {
    return (
        <StyledAudioPlayer>
            <div className="container mx-auto flex justify-between items-center flex-col sm:flex-row gap-y-2">
                <SongInfo />
                <PlayerControls />
            </div>
        </StyledAudioPlayer>
    )
}

export default AudioPlayer;