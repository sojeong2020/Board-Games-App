import {useState, useEffect, useContext} from 'react';
import { UserContext } from '../contexts/User';
import { getUsers} from '../utils/api';
import  {Button, Form, Container, Row, Col}  from 'react-bootstrap';
 
const Users = () => {
    const [users, setUsers] = useState([]);
    const [loginMessage,setLoginMessage]=useState("")
 
    const {setUser} = useContext(UserContext);

    useEffect(()=>{
        getUsers().then((usersFromApi)=>{
                   setUsers(usersFromApi)

        })

    },[])

    const handleSubmit=(e)=>{
        e.preventDefault()
        setLoginMessage("You have successfully logged in to Board Games Reviews!")
    }

    return (
        <section className="Users">
       <Container>
           
               
        <h1>Select username!</h1>
        <h3 className="Login_msg">{loginMessage}</h3>
        
         <ul className="User_list">
             {
                users.map((user,idx)=>{
                    
                     return(
                         
                         <li key={idx}>
                             <Row className="Username">
                             <Col>
                             <h2>{user.username}</h2>
                             <Form onSubmit={handleSubmit} >
                             <Button className="Custom_btn_user" type="submit" onClick={()=>{setUser(user)}}>select</Button>
                             
                             </Form>
                             </Col>
                             </Row>

                         </li>
                         
                     )
                 }) 
             }

         </ul>
        
         
         </Container>
        </section>
    );
};

export default Users;