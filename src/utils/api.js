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

export const getReviews = (category) => {
    let path ='/reviews';
    if(category) path += `?category=${category}`;

    return gamesApi
    .get(path)
    .then((response)=>{
        if(response.data.msg){
            return [];
        }
        return response.data.reviews;
    })
};
export const getSingleReview= (review_id)=>{
    return gamesApi
    .get(`/reviews/${review_id}`)
    .then((response)=>{
        console.log(response.data)
        return response.data.review
    })
}

export const getCommentsByReview= (review_id)=>{
    return gamesApi
    .get(`/reviews/${review_id}/comments`)
    .then((response)=>{
        console.log(response.data.comments)
        return response.data.comments
    })
}






 



