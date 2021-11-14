import React from 'react';
import styled from 'styled-components';

const StyledSongInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

const StyledSongArtwork = styled.div`
    width: 46px;
    aspect-ratio: 1;
    overflow: hidden;
    border-radius: 0.375rem;
    img {
        width: 100%;
        object-fit: cover;
        object-position: center;
    }
`

const StyledSongMetadata = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    & > div {
        font-size: 16px;
        line-height: 1.2;
        font-weight: bold;
        &:last-of-type {
            color: #9CA3AF;
        }
    }
`

const SongInfo = () => {
    return (
        <StyledSongInfo>
            <StyledSongArtwork>
                <img src='/musicbrackts-logo.png' alt="ArtistName - SongName" />
            </StyledSongArtwork>
            <StyledSongMetadata>
                <div className="song-info-song-name">Song Name</div>
                <div className="song-info-artist-name">Artist Name</div>
            </StyledSongMetadata>
        </StyledSongInfo>
    )
}

export default SongInfo;