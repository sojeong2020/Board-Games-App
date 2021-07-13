import axios from 'axios';

const gamesApi = axios.create({
    baseURL: 'https://first-nc-games.herokuapp.com/api',
});

export const getCategories = () => {
    return gamesApi
    .get('/categories')
    .then((response)=>{
        return response.data.categories;
    });
};

export const getReviews = () => {
    return gamesApi
    .get('/reviews')
    .then((response)=>{
        return response.data.reviews;
    })
};



/* export const getReviewsByCategory = () =>{
    return gamesApi
    .get(`/reviews?category=${category}`)
    .then((response)=>{
        console.log(response.data)
        return response.data
    })
} */
