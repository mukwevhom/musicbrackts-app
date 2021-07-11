import React, {useEffect, useState} from 'react';
import {Helmet} from "react-helmet";
import MainLayout from '../layouts/MainLayout';
import CustomSection from '../components/CustomSection';
import SongsList from '../components/SongsList';
import PageHeader from '../components/PageHeader';

const Songs = () => {
    const [songsData, setSongsData] = useState([] as any);

    useEffect(() => {
        fetchSongs().then((res) => {
            setSongsData(res)
        });
    }, []);

    const fetchSongs = async () => {
        try {
            let response = await fetch(`http://localhost:5000/songs`)
            if(!response.ok)
                return []

            
            let songs = await response.json()

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
            <PageHeader title="Songs" />
            <CustomSection showHeader={false}>
                <SongsList songs={songsData} />
            </CustomSection>
        </MainLayout>
    )
}

export default Songs;