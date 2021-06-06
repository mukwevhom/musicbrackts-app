import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    padding: 1em 0;
    background-color: rgba(247, 248, 250, 1);
`

const BaseFooter = styled.div`
    display: flex;
`

const LegalLinks = styled.ul`
    display:flex;
    justify-content: flex-end;
    flex: 1;
    gap: .75em;
    a {
        color: #9CA3AF;
    }
`

const Footer = () => {
    return (
        <StyledFooter>
            <div className="container mx-auto flex">
                <BaseFooter>
                    <p>&copy; {new Date().getFullYear()} MusicBracks</p>
                    <LegalLinks>
                        <li>
                            <Link to='legal/terms'>Terms of Service</Link>
                        </li>
                        <li>
                            <Link to='legal/privacy'>Privacy Policy</Link>
                        </li>
                    </LegalLinks>
                </BaseFooter>
            </div>
        </StyledFooter>
    )
}

export default Footer;