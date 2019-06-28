import React from 'react';
import {Link} from 'react-router-dom';

export const HeroBanner = () => {
    return (
        <div>
            <h2>Hero Banner</h2>
            <p>Some banner text</p>
            <Link to="videos">Videos</Link>
        </div>
    );   
};

export default HeroBanner;


