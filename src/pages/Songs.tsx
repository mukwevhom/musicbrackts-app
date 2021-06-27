import React, {useEffect} from 'react';
import {Helmet} from "react-helmet";
import MainLayout from '../layouts/MainLayout';

const Songs = () => {
    useEffect(() => {
        fetchSongs();
    }, []);

    const fetchSongs = () => {
        console.log('test')
    }

    return (
        <MainLayout>
            <Helmet>
                <title>Songs | MusicBrackts</title>
            </Helmet>
            Songs
        </MainLayout>
    )
}

export default Songs;