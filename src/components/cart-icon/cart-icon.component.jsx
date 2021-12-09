import React from 'react';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartDropDown } from '../../redux/cart/cart.action';

// const CartIcon = ({ toggleCartDropDown }) => (
//   <div className='cart-icon' onClick={toggleCartDropDown}>
//     <ShoppingBag className='shopping-icon' />
//     <div className='item-count'>0</div>
//   </div>
// );

// const mapDispatchToProps = (dispatch) => ({
//   toggleCartDropDown: () => dispatch(toggleCartDropDown())
// });
// export default connect(null, mapDispatchToProps)(CartIcon);

//####################################################

const CartIcon = ({ toggleCartDropDown }) => (
  <div className='cart-icon' onClick={() => toggleCartDropDown()}>
    <ShoppingBag className='shopping-icon' />
    <div className='item-count'>0</div>
  </div>
);

export default connect(null, { toggleCartDropDown })(CartIcon);
