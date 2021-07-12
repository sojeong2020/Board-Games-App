import {useState, useEffect} from 'react';
import { getCategories } from '../utils/api';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        getCategories().then((categoriesFromApi)=>{
            console.log(categoriesFromApi)
            setCategories(categoriesFromApi)
        })
    },[])

    return (
        <main>
            <ul className="Categories">
                {
                 categories.map((category)=>{
                     return(
                         <div className="Categories_list">
                             <li key={category.decsriptoin}>
                             <h2>{category.slug}</h2>
                             <h2>{category.description}</h2>
                         </li>
                         </div>
                         
                     )
                 })
                }
            </ul>
            
        </main>
    );
};

export default Categories;