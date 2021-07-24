import { useContext ,useState, useEffect} from 'react';
import {UserContext} from '../contexts/User';
import {Link} from 'react-router-dom';
import { getUserByUsername } from '../utils/api';

 
  

const Header = () => {
    const {user} = useContext(UserContext);
    const [userLogin,setUserLogin]=useState("");

    

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
           
            <div></div>
             <div className="Home_link">
             <h2>{userLogin.username? `Hello ${userLogin.username}`: `Hi there!`}</h2>
             </div>
             
            
           
            
        </header>
    );
};

export default Header;