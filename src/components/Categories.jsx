import {useState,useEffect} from 'react';
import { getCategories, getReviews} from '../utils/api';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';



const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [reviewsByCategory, setReviewsByCategory]=useState([]);
    const {category} =useParams();
    console.log(category,"category")
   
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
     <main>
        <section className="Category_list">
            <div className="Container">
            <ul>
            { categories.map((category)=>{
                     return(
                         <li key={category.slug}>
                        <Link className='Text-link' to={`/reviews/category/${category.slug}`}>
                         <h2>{category.slug}</h2> 
                        </Link>
                         </li>
                       
                           
                    );
                 })
            } 
            </ul>
            </div>
           
        </section>

        <section className="Reviews_category">      
            <h1> {category? `Reviews by ${category}`: null}</h1>
            <div className="Container">
            <ul>
            {reviewsByCategory.map((review)=>{
                return (
                    <li key={review.title}>
                        <h3>{review.title}</h3>
                        <Link className='Text-link' to={`/reviews/${review.review_id}`}>
                        <img className="ReviewByCategory_img" src={review.review_img_url} alt={review.title}></img>
                        </Link>
                        <p className="Reviews_body">{review.review_body}</p>
                        <Link className='Text-link' to={`/reviews/${review.review_id}`}>
                            <p>Read more</p>
                        </Link>
                    </li>
                )
            })} 
            </ul>
            </div>
           
            
        </section>
        </main>
    );
};


export default Categories;