import React from 'react'
import { Card, CardAnchor, CardImage, CardInfo } from './CardStyledComponents'

export interface SongObject {
    'id' : string;
    'songname' : string;
    'featuredartist' ?: string;
    'fileextension': string;
    'artist': string;
    'createdAt': Date;
}

export interface Props {
    songInfo: SongObject
}

const SongCard:React.FC<Props> = ({songInfo}) => {

    const addDefaultSrc = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = '/musicbrackts-logo.png'
    }

    return (<Card>
        <CardAnchor href={`/song/${songInfo.id}`}>
            <CardImage>
                <img src={`${process.env.REACT_APP_API_URL}/file/artwork/${songInfo.id}`} onError={addDefaultSrc} alt={`${songInfo.artist}- ${songInfo.songname}`} />
            </CardImage>
            <CardInfo >
                <h4>{songInfo.songname}{songInfo.featuredartist && (` (feat ${songInfo.featuredartist})`)}</h4>
                <h4>{songInfo.artist}</h4>
            </CardInfo>
        </CardAnchor>
    </Card>)
}

export default SongCard