import {useState, useEffect, useContext} from 'react';
import { UserContext } from '../contexts/User';
import { useParams } from 'react-router-dom';
import {createComment} from '../utils/api';

const CreateComment = () => {

 const[body, setBody]=useState("");
 const {user} = useContext(UserContext);
 const {review_id} =useParams();



 useEffect(()=>{
     createComment(review_id).then(()=>{
     console.log("new comment added")
     })
 },[review_id])


    return (
        <div>
            <h2>Add comments</h2>
            <form>
                <div>
                    <h2>Author : {user.username}</h2>
                </div>

                <div>
                <label>comment body :</label>
                <textarea
                required
                value={body}
                onChange={(e)=> setBody(e.target.value)}
                ></textarea>
                </div>
        
            </form>
        </div>
    );
};

export default CreateComment;