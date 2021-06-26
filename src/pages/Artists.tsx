import React from 'react';
import {Helmet} from "react-helmet";
import MainLayout from '../layouts/MainLayout';

const Artists = () => {
    return (
        <MainLayout>
            <Helmet>
                <title>Artists | MusicBrackts</title>
            </Helmet>
            Artists
        </MainLayout>
    )
}

export default Artists;