import {useState, useEffect} from 'react';
import { getSingleReview } from '../utils/api';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';


const SingleReview = () => {
    const [review, setReview] = useState({});
    const {review_id} =useParams();


    useEffect(()=>{
        getSingleReview(review_id).then((reviewFromApi)=>{
            console.log(reviewFromApi)
            setReview(reviewFromApi)
        })
    },[review_id])

    

    return (
        <div className="Review">
            <p>{review.title}</p>
            <img className="SingleReview_img" src={review.review_img_url} alt={review.title}></img>
            <p>Designer {review.designer}</p>
            <p>Review by {review.owner}</p>
            <p>Review {review.review_body}</p>
            
            <Link to ={`/reviews/${review.review_id}/comments`}>
                        see comments
            </Link>
        </div>
    );
};

export default SingleReview;