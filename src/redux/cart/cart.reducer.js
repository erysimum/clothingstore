import { ToggleCartDropDown } from './cart.types';
import { AddItem } from './cart.types';
import { itemsAddedToCart } from './cart.utils';
const INITIALSTATE = {
  cartHidden: true,
  cartItems: []
};

const cartDropDownReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case ToggleCartDropDown:
      return {
        ...state,
        cartHidden: !state.cartHidden
      };

    case AddItem:
      return {
        ...state,
        cartItems: itemsAddedToCart(state.cartItems, action.payload)
      };

    default:
      return state;
  }
};
export default cartDropDownReducer;
