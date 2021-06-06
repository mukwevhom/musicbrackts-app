import React from 'react';
import MainLayout from '../layouts/MainLayout';
import AlgoliaAutoComplete from '../components/AlgoliaAutoComplete';
import CustomSection from '../components/CustomSection';
import styled from 'styled-components'
import SongCard from '../components/SongCard';
import ArtistCard from '../components/ArtistCard';

const ListGrid = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: auto;
    grid-auto-columns: auto;
    gap: 1rem;
    justify-content: center;
    @media (max-width: 576px) {
        grid-auto-flow: row;
        grid-template-columns: 1fr 1fr;
    }
`

const Home = () => {
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
                <ListGrid>
                    <SongCard />
                    <SongCard />
                    <SongCard />
                    <SongCard />
                    <SongCard />
                </ListGrid>
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