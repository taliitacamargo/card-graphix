import React from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_PROFILES } from '../utils/queries';

import '../css/content.css';

const Home = () => {
    return(
        <main className='CardPage d-flex justify-center align-content-center bg-light'>
            <div className='CardView justify-center'>
                <div className="NameValue" style={{'right': '0.2in', 'top': '0.2in'}}>Isaac Carnes</div>
                <div className="EmailValue" style={{'right': '0.2in', 'top': '0.4in'}}>isaacjoshuadeveloper@gmail.com</div>
            </div>
        </main>
    )
};

export default Home;
