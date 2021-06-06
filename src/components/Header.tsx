import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { StyledLink, StyledLinkAsButtom } from './CustomLink'

const StyledHeader = styled.header`
    padding: 1em 0;
    background-color: rgba(247, 248, 250, 1);
`

const Header = () => {
    return (
        <StyledHeader>
            <div className="container mx-auto flex">
                <div className="header-logo">
                    <Link to="/">[MUSIC]</Link>
                </div>
                <div className="header-nav">
                    <ul>
                        <li>
                            <StyledLink to='songs' >Songs</StyledLink>
                        </li>
                        <li>
                            <StyledLink to='artists' >Artists</StyledLink>
                        </li>
                        <li>
                            <StyledLinkAsButtom to='upload-music' >Upload Music</StyledLinkAsButtom>
                        </li>
                    </ul>
                </div>
            </div>
        </StyledHeader>
    )
}

export default Header;