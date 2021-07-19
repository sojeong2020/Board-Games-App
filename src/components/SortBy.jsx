import {useEffect, useState} from 'react';
import { getReviewsBySortBy } from '../utils/api';
import Dropdown from 'react-bootstrap/Dropdown';



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
                    <option value="owner">owner</option>
                    <option value="title">title</option>
                    <option value="created_at">created_at</option>
                    <option value="votes">votes</option>
                 </select>  
            </form> 

            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
             Filter
            </Dropdown.Toggle>

            <form  value="submit" onSubmit={handleSubmit}>
            <Dropdown.Menu onChange={handleChange}>
            <Dropdown.Item value="owner">owner</Dropdown.Item>
            <Dropdown.Item value="title">title</Dropdown.Item>
            <Dropdown.Item value="created_at">created_at</Dropdown.Item>
            <Dropdown.Item value="votes">votes</Dropdown.Item>

            </Dropdown.Menu>
            </form>
            </Dropdown>

        </div>
        
    );
};

export default SortBy;

