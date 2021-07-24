import {useState,useContext} from 'react';
import { patchComment } from '../utils/api';
import {UserContext} from '../contexts/User';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import  Button  from 'react-bootstrap/Button';



const SingleComment = ({singleComment,comment_id}) => {
    const [vote,setVote] = useState(0)
    const [messageCommentVote,setCommentVote]=useState("")

    const {user} =useContext(UserContext);
   console.log(user.username)

    const incVotes = ()=>{
        if(user.username !== "who"){
            setVote((currVote)=>{
                return currVote +1
            })
            const newVote = {inc_votes: 0}
    
            patchComment(comment_id,newVote)
            setCommentVote(`thanks! ${user.username}`)
        }else {
            setCommentVote("You need to log in first!")

        }
            
        
    }   


    return (
        <div>
        <p>Vote :{singleComment.votes + vote}</p>
        <Button  className="Custom-btn-comment" disabled={vote > 0} onClick={incVotes}><FontAwesomeIcon style = {{color: 'red'}} icon={faThumbsUp} /></Button>
        <p style={{color: "red"}}>{messageCommentVote}</p>
        </div>
    );
}; 

export default SingleComment;