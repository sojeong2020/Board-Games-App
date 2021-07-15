import {useState,useContext} from 'react';
import { deleteComment } from '../utils/api';
import { UserContext } from '../contexts/User';


const Delete = ({commentId, commentAuthor, setComments, comments}) => {
    console.log(commentId)
    const [messageDelete,setMessageDelete]=useState("");
    const {user} = useContext(UserContext);
    console.log(user)

    const handleClick =(e)=>{
        e.preventDefault();
        const chanedComments=[...comments]
        console.log(chanedComments)

    if(user.username === commentAuthor){
       setComments(chanedComments)

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