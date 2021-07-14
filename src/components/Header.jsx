import { useContext } from 'react';
import {UserContext} from '../contexts/User';
import {Link} from 'react-router-dom';

const Header = () => {
    const {user} = useContext(UserContext);

    return (
        <div className="Header">
            <div className="Home">
            <Link to ="/">
            <h2>Home</h2>
            </Link>
            <Link to="/reviews">
            <h2>Reviews</h2>
            </Link>
            </div>

             <div className="Home_link">
             <h2>Hello {user.username}</h2>

           
            </div> 
            
           
            
        </div>
    );
};

export default Header;