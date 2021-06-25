import React from 'react';
import {Helmet} from "react-helmet";
import MainLayout from '../layouts/MainLayout';

const Songs = () => {
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