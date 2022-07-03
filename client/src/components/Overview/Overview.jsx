import React from 'react';
import Gallery from './Gallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx'

class Overview extends React.Component {
  render () {
    return (
      <div>
        <div style={{width: '70%', float:'left'}}>
          <Gallery />
        </div>

        <div style={{width: '30%', float:'right'} }>
          <ProductInfo />
          <StyleSelector />
          <AddToCart />
        </div>
      </div>
    )
  }
}

export default Overview;