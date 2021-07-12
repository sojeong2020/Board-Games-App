import axios from 'axios';

const reviewsApi = axios.create({
    baseURL: 'https://first-nc-games.herokuapp.com/api',
});

export const getReviews = async () => {
    const {data} = await reviewsApi.get('/reviews');
    console.log(data)
    return data.reviews
    
};