import React from 'react';
import './cart-item-selected.styles.scss';

const CartItemSelected = ({ item: { name, price, imageUrl, quantity } }) => (
  <div className='cart-item'>
    <img src={imageUrl} alt='item' />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default CartItemSelected;
