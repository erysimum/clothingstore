// export const itemsAddedToCart = (lookupCart, itemsToBeAdded) => {
//   const itemInCartOrNot = lookupCart.find((item) => item.id === itemsToBeAdded.id);

//   if (itemInCartOrNot) {
//     return lookupCart.map((cartItem) => (cartItem.id === itemsToBeAdded.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
//   }
//   return [...lookupCart, { ...itemsToBeAdded, quantity: 1 }];
// };

export const itemsAddedToCart = (lookupCart, itemSelected) => {
  const itemThereOrNot = lookupCart.find((item) => item.id === itemSelected.id);
  if (itemThereOrNot) {
    return lookupCart.map((item) => {
      return item.id === itemSelected.id ? { ...item, quantity: item.quantity + 1 } : item;
    });
    return null;
  }
  return [...lookupCart, { ...itemSelected, quantity: 1 }];
};
