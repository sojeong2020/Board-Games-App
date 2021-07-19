import {useState,useEffect} from 'react';
import { getReviews } from '../utils/api';
import {Link} from 'react-router-dom'
import SortBy from './SortBy';




const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading]=useState(true);
    const [hasError,setHasError]=useState(false);


   useEffect(()=>{
       getReviews().then((reviewsFromApi)=>{
         console.log(reviewsFromApi)
        setReviews(reviewsFromApi) 
        setIsLoading(false);
       })
       .catch((err)=>{
           setHasError(true);
           setIsLoading(false);
       })  
       
    },[]) 

    
   if(isLoading) return <p>Loading...</p>
    
   if(hasError) return <p>Something went wrong :( </p>
    return (
        <main>
           
           
         

             <SortBy setReviews={setReviews}/>
             <h1>All Reviews</h1>

             <div className="Reviews_list">
            <ul>
                {
                    

                    reviews.map((review)=>{
                        return (

                        <li key={review.review_id}>

                             <h2>{review.title}</h2>
                                <Link to={`/reviews/${review.review_id}`}>
                                <img className="Reviews_img" src={review.review_img_url} alt={review.title}></img>
                                </Link>
                                
                                <p className="Reviews_body">{review.review_body}</p>
                                <Link  to={`/reviews/${review.review_id}`}>
                                <p>Read more</p>
                                </Link>
                       
                       
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