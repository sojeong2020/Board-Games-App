import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="Header">
            <Link to="/reviews">
            <h1>Board Games</h1>
            </Link>
        </div>
    );
};

export default Header;