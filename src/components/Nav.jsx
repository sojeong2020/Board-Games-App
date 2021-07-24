
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
 

const Nav = () => {
   
    return (
       <nav className="Nav">
            

            <div className="Nav_links">
            <Link className='Text-link' to="/reviews">
            <h2> All Reviews </h2>
            </Link>
            <Link className='Text-link' to = "/categories">
            <h2>Category</h2>
            </Link>
            </div>
            <div></div>

            <Link className='Text-link' to ="/">
            <h2>Log In <FontAwesomeIcon icon={faUser} /> </h2>
            </Link>
       </nav>   
    );
};

export default Nav;