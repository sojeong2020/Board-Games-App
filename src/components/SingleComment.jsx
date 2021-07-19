import {useState} from 'react';
import { patchComment } from '../utils/api';

const SingleComment = () => {
    const [vote,setVote] = useState(0)


    const incVotes = ()=>{
        setVote((currVote)=>{
            return currVote +1
        })
        const newVote = {inc_votes: 1}
        patchComment(comment_id,newVote)
        
    }   


    return (
        <div>
            
        <button onClick={incVotes}>I like it</button>
        
        </div>
    );
};

export default SingleComment;