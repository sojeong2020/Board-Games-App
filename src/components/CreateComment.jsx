import {useState, useContext} from 'react';
import { UserContext } from '../contexts/User';
import { createComment } from '../utils/api'
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';

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
     createComment(review_id,newComment);
     setMessageComment("successfully posted!")
        
}

return (
    
    <form onSubmit={handleSubmit}>
        <p>author {user.username}</p>
        <br />
        <label> comment: </label>
          <textarea
                required
                value={body}
                onChange={(e)=> setBody(e.target.value)}
            ></textarea>
        <br />
        <button>add</button>
        <br />
        <p>{messageComment}</p>
        <Link to ={`/reviews/${review_id}/comments`}>back to comments</Link>

     </form>

    );
};

export default CreateComment;