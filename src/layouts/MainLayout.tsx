import React from 'react';
import Header from '../components/Header';
import '../styles/styles.scss'

export interface Props {
    children?: JSX.Element;
}

const MainLayout: React.FC<Props> = (props) => {
    return (
        <div>
            <Header />
            {props.children}
        </div>
    )
}

export default MainLayout;