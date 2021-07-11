import React, {useEffect, useState} from 'react';
import MainLayout from '../layouts/MainLayout';
import AlgoliaAutoComplete from '../components/AlgoliaAutoComplete';
import CustomSection from '../components/CustomSection';
import ArtistCard from '../components/ArtistCard';
import SongsList from '../components/SongsList';
import ListGrid from '../components/ListGrid';

const Home = () => {
    const [songsData, setSongsData] = useState([] as any);

    useEffect(() => {
        fetchSongs().then((res) => {
            setSongsData(res)
        });
    }, []);

    const fetchSongs = async () => {
        try {
            let response = await fetch(`http://localhost:5000/songs?count=5`)
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
            <section className='hero-section'>
                <div className='container'>
                    <div className='hero-title'>
                        <h2>A platform to discover<br />music and artists</h2>
                    </div>
                    <div className='hero-search'>
                        <AlgoliaAutoComplete placeholder="Search Music" />
                    </div>
                </div>
            </section>
            <CustomSection headerText="Latest Uploads" viewMore='/songs'>
                <SongsList songs={songsData} />
            </CustomSection>
            <CustomSection headerText="Top Artist" viewMore='/artists' backgroundColor='rgb(30, 30, 28)'>
                <ListGrid>
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
                </ListGrid>
            </CustomSection>
        </MainLayout>
        
    )
}

export default Home;