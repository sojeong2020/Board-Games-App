import {useState, useEffect} from 'react';
import { getCommentsByReview} from '../utils/api';
import { useParams } from 'react-router-dom';

import Delete from './Delete';
import SingleComment from './SingleComment';
import {Link} from 'react-router-dom';
import  { Card}  from 'react-bootstrap';




const Comments = () => {
    const [comments,setComments] = useState([])
    const {review_id} =useParams();
    
    useEffect(()=>{
        getCommentsByReview(review_id).then((commentsFromAPi)=>{
            console.log(commentsFromAPi)
            setComments(commentsFromAPi)
        })
    },[review_id]) 



    return (
        <main>
           
            <h2>{comments.length === 0? "no comments": "comments"}</h2>
            
            <ul className="Comments_list">
                {comments.map((comment,idx)=>{
                    return (
                        <li key={idx}>
                    {/*   <Card>
                      <Card.Header>{comments.length === 0? "no comments": "comments"}</Card.Header>
                      <Card.Body>
                      <Card.Text>Author : {comment.author}</Card.Text>
                      <Card.Text>{comment.created_at}</Card.Text>
                      <Card.Text>comment: {comment.body}</Card.Text>
                      <SingleComment singleComment={comment}
                                       comment_id={comment.comment_id}/>
                      <Delete  commentId={comment.comment_id}
                                     commentAuthor={comment.author}
                                     setComments={setComments}
                                     comments={comments}
                        />                

                      </Card.Body>
                      </Card> */}

                            <p>Author : {comment.author}</p>
                            <p>{comment.created_at}</p>
                            <p>comment: {comment.body}</p>
                        <SingleComment singleComment={comment}
                                       comment_id={comment.comment_id}/>

                        <Delete  commentId={comment.comment_id}
                                     commentAuthor={comment.author}
                                     setComments={setComments}
                                     comments={comments}
                        /> 
                        </li>
                    )
                    
                })}
            </ul>
            <Link to={`/reviews/${review_id}`}>
            <p>previous page</p>

            </Link>
            
        </main>
    );
};

export default Comments;