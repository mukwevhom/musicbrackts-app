import React, {Suspense, useEffect, useState} from 'react';
import {Helmet} from "react-helmet";
import MainLayout from '../layouts/MainLayout';
import CustomSection from '../components/CustomSection';
import SongsList from '../components/SongsList';
import PageHeader from '../components/PageHeader';
import { useSelector } from 'react-redux';
import { State } from '../state';
import SongsPagination from '../components/SongsPagination';

const Songs = () => {
    const [songsData, setSongsData] = useState([] as any);
    const state = useSelector((state: State) => state.songsPagination)
    const [currPageNumber, setCurrPageNumber] = useState(state.currentPage)

    useEffect(() => {
        fetchSongs().then((res) => {
            setSongsData(res)
        });
    }, [currPageNumber]);

    const fetchSongs = async () => {
        try {
            let response = await fetch(`${process.env.REACT_APP_API_URL}/songs?page=${currPageNumber}&count=${state.songsPerPage}&order_by=createdAt`)
            if(!response.ok)
                return []

            let songs = await response.json()

            return songs
        } catch (e) {
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
                <SongsPagination onPageChange={(pageNum: number) => setCurrPageNumber(pageNum)} />
            </CustomSection>
        </MainLayout>
    )
}

export default Songs;