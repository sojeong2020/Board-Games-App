
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch} from '@fortawesome/free-solid-svg-icons'
 

const Nav = () => {
   
    return (
       <nav className="Nav">
            <Link to ="/">
            <h2><FontAwesomeIcon icon={faUser} /> </h2>
            </Link>
            <Link to="/reviews">
            <h2><FontAwesomeIcon icon={faSearch} /> </h2>
            </Link>
            <Link to = "/categories">
            <h2>Category</h2>

            </Link>
        </nav>   
    );
};

export default Nav;