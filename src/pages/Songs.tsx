import React, {useEffect, useState} from 'react';
import {Helmet} from "react-helmet";
import MainLayout from '../layouts/MainLayout';

const Songs = () => {
    const [songsData, setSongsData] = useState([] as any);

    useEffect(() => {
        fetchSongs().then((res) => {
            setSongsData(res)
        });
    }, []);

    const fetchSongs = async () => {
        try {
            let songs = await fetch(`http://localhost:5000/songs?count=5`)

            return songs
        } catch (e) {
            console.log(e)
            return []
        }
    }

    return (
        <MainLayout>
            <Helmet>
                <title>Songs | MusicBrackts</title>
            </Helmet>
            Songs
            {songsData}
        </MainLayout>
    )
}

export default Songs;