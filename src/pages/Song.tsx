import React from 'react';
import {Helmet} from "react-helmet";
import MainLayout from '../layouts/MainLayout';

const Song = () => {
    return (
        <MainLayout>
            <Helmet>
                <title>Song Name - Song Artist| MusicBrackts</title>
            </Helmet>
            Single Song
        </MainLayout>
    )
}

export default Song;