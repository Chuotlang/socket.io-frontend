import React, { useEffect, useRef } from 'react'
import { patchData } from '../utls/FetchData';
import './FormComment.css';
const FormComment = ({id,socket,rating ,setReply,namee,send}) => {
    const name = useRef();
    const content = useRef("");

    useEffect(()=>{
        if(namee){
            content.current.value = `${namee}:`
        }
    },[namee]);

    const handleComment = () =>{
        const username = name.current.value;
        const usercontent = content.current.value;

        if(!username.trim()){
            return alert("Please enter your name.");
        }
        if(!usercontent.trim()){
            return alert("Please enter your content.");
        }

        const creatAt = new Date().toISOString();
        
        socket.emit("createComment",{
            username,content:usercontent,
            createdAt:creatAt,product_id:id,rating,send
        });
        if(rating && rating !==0){
            patchData(`/product/rate/${id}`,{rating})
                .then(res => console.log(res))
        }
        content.current.value = "";

    }
  return (
    <div className='commentForm'>
        <p>Name</p>
        <input ref={name} type="text"/>
        <p id='content'>Content</p>
        <textarea
         ref={content} 
         defaultValue={content.current.value}
         id='content_input' 
         />
        <div className='button_comment'>
            <button onClick={handleComment}>Send</button>
        </div>
    </div>
  )
}

export default FormComment