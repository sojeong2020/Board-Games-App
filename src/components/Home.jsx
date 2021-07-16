import React from 'react';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
const Home = () => {
    return (
        <main>
        <div>
            <h2>WELCOME HOME</h2>
        </div>

        <div>
            <Link to ="/users">
            <h2>Log in</h2>
            <FontAwesomeIcon icon={faUser} />
            </Link>
        </div>
        </main>
        
    );
};

export default Home;