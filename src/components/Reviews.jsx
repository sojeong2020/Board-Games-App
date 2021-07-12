import {useState,useEffect} from 'react';
import { getReviews } from '../utils/api';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    

    useEffect(()=>{
       getReviews().then((reviewsFromApi)=>{
           console.log(reviewsFromApi)
           setReviews(reviewsFromApi)
       })

    },[])


    return (
        <main>
         <div className="Reviews_list">
            <h1>All Reviews</h1>
            <ul>
                {
                    reviews.map((review)=>{
                        return (
                            
                            <li key={review.review_id}>
                                <h2>{review.title}</h2>
                                <img className="Reviews_img" src={review.review_img_url} alt={review.title}></img>
                            </li>
                            
                            
                        )
                    })
                }
            </ul>
         </div>
        </main>
       
    );
};

export default Reviews;