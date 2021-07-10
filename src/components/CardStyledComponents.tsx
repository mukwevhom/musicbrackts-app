import styled from 'styled-components'

const Card = styled.div`
    width: 100%;
    overflow: hidden;
    border-radius: 0.5rem;
    box-shadow: rgb(0 0 0 / 10%) 0px 0.0625rem 0.125rem, rgb(0 0 0 / 15%) 0px 0.25rem 1rem -0.125rem;
    transition: box-shadow 0.5s ease-in-out;
    &:hover {
        box-shadow: rgb(44 50 66 / 8%) 0rem 0.5rem 1rem, rgb(44 50 66 / 8%) 0rem 0.0625rem 0.0625rem;
    }
`

const CardAnchor = styled.a`
    display: flex;
    flex-direction: column;
    color: #000;
`

const CardImage = styled.figure`
    width: 100%;
    aspect-ratio: 4/3;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
`

const CardInfo = styled.div`
    padding: 0.75rem;
    background-color: #fff;
    h4 {
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 500;
        &:last-of-type:not(:first-of-type) {
            color: #6B7280;
            margin-top: 0.25rem;
            font-weight: normal;
        }
    }
`

export { Card, CardAnchor, CardImage, CardInfo };