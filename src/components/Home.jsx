import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <main>
        <div>
            <h2>WELCOME HOME</h2>
        </div>

        <div>
            <Link to ="/users">
            <h2>Log in</h2>
            </Link>
        </div>
        </main>
        
    );
};

export default Home;