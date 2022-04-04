import React from 'react'
import { Link } from 'react-router-dom'
const ProductCard = ({product}) => {
  return (
    <div className='col c-12 m-4 l-3'>
        <div className='card'>
            <div className='img_container'>
                <img src={product.image}  alt={product.title}/>
            </div>
            <div className='title_Container'>
                <div className='name_product'>
                    <h2>{product.title}</h2>
                </div>
                <div className='price_product'>
                    <span>$ {product.price}</span>
                </div>
                <div className='description_product'>
                    <span>Sư tử, là một trong những đại miêu trong họ Mèo và là một loài của chi Báo. Được xếp mức sắp nguy cấp trong thang sách Đỏ IUCN từ năm 1996, các quần thể loài này ở châu Phi đã bị sụt giảm khoảng 43% từ những năm đầu thập niên 1990. </span>
                </div>
                <div className='button_product'>
                    <Link className='Link' to={`/product/${product._id}`}>
                        <button style={{backgroundColor:"teal"}}>View</button>
                    </Link>
                    <button style={{backgroundColor:"#333"}}>Buy</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard