/* import {useState, useEffect} from 'react';
import { getCategories } from '../utils/api'; */
import {Link} from 'react-router-dom';

const Nav = () => {
   /*  const [categories, setCategories] = useState([]) */;

    /* useEffect(()=>{
        getCategories().then((categoriesFromApi)=>{
            console.log(categoriesFromApi)
            setCategories(categoriesFromApi)
        })
    },[])
 */

    return (
       <nav className="Nav">
           {/*  { categories.map((category)=>{
                     return(
                        <Link to={`/reviews/category/${category.slug}`} key={category.slug}>
                           <h2>{category.slug}</h2> 
                        </Link>  
                    );
                 })
            } */}
            <Link to = "/categories">
            <h2>Category</h2>

            </Link>
        </nav>   
    );
};

export default Nav;