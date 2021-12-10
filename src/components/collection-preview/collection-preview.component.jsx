import React from 'react';
import CollectionItem from '../collectionItem/collectionItem.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((itm, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} id={id} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
