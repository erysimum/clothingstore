import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/clothing_logo.svg';
import './header.styles.scss';
import { auth } from '../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { connect } from 'react-redux';
import { toggleCartDropDown } from '../../redux/cart/cart.action';
const Header = ({ currentUser, cart }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>

    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div
          className='option'
          onClick={(e) => {
            auth.signOut();
          }}
        >
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>

    {cart ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  cart: state.cart.cartHidden
});

// const mapDispatchtoProps = (dispatch) => ({
//   toggleCartDropDown: () => dispatch(toggleCartDropDown)
// });

// const mapStateToProps = ({ user: { userReducer }, cart: { CartDropDownReducer } }) => ({
//   currentUser: userReducer,
//   cart: CartDropDownReducer
// });

export default connect(mapStateToProps, { toggleCartDropDown })(Header);
