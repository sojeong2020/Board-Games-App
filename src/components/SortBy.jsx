import {useEffect, useState} from 'react';
import { getReviewsBySortBy } from '../utils/api';


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
        <div>
             <form onSubmit={handleSubmit}>
                 
                     
                 <select onChange={handleChange}>
                    <option value="owner">owner</option>
                    <option value="title">title</option>
                    <option value="created_at">created_at</option>
                    <option value="votes">votes</option>
                 </select>  
                 
                 <input type="submit" value="submit" />
             </form>

             <ul>
                 {
                     /*  sortedReviews.map((review,idx)=>{
                        
                         return(
                             <li key={idx}>
                                 <p></p>
                             </li>
                         )
                     }) */

                  }
             </ul>
                
                
            
            
        </div>
    );
};

export default SortBy;

