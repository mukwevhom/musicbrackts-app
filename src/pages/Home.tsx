import React from 'react';
import MainLayout from '../layouts/MainLayout';
import AlgoliaAutoComplete from '../components/AlgoliaAutoComplete';

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
        </MainLayout>
        
    )
}

export default Home;