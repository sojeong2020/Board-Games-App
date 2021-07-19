import { useContext ,useState, useEffect} from 'react';
import {UserContext} from '../contexts/User';
import {Link} from 'react-router-dom';
import { getUserByUsername } from '../utils/api';

 
  

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
        <header className="Header">
            <div className="Home">
            <Link className='Text-link' to ="/">
            <h1>Board Games</h1>
            </Link>
            </div>
           
            <span> </span>
             <div className="Home_link">
             <p><strong>{userLogin.username? `Hello ${userLogin.username}`: `Hi there!`}</strong></p>
             </div>
             <div>
{/*              <img className="Header_userImg" src={userLogin.name}alt={userLogin.username}></img>
 */}             </div> 
            
           
            
        </header>
    );
};

export default Header;