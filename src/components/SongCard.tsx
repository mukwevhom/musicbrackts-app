import React from 'react'
import { Card, CardAnchor, CardImage, CardInfo } from './CardStyledComponents'

const SongCard = () => {
    return (<Card>
        <CardAnchor href="/song/test">
            <CardImage>
                <img src='http://placekitten.com/300/300' alt='Artist Name - Song Name' />
            </CardImage>
            <CardInfo >
                <h4>Song Name</h4>
                <h4>Artist Name</h4>
            </CardInfo>
        </CardAnchor>
    </Card>)
}

export default SongCard