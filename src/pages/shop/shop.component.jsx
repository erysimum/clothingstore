import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collection: SHOP_DATA
    };
  }

  render() {
    const { collection } = this.state;
    return (
      <div className='collection'>
        {collection.map(({ id, ...otherShopProps }) => (
          <CollectionPreview key={id} {...otherShopProps} />
        ))}
      </div>
    );
  }
}
export default Shop;
