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
            <form  value="submit" onSubmit={handleSubmit}>
                 <select onChange={handleChange}>
                     <option value="filter">filter</option>
                    <option value="owner">owner</option>
                    <option value="title">title</option>
                    <option value="created_at">created_at</option>
                    <option value="votes">votes</option>
                 </select>  
            </form>

        </div>
    );
};

export default SortBy;

