import {useState,useContext} from 'react';
import { deleteComment } from '../utils/api';
import { UserContext } from '../contexts/User';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'


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

       alert ("deleted!!")

    } else {
        setMessageDelete("you can't delete this comment!")
 
    }
}
    
    return (
        <section>
       <button onClick={handleClick}><FontAwesomeIcon style = {{color: 'green'}} icon={faTrashAlt} /></button>

        <p>{messageDelete}</p>    
        </section>
    );
};

export default Delete;