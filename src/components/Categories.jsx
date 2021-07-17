import {useState,useEffect} from 'react';
import { getCategories, getReviews} from '../utils/api';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';



const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [reviewsByCategory, setReviewsByCategory]=useState([]);
    const {category} =useParams();
   
    useEffect(()=>{
        getCategories().then((categoriesFromApi)=>{
            console.log(categoriesFromApi)
            setCategories(categoriesFromApi)
        })
    },[])

    useEffect(()=>{
        getReviews(category).then((reviewsFromApi)=>{
            console.log(reviewsFromApi)
            setReviewsByCategory(reviewsFromApi)
        })
    },[category])
   
 return (
        <section>
            <ul>
            { categories.map((category)=>{
                     return(
                         <li key={category.slug}>
                        <Link to={`/reviews/category/${category.slug}`}>
                         <p>{category.slug}</p> 
                        </Link>
                         </li>
                       
                           
                    );
                 })
            } 
            </ul>
              
            <h2>Reviews by {category}</h2>
            <ul>
            {reviewsByCategory.map((review)=>{
                return (
                    <li key={review.title}>
                        <p>{review.title}</p>
                        <Link to={`/reviews/${review.review_id}`}>
                        <img className="Reviews_img" src={review.review_img_url} alt={review.title}></img>
                        </Link>
                        <p>{review.review_body}</p>
                    </li>
                )
            })} 
            </ul>
            
        </section>
    );
};


export default Categories;