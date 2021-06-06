import React from 'react'
import { Card, CardAnchor, CardImage, CardInfo } from './CardStyledComponents'

const ArtistCard = () => {
    return (<Card>
        <CardAnchor href="/artist/test">
            <CardImage>
                <img src='http://placekitten.com/300/300' alt='Artist Name' />
            </CardImage>
            <CardInfo >
                <h4>Artist Name</h4>
            </CardInfo>
        </CardAnchor>
    </Card>)
}

export default ArtistCard