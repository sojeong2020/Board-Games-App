import {useState, useContext} from 'react';
import { UserContext } from '../contexts/User';
import { createComment } from '../utils/api'
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';

const CreateComment = () => {
 const [body, setBody]=useState("");
 const [messageComment,setMessageComment]=useState(null);
/*  const [votes,setVotes] =useState("");
 */
 const {user}=useContext(UserContext);
 const {review_id} =useParams();

 const handleSubmit=(e) =>{
     e.preventDefault()

    const newComment = {
        username: user.username,
        body: body
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
       
        {/* <label>
            vote:
            <input 
            type="text"
            pattern="[0-9]*"
            value={votes}
            onInput={(e)=> console.log(e.target.value)}
            ></input>
        </label> */}
        <br />
        <button>add</button>
        <br />
        <p>{messageComment}</p>
        <Link to ={`/reviews/${review_id}/comments`}>back to comments</Link>

     </form>

    );
};

export default CreateComment;