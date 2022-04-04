import React, { useContext } from 'react'
import { DataContext } from '../../GloblaState';
import './Product.css';
import ProductCard from './ProductCard';
const Products = () => {

    const state = useContext(DataContext);
    const [products] = state.products;
  return (
    <div className='row'>
      {products?.products?.map(product => (
        <ProductCard key={product._id} product={product}/>
      ))}
    </div>
  )
}

export default Products