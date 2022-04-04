import React, { useState } from 'react'
import FormComment from '../comments/FormComment';
import CommentCard from './CommentCard'

const ComentDetail = ({comment,socket}) => {
  const [reply,setReply] = useState(false);
  const [name,setName] = useState('');

  const handleReply = (e) =>{
    setReply(true);
    setName(e);
  }

  const handlehiddenReply = () => {
    setReply(false);
  }
  return (
    <>
        <CommentCard comment={comment}>
            <div className='have_more'>
                <p onClick={() => handleReply(comment.username)}>Reply</p>
                <p>Load more</p>
                <p onClick={handlehiddenReply}>Hidden Reply</p>
            </div>
            {reply && <FormComment 
              socket={socket}
              id={comment._id}
              namee={name}
              setReply={setReply}
              send="replyComment"
            />}
        </CommentCard>
    </>
  )
}

export default ComentDetail