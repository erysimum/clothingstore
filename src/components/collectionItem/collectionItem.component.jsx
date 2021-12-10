import React from 'react';
import './collectionItem.styles.scss';
import CustomButtom from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';

const CollectionItem = ({ id, name, price, imageUrl, addItem }) => {
  return (
    <div
      className='collection-item'
      style={{
        background: `url(${imageUrl})`
      }}
    >
      <div className='image' />
      <div className='collection-footer'>
        <span className='name'> {name}</span>
        <span className='price'> {price}</span>
      </div>
      <CustomButtom inverted onClick={() => addItem({ id, name, price, imageUrl })}>
        Add to cart
      </CustomButtom>
    </div>
  );
};
export default connect(null, { addItem })(CollectionItem);
