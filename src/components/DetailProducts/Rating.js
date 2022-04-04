import React from 'react'

let rating = 0;
const Rating = ({product}) => {

    if(product.reviewer){
      rating = 100 - (product?.rating / product?.reviewer * 20);
    }
    else{
      rating = 100 - (product?.rating * 20);
    }


    const style_star ={
        clipPath:product?.rating === 0 ? `inset(0 100% 0 0)`: `inset(0 ${rating}% 0 0)`
    }

  return (
    <div className='rating'>
        <div className='star'>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>

            <div className='star-1' style={style_star}>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            </div>
        </div>
    </div>
  )
}

export default Rating