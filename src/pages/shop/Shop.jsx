import React from 'react'
import "./shop.css";
import {PRODUCTS} from "../../products"
import Product from './Product'
const Shop = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'>My Shop</div>
      <div className='products'>
        {PRODUCTS.map((product)=><Product data ={product} key={product.id} />)}
      </div>
    </div>
  )
}

export default Shop
