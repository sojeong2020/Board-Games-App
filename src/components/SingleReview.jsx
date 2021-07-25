import {useState, useEffect,useContext} from 'react';
import {UserContext} from '../contexts/User';

import { getSingleReview } from '../utils/api';
import { patchReview } from '../utils/api'; 
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import  {Button, Container, Card}  from 'react-bootstrap';




const SingleReview = () => {
    const [review, setReview] = useState({});
    const [vote,setVote]=useState(0) 
    const [messageVote, setMessageVote]=useState("");

    const {user}=useContext(UserContext);

    const {review_id} =useParams();



    useEffect(()=>{
        getSingleReview(review_id).then((reviewFromApi)=>{
        setReview(reviewFromApi)
        })
    },[review_id])

  
    const incVotes=(voting)=>{
        if(user.username !== "who"){
            setVote((currVote)=>{
                return currVote + voting
            })
    
            const patchVotes={inc_votes: voting}
    
            patchReview (review_id,patchVotes);

            setMessageVote("thanks!")
        }else{
            setMessageVote("you need to log in!")
        }
    }

    return (
        <section className="Review">
            <Container>
            <Card>
                <Card.Img variant="top" src={review.review_img_url}/>
                <Card.Body>
                    <Card.Title>{review.title}</Card.Title>
                    <Card.Text>{review.review_body}</Card.Text>
                
                <Card.Text>Designer : {review.designer}</Card.Text>
                <Card.Text>Review by {review.owner}</Card.Text>
                <Card.Text>{review.votes +vote}</Card.Text>
                <Card.Text style={{ color: "red" }}>{messageVote}</Card.Text>

                <Button className="Custom-btn-review" type="submit" disabled={vote > 0} onClick={()=>{incVotes(1)}}><FontAwesomeIcon style = {{color: 'red'}} icon={faThumbsUp} /></Button>
                </Card.Body>
                
                <Card.Body> 
                <Link to={`/reviews/${review.review_id}/comments`}>
                <Card.Text>See comments</Card.Text>
                </Link>
                <Link to={`/reviews/${review.review_id}/comments/add`}>
                <Card.Text>Add comment</Card.Text>
               </Link> 
                </Card.Body>
            </Card>
            </Container> 
        </section>
    );
};

export default SingleReview;