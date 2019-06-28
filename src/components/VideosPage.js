import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HeroBanner from './HeroBanner';
import VideoListFilters from './VideoListFilters';

const VideosPage = () => (
    <div>
        <Header />
        <HeroBanner />
        <VideoListFilters />
        <div>
        <button>prev</button>
        <button>next</button>
        </div>
        <Footer />
    </div>
)

export default VideosPage;
