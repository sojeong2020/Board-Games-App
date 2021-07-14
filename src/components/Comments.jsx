import {useState, useEffect} from 'react';
import { getCommentsByReview } from '../utils/api';
import { useParams } from 'react-router-dom';



const Comments = () => {
    const [comments,setComments] = useState([])
    const {review_id} =useParams();
console.log(review_id)

    useEffect(()=>{
        getCommentsByReview(review_id).then((commentsFromAPi)=>{
            console.log(commentsFromAPi)
            setComments(commentsFromAPi)
        })
    },[review_id]) 

    return (
        <div>
            <h2>comments</h2>
            <ul>
                {comments.map((comment,idx)=>{
                    return (
                        <li key={idx}>
                            <p>{comment.author}</p>
                            <p>{comment.created_at}</p>
                            <p>{comment.body}</p>
                            <p>{comment.votes}</p>

                        </li>
                    )
                })}
            </ul>
            
            
        </div>
    );
};

export default Comments;