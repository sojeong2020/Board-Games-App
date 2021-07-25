import {useState, useContext} from 'react';
import { UserContext } from '../contexts/User';
import { createComment } from '../utils/api'
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import  {Container, Form, Button}  from 'react-bootstrap';



const CreateComment = () => {
 const [body, setBody]=useState("");
 const [messageComment,setMessageComment]=useState(null);

 const {user}=useContext(UserContext);
 const {review_id} =useParams();

 const handleSubmit=(e) =>{
     e.preventDefault()

    const newComment = {
        username: user.username,
        body: body,
    }
    if(user.username !=='who'){
        createComment(review_id,newComment);

        setMessageComment("successfully posted!")
   

    }else{
        setMessageComment("You need to log in first!")

    }
     
        
}

return (
    <div className="Create_comment">
    <Container>
    <Form onSubmit={handleSubmit}>
        <Form.Group>
        {user.username !== 'who' ? <p>author {user.username}</p>: null }
        <Form.Label> comment </Form.Label>
        <Form.Control as="textarea" rows={5} required
                value={body}
                onChange={(e)=> setBody(e.target.value)}/>
         
        <Form.Text> {messageComment} </Form.Text>

        </Form.Group>
        <div className="Create_add">
        <Button  type="submit" className="Button_add">add</Button>
        </div>
        <Form.Group>
        <Link to ={`/reviews/${review_id}/comments`}>
        <Form.Text>  back to comments </Form.Text>
            </Link>
        </Form.Group>
       


     </Form>

     </Container>
     </div>

    );
};

export default CreateComment;