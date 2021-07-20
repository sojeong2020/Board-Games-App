import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <main className="Login_home">
        <section >
              
 
        <div className="Welcome">
            <h2>WELCOME HOME</h2>
        </div>

        <div className="Login_link">
            <Link className="Text-link" to ="/users">
            <h2>Log in here!</h2>
            </Link>
        </div>
           
        </section> 
        </main>
        
    );
};

export default Home;