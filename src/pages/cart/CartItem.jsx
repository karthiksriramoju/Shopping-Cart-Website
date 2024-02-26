import React from 'react'
import { useShopCart } from '../../useShopCart';

const CartItem = (props) => {
  const {id,productName , price , productImage} = props.data;
  const { cartItems, addToCart, removeFromCart,updateCartItemCount} = useShopCart();
  return (
    <div className='cartItem'>
      <img src={productImage} alt={productName} className="product-image" />
      
      <div className="product-details">
        <h3 className="product-name">{productName}</h3>
        <p className="product-price">${price}</p>
        <button onClick={() =>removeFromCart(id)}>-</button>
        <input  size={(10,6)} value={cartItems[id]} onChange={(e)=> updateCartItemCount(Number(e.target.value),id)}/>
        <button onClick={() =>addToCart(id)} >+</button>
      </div>
    </div>
  )
}

export default CartItem
