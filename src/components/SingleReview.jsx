import {useState, useEffect,useContext} from 'react';
import {UserContext} from '../contexts/User';

import { getSingleReview } from '../utils/api';
import { patchReview } from '../utils/api'; 
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp} from '@fortawesome/free-solid-svg-icons'



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

  
    const incVotes=()=>{
        if(user.username !== "who"){
            setVote((currVote)=>{
                return currVote + 1
            })
    
            const patchVotes={inc_votes: 1}
    
            patchReview (review_id,patchVotes);

            setMessageVote("thanks!")
        }else{
            setMessageVote("you need to log in!")
        }
    }

    return (
        <main className="Review">
            <div>

            <h2>{review.title}</h2>
            <img className="SingleReview_img" src={review.review_img_url} alt={review.title}></img>
            <p>Designer : {review.designer}</p>
            <p>Review by {review.owner}</p>
            <p className="Reviews_body">{review.review_body}</p>

            <p>votes : {review.votes +vote}</p>
            <p>{messageVote}</p>

            <button disabled={vote > 1} onClick={incVotes}><FontAwesomeIcon style = {{color: 'red'}}  icon={faThumbsUp} /></button> 
            {vote > 1 ? <p>You have already voted!</p>: null}
 
            <Link to ={`/reviews/${review.review_id}/comments`}>
                       <p>See comments</p> 
            </Link>
            </div>

            <div>
            <Link to ={`/reviews/${review.review_id}/comments/add`}>
                 <p>Add comment</p>
            </Link>
            </div>
            
        </main>
    );
};

export default SingleReview;