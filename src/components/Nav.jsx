import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <div className="Nav">
            <Link to="/reviews">
            <h2>Reviews</h2>
            </Link>
            <Link to="/categories">
            <h2>Categories</h2>
            </Link>
        </div>
    );
};

export default Nav;