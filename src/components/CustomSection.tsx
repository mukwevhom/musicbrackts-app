import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export interface Props {
    showHeader ?: boolean;
    headerText ?: string;
    subHeaderText ?: string;
    children?: any;
    backgroundColor?: string;
    viewMore ?: string;
}

const Section = styled.section<{bgColor?: string}>`
    padding: 60px 0;
    background-color: ${props => props.bgColor || 'white'};
    color: ${props => props.bgColor ? '#fff' : '#000'};
`

const SectionHeader = styled.div`
    display: flex;
    align-items: center;
    h2 {
        font-size: 1.5rem;
        line-height: 2.25rem;
        font-weight: 500;
        flex:1;
        span {
            display: block;
            font-weight: 200;
            line-height: 1;
            font-size: 1rem;
        }
    }
    a {
        text-decoration: underline;
    }
    & + div {
        margin-top:24px;
    }
`

const SectionContent = styled.div`
    
`

const CustomSection: React.FC<Props> = ({showHeader=true, headerText, subHeaderText, children, backgroundColor, viewMore}) => {
    return (
        <Section bgColor={backgroundColor}>
            <div className='container'>
                {showHeader &&
                    (<SectionHeader>
                        <h2>{headerText}
                            {subHeaderText &&
                                (<span>{subHeaderText}</span>)}
                        </h2>
                        
                        {viewMore && (
                            <Link to={viewMore} >View More &gt;</Link>)}
                    </SectionHeader>)}
                <SectionContent>
                    {children}
                </SectionContent>
            </div>
        </Section>
    )
}

export default CustomSection