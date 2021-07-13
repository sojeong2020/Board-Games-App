import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="Header">
            <div className="Home">
            <Link to ="/">
            <h2>Games</h2>
            </Link>
            </div>

             <div className="Home_link">
            <Link to="/reviews">
            <h2>Reviews</h2>
            </Link>
            </div> 
            
           
            
        </div>
    );
};

export default Header;