import React from 'react';
import { deleteComment } from '../utils/api';

const Delete = () => {

    deleteComment(comment_id);
    
    return (
        <div>
            
        </div>
    );
};

export default Delete;