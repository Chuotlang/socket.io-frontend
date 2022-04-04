import React from 'react'
import Rating from '../DetailProducts/Rating'
import moment from 'moment';

const CommentCard = ({comment,children}) => {
  return (
    <div className='comment_card'>
        <div className='head_card'>
            <h3>{comment.username}</h3>
            <div className='rate'>
                {comment.rating !==0 && <Rating product={comment} />}
            </div>
        </div>
        <div className='detail_card'>
            <span>{moment(comment.createdAt).fromNow()}</span>
            <span>{new Date(comment.createdAt).toLocaleString()}</span>
        </div>
        <div className='content_card'>
            <p dangerouslySetInnerHTML={{__html:comment.content}}></p>
        </div>

        {children}
    </div>
  )
}

export default CommentCard