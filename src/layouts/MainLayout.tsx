import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/styles.scss'
import AudioPlayer from '../components/AudioPlayer';

export interface Props {
    children?: any;
}

const MainLayout: React.FC<Props> = (props) => {
    return (
        <main>
            <Header />
            {props.children}
            <Footer />
            <AudioPlayer />
        </main>
    )
}

export default MainLayout;