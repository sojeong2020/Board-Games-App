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
            </div>

             <div className="Home_link">
            <Link to="/reviews">
            <h2>Reviews</h2>
            </Link>
            </div> 
            
           <div>
               <h2>Loggined as {user.username}</h2>
           </div> 
            
        </div>
    );
};

export default Header;