import ToggleCartDropDown from './cart.types';

const INITIALSTATE = {
  cartHidden: true
};

const cartDropDownReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case ToggleCartDropDown:
      return {
        ...state,
        cartHidden: !state.cartHidden
      };
    default:
      return state;
  }
};
export default cartDropDownReducer;
