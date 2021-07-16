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
        <section className="Header">
            <div className="Home">
            <Link to ="/">
            <h2>Home <FontAwesomeIcon icon={faHome} /> </h2>
            </Link>
            </div>
            <div>
            <Link to="/reviews">
            <h2>Reviews <FontAwesomeIcon icon={faSearch} /> </h2>
            </Link>
            </div>
            <div>
            <h1>Board Games</h1>
            </div>
            
             <div className="Home_link">
             <p><strong>Hello {userLogin.username}</strong></p>
             </div>
             <div>
             <img className="Header_userImg" src={userLogin.name}alt={userLogin.username}></img>
             </div> 
            
           
            
        </section>
    );
};

export default Header;