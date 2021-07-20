import React from 'react';
import {Link} from 'react-router-dom'
import dice from '../img/dice.png';

const Home = () => {
    return (
        <main>
            
            <img className="Home_img" src={dice} alt="Dice" style={{ height: 100 }}  />
 *
        <div>
            <h2>WELCOME HOME</h2>
        </div>

        <div>
            <Link className="Text-link" to ="/users">
            <h2>Log in</h2>
            </Link>
        </div>
           
        
        </main>
        
    );
};

export default Home;