import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { State } from '../../state';

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
    const state = useSelector((state: State) => state.audioPlayer);
    const [songData, setSongData] = useState({} as any);

    useEffect(() => {
        fetchSong().then((res) => {
            if(Object.keys(res).length === 0) {
                window.location.href = '/'
            }
            setSongData(res)
        }).catch(error => {
            console.log(error)
        });
    }, [state.songId]);

    const fetchSong = async () => {
        try {
            let response = await fetch(`${process.env.REACT_APP_API_URL}/song/${state.songId}`)
            if(!response.ok)
                return {}

            
            let songs = await response.json()

            return songs
        } catch (e) {
            window.location.href = '/songs'
        }
    }

    const addDefaultSrc = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = '/musicbrackts-logo.png'
    }

    return (
        <StyledSongInfo>
            <StyledSongArtwork>
                <img src={`${process.env.REACT_APP_API_URL}/file/artwork/${state.songId}`} alt={`${songData.artist} - ${songData.songName}`} onError={addDefaultSrc} />
            </StyledSongArtwork>
            <StyledSongMetadata>
                <div className="song-info-song-name">{songData.songName}</div>
                <div className="song-info-artist-name">{songData.artist}</div>
            </StyledSongMetadata>
        </StyledSongInfo>
    )
}

export default SongInfo;