import React from 'react'
import { useShopCart } from '../../useShopCart';
const Product = (props) => {
  const { cartItems, addToCart, removeFromCart} = useShopCart();
  const {id,productName , price , productImage} = props.data;
  const cartItemAmount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} alt={productName} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{productName}</h3>
        <p className="product-price">${price}</p>
        <button className='addToCartBttn' onClick={()=> addToCart(id)}>Add To Cart {cartItemAmount >0 && <>({cartItemAmount})</>}</button>
      </div>
    </div>
  )
}

export default Product
