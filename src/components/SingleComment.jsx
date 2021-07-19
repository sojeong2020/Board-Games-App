import {useState} from 'react';
import { patchComment } from '../utils/api';
import {useParams} from 'react-router-dom'

const SingleComment = ({singleComment}) => {
    const [vote,setVote] = useState(0)
    const {comment_id} = useParams();


    const incVotes = ()=>{
        setVote((currVote)=>{
            return currVote +1
        })
        const newVote = {inc_votes: 1}
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