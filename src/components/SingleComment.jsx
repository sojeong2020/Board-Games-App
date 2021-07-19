import {useState} from 'react';
import { patchComment } from '../utils/api';

const SingleComment = ({singleComment,comment_id}) => {
    const [vote,setVote] = useState(0)


    const incVotes = ()=>{
        setVote((currVote)=>{
            return currVote +1
        })
        
        const newVote = {inc_votes: vote}
    
        patchComment(comment_id,newVote)
        
    }   


    return (
        <div>
        <p>Vote :{singleComment.votes + vote}</p>
        <button onClick={incVotes}>I like it</button>
        
        </div>
    );
};

export default SingleComment;