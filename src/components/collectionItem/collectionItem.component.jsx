import React from 'react';
import './collectionItem.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div
      className='collection-item'
      style={{
        background: `url(${imageUrl})`
      }}
    >
      <div className='image'>
        <div className='collection-footer'>
          <span className='name'> {name}</span>
          <span className='price'> {price}</span>
        </div>
      </div>
    </div>
  );
};
export default CollectionItem;
