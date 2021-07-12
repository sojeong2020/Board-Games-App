import {useState,useEffect} from 'react';
import { getReviews } from '../utils/api';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    const fetchData = async() =>{
        const reviewsFromApi = await getReviews()
        console.log(reviewsFromApi)
        setReviews(reviewsFromApi)
    } 

    useEffect(()=>{
       fetchData()

    },[])


    return (
        <div>
            <h1>All Reviews</h1>
            <ul>
                {
                    reviews.map((review)=>{
                        return (
                            <li key={review.review_id}>
                                <h2>{review.title}</h2>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Reviews;