import {useState, useEffect, useContext} from 'react';
import { UserContext } from '../contexts/User';
import { getUsers} from '../utils/api';
 
const Users = () => {
    const [users, setUsers] = useState([]);
    const [loginMessage,setLoginMessage]=useState("")

    const {setUser} = useContext(UserContext);

    useEffect(()=>{
        getUsers().then((usersFromApi)=>{
            console.log(usersFromApi)
            setUsers(usersFromApi)

        })

    },[])

    const handleSubmit=(e)=>{
        e.preventDefault()
        setLoginMessage("You havesuccessfully logged in to Board Games Reviews!")


    }


    return (
        <div>
        <h2>Users</h2>

         <ul>
             {
                 users.map((user,idx)=>{
                    
                     return(
                         
                         <li key={idx}>
                             <p>{user.username}</p>
                             <form onSubmit={handleSubmit}>
                             <button onClick={()=>{setUser(user)}}>log in</button>
                             </form>

                         </li>
                     )
                 })
             }
         </ul>
        </div>
    );
};

export default Users;