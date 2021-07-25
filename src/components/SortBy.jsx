import {useEffect, useState} from 'react';
import { getReviewsBySortBy } from '../utils/api';
import  { Form }  from 'react-bootstrap';




const SortBy = ({setReviews}) => {
    const [sortedBy,setSortedBy] = useState([]);

    console.log(sortedBy)

    const handleChange=(event)=>{
        setSortedBy({value:event.target.value})
    }

    const handleSubmit=(event)=>{
         event.preventDefault();

    }

     useEffect(()=>{
        getReviewsBySortBy(sortedBy).then((sortedReviewsFromApi)=>{
            setReviews(sortedReviewsFromApi)

           console.log(sortedReviewsFromApi);

        })
    },[sortedBy]) 


    return (
        <div className="Sort">
            
               <Form value="submit" onSubmit={handleSubmit}>
               <Form.Label><p><strong>Filter </strong></p></Form.Label>
                 <select onChange={handleChange}>
                    <option value="owner">owner</option>
                    <option value="title">title</option>
                    <option value="created_at">created_at</option>
                    <option value="votes">votes</option>
                 </select>  
            </Form>    

          

            


        </div>
        
    );
};

export default SortBy;

