import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../utils/api';
import {Link} from 'react-router-dom'
import SortBy from './SortBy';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading]=useState(true);
    const [hasError,setHasError]=useState(false);

    const {category} = useParams();

   useEffect(()=>{
       getReviews(category).then((reviewsFromApi)=>{
         console.log(reviewsFromApi)
        setReviews(reviewsFromApi) 
        setIsLoading(false);
       })
       .catch((err)=>{
           setHasError(true);
           setIsLoading(false);
       })  
       
    },[category]) 

    
   if(isLoading) return <p>Loading...</p>
   if(hasError) return <p>Something went wrong :( </p>
    return (
        <main>
           
         <div className="Reviews_list">

             <SortBy setReviews={setReviews}/>

             <h1>{category ? `${category} reviews`:`All reviews`}</h1> 

            <ul>
                {
                    reviews.map((review)=>{
                        return (
                            
                            <li key={review.review_id}>
                                <h2>{review.title}</h2>
                                <Link to={`/reviews/${review.review_id}`}>
                                <img className="Reviews_img" src={review.review_img_url} alt={review.title}></img>
                                </Link>
                                <p>{review.review_body}</p>
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