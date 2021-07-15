import {useState,useContext} from 'react';
import { deleteComment } from '../utils/api';
import { UserContext } from '../contexts/User';


const Delete = ({commentId, commentAuthor, setComments, comments}) => {
    console.log(commentId)
    console.log(comments)
    const [messageDelete,setMessageDelete]=useState("");
    const {user} = useContext(UserContext);
    console.log(user)

    const handleClick =(e)=>{
        e.preventDefault();

        const restComments= [...comments].filter((comment)=>{
            return comment.comment_id !== commentId
        })

    if(user.username === commentAuthor){
       setComments(restComments)

       deleteComment(commentId);

       setMessageDelete("comment deleted!!")

    } else {
        setMessageDelete("you need to log in!")
 
    }
}
    
    return (
        <div>

       <button onClick={handleClick}>delete</button>
        <p>{messageDelete}</p>    
        </div>
    );
};

export default Delete;