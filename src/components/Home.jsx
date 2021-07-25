import React from 'react';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return (
        <main className="Login_home">
        <section >
              
 
        <div className="Welcome">
            <h1>WELCOME HOME</h1>
        </div>

        <div className="Login_link">
            <Link className="Text-link" to ="/users">
            <h1><FontAwesomeIcon icon={faUser} /> Log in here!</h1>
            </Link>
        </div>
           
        </section> 
        </main>
        
    );
};

export default Home;