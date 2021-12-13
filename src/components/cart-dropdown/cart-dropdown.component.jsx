import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import CartItemSelected from '../cart-items-selected/cart-item-selected.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    {cartItems.map((ci) => (
      <CartItemSelected key={ci.id} item={ci} />
    ))}
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export default connect(mapStateToProps)(CartDropdown);
