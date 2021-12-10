import { ToggleCartDropDown } from './cart.types';
import { AddItem } from './cart.types';

export const toggleCartDropDown = () => ({
  type: ToggleCartDropDown
});

export const addItem = (item) => ({
  type: AddItem,
  payload: item
});
