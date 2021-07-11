import React from 'react';
import styled from 'styled-components'

export interface Props {
    'title' : string;
}

const StylePageHeader = styled.div`
    background: #e5e7eb;
    padding: 1.5rem;
`

const PageTitle = styled.h1`
    width: fit-content;
    margin: 0px auto;
    padding: 0px;
    font-weight: 600;
    font-style: normal;
    font-size: 2rem;
    line-height: 2.5rem;

`

const PageHeader:React.FC<Props> = ({title}) => {
    return (
        <StylePageHeader>
            <div className='container'>
                <PageTitle>{title}</PageTitle>
            </div>
        </StylePageHeader>
    )
}

export default PageHeader