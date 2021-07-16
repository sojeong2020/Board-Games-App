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

export const getReviewsBySortBy =(owner,title,created_at,votes) =>{
    let path='/reviews';

    if(owner) {
        path += `?sort_by=${owner}`;
    } else if(title){
        path += `?sort_by=${title}`;

    }else if(created_at){
        path += `?sort_by=${created_at}`;

    }else if(votes){
        path += `?sort_by=${votes}`;

    }
    return gamesApi
    .get(path)
    .then((response)=>{
       console.log(response.data.reviews)
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

export const getUsers = () =>{
    return gamesApi
    .get('/users')
    .then((response)=>{
        console.log(response.data.users)
        return response.data.users
    })
}   

export const getUserByUsername =(username)=>{
    return gamesApi
    .get(`/users/${username}`)
    .then((response)=>{
        console.log(response.data.user)
        return response.data.user
    })
}

export const createComment = (review_id,newComment)=>{
    return gamesApi
    .post(`/reviews/${review_id}/comments`,newComment)
    .then((response)=>{
        console.log("posting new comment")
        console.log(response.data.comments)
        return response.data.comments;
    }).catch((err)=>{
        console.log(err.response.data)
    })
}

export const patchReview = (review_id,patchVotes)=>{
    return gamesApi
    .patch(`/reviews/${review_id}`,patchVotes)
    .then((response)=>{
        console.log("patching review")
        console.log(response.data)
        return response.data
    })

}

export const deleteComment = (comment_id)=>{
    return gamesApi
    .delete(`/comments/${comment_id}`)
    .then((response)=>{
        console.log("delete the comment")
        console.log(response.data)
        return response.data
    })
} 





 



