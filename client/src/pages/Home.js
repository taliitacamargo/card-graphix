import React from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_PROFILES } from '../utils/queries';

import '../css/content.css';

const Home = () => {
    return(
        <main className='CardPage d-flex justify-center align-content-center bg-light'>
            <div className='CardView justify-center'>Hello</div>
        </main>
    )
};

export default Home;
