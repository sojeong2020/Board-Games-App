import { useContext ,useState, useEffect} from 'react';
import {UserContext} from '../contexts/User';
import {Link} from 'react-router-dom';
import { getUserByUsername } from '../utils/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch} from '@fortawesome/free-solid-svg-icons'
 
  

const Header = () => {
    const {user} = useContext(UserContext);
    const [userLogin,setUserLogin]=useState("");

    console.log(user)
    console.log(userLogin)

    useEffect(()=>{
    getUserByUsername(user.username).then((userFromApi)=>{
        console.log(userFromApi)
        setUserLogin(userFromApi)

    })
},[user.username])
    return (
        <div className="Header">
            <div className="Home">
            <Link to ="/">
            <h2>Home</h2>
            <FontAwesomeIcon icon={faHome} />
            </Link>
            <Link to="/reviews">
            <h2>Reviews</h2>
            <FontAwesomeIcon icon={faSearch} />

            </Link>
            </div>
            
             <div className="Home_link">
             <h2>Hello {userLogin.username}</h2>
             <img className="Header_userImg" src={userLogin.name}alt={userLogin.username}></img>
           
            </div> 
            
           
            
        </div>
    );
};

export default Header;