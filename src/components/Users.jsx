import {useState, useEffect, useContext} from 'react';
import { UserContext } from '../contexts/User';
import { getUsers} from '../utils/api';

const Users = () => {
    const [users, setUsers] = useState([]);
    const {setUser} = useContext(UserContext);

    useEffect(()=>{
        getUsers().then((usersFromApi)=>{
            console.log(usersFromApi)
            setUsers(usersFromApi)
        })
    },[])
    return (
        <div>
        <h2>Users</h2>
         <ul>
             {
                 users.map((user,idx)=>{
                     return(
                         <li key={idx}>
                             <p>{user.username}</p>
                             <button onClick={()=>{
                                 setUser(user)
                             }}>log in</button>
                         </li>
                     )
                 })
             }
         </ul>
        </div>
    );
};

export default Users;