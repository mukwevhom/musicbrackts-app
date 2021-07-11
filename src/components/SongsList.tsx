import React from 'react';
import styled from 'styled-components';
import { Music } from 'react-feather';
import SongCard from '../components/SongCard';
import ListGrid from '../components/ListGrid';

export interface SongObject {
    'id' : string;
    'songname' : string;
    'featuredartist' ?: string;
    'fileextension': string;
    'artist': string;
    'createdAt': Date;
}

export interface Props {
    songs: Array<SongObject>
}

const NoSongs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const NoSongsIcon = styled.div`
    background-color: rgba(247,248,250,1);
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const NoSongsTitle = styled.h4`
    font-weight: 600;
    font-style: normal;
    font-size: 1.5rem;
    line-height: 2rem;
`

const NoSongsMessage = styled.p`
    font-size: 1.125rem;
    line-height: 1.5rem;
    white-space: pre-line;
    color: #9CA3AF;
    text-align: center;
`

const SongsList:React.FC<Props> = ({songs}) => {
    if(songs.length === 0) {
        return (
            <NoSongs>
                <NoSongsIcon>
                    <Music width="2rem" height="2rem" />
                </NoSongsIcon>
                <NoSongsTitle>No songs found</NoSongsTitle>
                <NoSongsMessage>Unfortunately, we can't find any song. Please refresh or try again later.</NoSongsMessage>
            </NoSongs>
        )
    }
    
    return (
        <ListGrid>
            {songs && (
                songs.map((song: SongObject) => (
                <SongCard key={song.id} songInfo={song} />))
            )}
        </ListGrid>
    )
}

export default SongsList;