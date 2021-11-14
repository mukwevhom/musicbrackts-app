import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/styles.scss'
import AudioPlayer from '../components/AudioPlayer';
import { useSelector } from 'react-redux';
import { State } from '../state';

export interface Props {
    children?: any;
}

const MainLayout: React.FC<Props> = (props) => {
    const state = useSelector((state: State) => state.audioPlayer)
    
    return (
        <main>
            <Header />
            {props.children}
            <Footer />
            {state.playerActive && (
                <AudioPlayer />
            )}
        </main>
    )
}

export default MainLayout;