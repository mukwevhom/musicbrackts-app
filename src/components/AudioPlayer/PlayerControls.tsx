import React, {useState} from 'react';
import styled from 'styled-components';
import { Pause, Play, SkipBack, SkipForward } from 'react-feather';

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
`

const PlayerControls = () => {
    const [songPlaying, setSongPlaying] = useState(false as Boolean);

    return (
        <StyledPlayerControls>
            <StyledTimeInfo>
                0:24 / 2:20
            </StyledTimeInfo>
            <StyledSkipControl>
                <SkipBack />
            </StyledSkipControl>
            <StyledPlayControl>
                { songPlaying && (
                    <Pause size={40} />
                )}
                { !songPlaying && (
                    <Play size={40} />
                )}
            </StyledPlayControl>

            <StyledSkipControl>
                <SkipForward />
            </StyledSkipControl>
        </StyledPlayerControls>
    )
}

export default PlayerControls;