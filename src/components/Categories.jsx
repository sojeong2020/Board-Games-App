import {useState,useEffect} from 'react';
import { getCategories, getReviews} from '../utils/api';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import  {Button, Container, Card, Row, Col}  from 'react-bootstrap';




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
         <Container>
        <section className="Category_list">
        
            <ul>
            { categories.map((category)=>{
                     return(
                         <li key={category.slug}>
                        <Link className='Text-link' to={`/reviews/category/${category.slug}`}>
                        <Button className="Category_slug" variant="outline-success" size="lg">{category.slug}</Button>  
                        </Link>
                         </li>
                       );
                 })
            } 
            </ul>
        
        </section>

        <section className="Reviews_category"> 

            <h1> {category? `Reviews by ${category}`: null}</h1>
            <h2>{category === "children's games" ? "---There is no reviews---": null }</h2>
            <ul>
            {reviewsByCategory.map((review)=>{
                return (
                    <li key={review.title}>
                         <Card>
                             <Row>
                                 <Col md>
                        <Link className='Text-link' to={`/reviews/${review.review_id}`}>
                            <Card.Img src={review.review_img_url}/>
                        </Link>
                         <Card.Body>
                             <Card.Title>{review.title}</Card.Title>
                             <Card.Text>{review.review_body}</Card.Text>
                             <Link className='Text-link' to={`/reviews/${review.review_id}`}>

                             <Button>Read More</Button>
                             </Link>
                         </Card.Body>
                         </Col>
                         </Row>
                        </Card>
                    </li>
                )
            })} 
            </ul>
            
           
            
        </section>
        </Container>
        </main>
    );
};


export default Categories;