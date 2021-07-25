import {useState,useContext} from 'react';
import { deleteComment } from '../utils/api';
import { UserContext } from '../contexts/User';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import  Button  from 'react-bootstrap/Button';



const Delete = ({commentId, commentAuthor, setComments, comments}) => {
    const [messageDelete,setMessageDelete]=useState("");
    const {user} = useContext(UserContext);

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
       <Button className="Custom-btn-delete" onClick={handleClick}><FontAwesomeIcon style = {{color: 'black'}} icon={faTrashAlt} /></Button>

        <p style={{color: "red"}}>{messageDelete}</p>    
        </section>
    );
};

export default Delete;