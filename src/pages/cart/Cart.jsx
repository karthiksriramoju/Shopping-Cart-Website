import React from 'react';
import "./cart.css";
import CartItem from './CartItem';
import { PRODUCTS } from '../../products';
import { useShopCart } from '../../useShopCart';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems } = useShopCart();
  const navigate = useNavigate();

  const hasItemsInCart = Object.values(cartItems).some(quantity => quantity > 0);

  const handleGoToShopping = () => {
    navigate("/");
  };

  return (
    <div className='cart'>
      <h1>Your Cart Items</h1>
      {hasItemsInCart ? (
        <>
          <div className='cartItems'>
            {PRODUCTS.map((product) => {
              const quantity = cartItems[product.id];
              if (quantity > 0) {
                return <CartItem data={product} key={product.id} quantity={quantity} />;
              }
              return null;
            })}
          </div>
          <div className='checkout'>
            <button onClick={() => navigate("/")}>Continue Shopping</button>
            <button>Checkout</button>
          </div>
        </>
      ) : (
        <div className='checkout'>
          <p className='empty-cart'>Cart is empty</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
