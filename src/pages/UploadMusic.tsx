import React from 'react';
import {Helmet} from "react-helmet";
import MainLayout from '../layouts/MainLayout';

const UploadMusic = () => {
    return (
        <MainLayout>
            <Helmet>
                <title>Upload Music | MusicBrackts</title>
            </Helmet>
            Upload Music
        </MainLayout>
    )
}

export default UploadMusic;