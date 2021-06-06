import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import * as H from 'history';

export interface Props<S = H.LocationState> {
    to: H.LocationDescriptor<S>;
    className?: string;
    children?: string;
}

const CustomLink: React.FC<Props> = ({className, children, to}) => {
    return (
        <Link className={className} to={to} >
            {children}
        </Link>
    )
}

const StyledLink = styled(CustomLink)`
    appearance: none;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    line-height: 1;
    border: none;
    border-radius: 3px;
    padding: 0.5rem 0;
    transition: all 0.2s ease 0s;
    display: block;
`

const StyledLinkAsButtom = styled(StyledLink)`
    background-color: rgb(30, 30, 28);
    color: rgb(255, 255, 255);
    padding: 0.5rem;
`

export { StyledLink, StyledLinkAsButtom };