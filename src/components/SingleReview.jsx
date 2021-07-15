import {useState, useEffect} from 'react';
import { getSingleReview } from '../utils/api';
import { patchReview } from '../utils/api';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';


const SingleReview = () => {
    const [review, setReview] = useState({});
    const [vote,setVote]=useState("")
    const {review_id} =useParams();


    useEffect(()=>{
        getSingleReview(review_id).then((reviewFromApi)=>{
            console.log(reviewFromApi)
            setReview(reviewFromApi)
        })
    },[review_id])

    const incVotes=()=>{
        setVote((currVote)=>{
            return currVote + 1
        })
        const patchVotes={inc_votes: vote}
        patchReview (review_id,patchVotes);
    }

    return (
        <main className="Review">
            <div>
            <p>{review.title}</p>
            <img className="SingleReview_img" src={review.review_img_url} alt={review.title}></img>
            <p>Designer : {review.designer}</p>
            <p>Review by {review.owner}</p>
            <p>{review.review_body}</p>
            <p>votes : {review.votes}</p>
            <button onClick={()=>{incVotes}}>like</button>
            
            <Link to ={`/reviews/${review.review_id}/comments`}>
                        See comments
            </Link>
            </div>

            <div>
            <Link to ={`/reviews/${review.review_id}/comments/add`}>
                 Add comment
            </Link>
            </div>
            
        </main>
    );
};

export default SingleReview;