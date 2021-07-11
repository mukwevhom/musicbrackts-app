import React, {useEffect, useState} from 'react';
import {Helmet} from "react-helmet";
import styled from 'styled-components';
import CustomSection from '../components/CustomSection';
import MainLayout from '../layouts/MainLayout';

const SongView = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
`

const SongArtwork = styled.div`
    width: 300px;
    aspect-ratio: 1;
    border-radius: 4px;
    overflow: hidden;
    img {
        width: 100%;
        object-fit: cover;
        object-position: center;
    }
`

const SongMetadata = styled.div`
    color: rgb(30,30,28);
    text-align: center;
    h1 {
        font-weight: 700;
        font-size: 2.5rem;
        line-height: 1.2;
    }
    span {
        font-size: 1.5rem;
        font-weight: 500;
        opacity: .7;
    }
`

const SongStats = styled.span`
    font-size: 1rem !important;
    display: block;
`

const SongAction = styled.div`

`

const ActionButton = styled.a`
    display: block;
    margin: 1.5rem auto 1.25rem;
    font-size: 1.125rem;
    line-height: 2rem;
    padding: 0.75rem 2rem;
    font-weight: 500;
    border-radius: 0.25rem;
    transition: all 0.2s ease 0s;
    outline: none !important;
    background-color: #f7f8fa;
    color: rgb(30, 30, 28);
`

const DownloadButton = styled(ActionButton)`
    background-color: rgb(30, 30, 28) !important;
    color: rgb(255, 255, 255) !important;
    &:hover {
        background-color: #f7f8fa;
        color: rgb(30, 30, 28);
    }
`

const Song = () => {
    const [songId] =useState(window.location.pathname.split('/').pop())
    const [songData, setSongData] = useState({} as any);

    console.log(window.location.pathname.split('/').pop())

    useEffect(() => {
        fetchSong().then((res) => {
            setSongData(res)
        });
    }, []);

    const fetchSong = async () => {
        try {
            let response = await fetch(`http://localhost:5000/song/${songId}`)
            if(!response.ok)
                return {}

            
            let songs = await response.json()

            return songs
        } catch (e) {
            console.log(e)
            return {}
        }
    }

    return (
        <MainLayout>
            <Helmet>
                <title>{`${songData.songName} - ${songData.artist}| MusicBrackts`}</title>
            </Helmet>
            <CustomSection showHeader={false}>
                <SongView>
                    <SongArtwork>
                        <img src={`http://localhost:5000/file/artwork/${songId}`} alt={`${songData.artist} - ${songData.songName}`} />
                    </SongArtwork>
                    <SongMetadata>
                        <h1>{songData.songName}{songData.featuredartist && (` (feat ${songData.featuredartist})`)}</h1>
                        <span>{songData.artist}</span>
                        <SongStats>{songData.downloads} Downloads · {`2.3 MB`} · {songData.created}</SongStats>
                    </SongMetadata>
                    <SongAction>
                        <DownloadButton href={`http://localhost:5000/song/${songId}/download`}>Download</DownloadButton>
                    </SongAction>
                </SongView>
            </CustomSection>
        </MainLayout>
    )
}

export default Song;