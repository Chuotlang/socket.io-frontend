import React, { useContext, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import { DataContext } from '../../GloblaState';
import FormComment from '../comments/FormComment';
import ComentDetail from '../utls/ComentDetail';
import { getData } from '../utls/FetchData';
import Detail from './Detail';
import './DetailProduct.css';
const DetailProduct = () => {
  const {id} = useParams();
  const [DetailProducts,setDetailProduct] = useState();

  const state = useContext(DataContext);

  const [products] = state.products;
  const socket = state.socket;
  const [comments,setComments] = useState([]);
  const [loading,setLoading] = useState(false);
  const [page,setPage] = useState(1);

  const pageEnd = useRef();

  const [rating,setRating] = useState(0);

  useEffect(()=>{
    const newArray = products?.products?.filter(item => item._id === id);
    setDetailProduct(newArray);
  },[id,products]); 
  
  

  useEffect(()=>{
    if(socket){
      socket.emit("joinRoom",id);
    }
  },[socket]);


  useEffect(()=>{
    if(socket){
      socket.on("sendCommentToClient", data => {
        setComments([data,...comments]);
      })
      return () => {
        socket.off("sendCommentToClient");
      };
    }
  },[socket,comments]);

  useEffect(()=>{
    setLoading(true);
    getData(`/comments/${id}?limit=${page * 3}`)
      .then(res => {
        setComments(res.data.comments);
        setLoading(false);
      }
      )
      .catch(err =>{
        setLoading(false);
      })
  },[id,page]);


  useEffect(()=>{
    const observer = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting){
        setPage(prev => prev + 1);
      }
    },{
      threshold:0.1
    })
    observer.observe(pageEnd.current);
  },[])
  return (
    <div className='product_Container'>
      {DetailProducts?.map(item => (
        <Detail key={item + "D"}  product={item} />
      ))}
      <div className='comments'>
          <div className='row'>
            <div className='col c-12 m-12 l-12'>
              <div className='rating_product'>
                  <label htmlFor='r_1'><i class="fa-solid fa-star"></i></label>
                  <input id="r_1" type="radio" name='rate' onChange={() => setRating(5)}/>
                  <label htmlFor='r_2'><i class="fa-solid fa-star"></i></label>
                  <input id="r_2" type="radio" name='rate' onChange={() => setRating(4)}/>
                  <label htmlFor='r_3'><i class="fa-solid fa-star"></i></label>
                  <input id="r_3" type="radio" name='rate' onChange={() => setRating(3)}/>
                  <label htmlFor='r_4'><i class="fa-solid fa-star"></i></label>
                  <input id="r_4" type="radio" name='rate' onChange={() => setRating(2)}/>
                  <label htmlFor='r_5'><i class="fa-solid fa-star"></i></label>
                  <input id="r_5" type="radio" name='rate' onChange={() => setRating(1)}/>
              </div>
            </div>
          </div>
      </div>
      <FormComment id={id} socket={socket} rating={rating}/>
      <div className='comment_list'>
        {comments.map (item => (
          <ComentDetail key={item._id} comment={item} socket={socket}/>
        ))}
      </div>
      {loading && <div className="loader"></div>}
      <button style={{opacity:"0"}} ref={pageEnd}>Load More</button>
    </div>
  )
}

export default DetailProduct