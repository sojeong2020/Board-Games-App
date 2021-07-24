import {useState,useEffect} from 'react';
import { getReviews } from '../utils/api';
import {Link} from 'react-router-dom'
import SortBy from './SortBy';
import  {Button, Form, Container, Card, Row, Col}  from 'react-bootstrap';





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
           <Container>

           <SortBy setReviews={setReviews}/>
             <h1>All Reviews</h1>

             <div className="Reviews_list">
            <ul>
                {
                    reviews.map((review)=>{
                        return (

                        <li key={review.review_id}>
                            <Card>
                                <Row> 
                                    <Col md>
                                <Link to={`/reviews/${review.review_id}`}>
                                <Card.Img src={review.review_img_url} />
                                </Link>

                                <Card.Body>

                                    <Card.Title>
                                    {review.title} 
                                    </Card.Title>

                                    <Card.Text>
                                    {review.review_body}  
                                    </Card.Text>

                                    <Link  to={`/reviews/${review.review_id}`}>
                                    <Button variant="primary">Read More</Button>
                                    </Link>

                                </Card.Body>
                                </Col>
                                </Row>
                            </Card>
                        </li>
                        )
                    })
                }
            </ul>
         </div>
         </Container>
        </main>
       
    );
};

export default Reviews;