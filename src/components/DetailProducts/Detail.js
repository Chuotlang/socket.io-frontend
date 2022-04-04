import React from 'react'
import Rating from './Rating'

const Detail = ({product}) => {
  return (
    <div className='row'>
        <div className='col c-12 m-12 l-6'>
          <div className='image_container'>
            <img src={product?.image}/>
          </div>
        </div>
        <div className='col c-12 m-12 l-6'>
            <div className='detail_product_container'>
                <h1>{product?.title}</h1>
                <span>$ {product?.price}</span>
            </div>
            <div className='desciption_container'>
                <span>Sư tử, là một trong những đại miêu trong họ Mèo và là một loài của chi Báo. Được xếp mức sắp nguy cấp trong thang sách Đỏ IUCN từ năm 1996, các quần thể loài này ở châu Phi đã bị sụt giảm khoảng 43% từ những năm đầu thập niên 1990. </span>
            </div>
            <div className='button_container'>
                <button>Buy</button>
            </div>
            <div className='review_container'>
                <span>{product.reviewer} reviews</span>
            </div>
            <Rating product={product}/>
        </div>
      </div>
  )
}

export default Detail