import React from 'react';
import {Helmet} from "react-helmet";
import MainLayout from '../layouts/MainLayout';

const Artist = () => {
    return (
        <MainLayout>
            <Helmet>
                <title>Artist Name | MusicBrackts</title>
            </Helmet>
            Artist
        </MainLayout>
    )
}

export default Artist;