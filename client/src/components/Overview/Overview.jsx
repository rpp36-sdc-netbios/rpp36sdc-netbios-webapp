import React from 'react';
import Gallery from './Gallery.jsx';
import StarRating from './StarRating.jsx';

class Overview extends React.Component {
  render () {
    return (
      <div>
        <div style={{width: '70%', float:'left'}}>
          <Gallery />
        </div>

        <div style={{width: '30%', float:'right'} }>
          placeholder for product details, style, add to basket
          <StarRating />
        </div>
      </div>
    )
  }
}

export default Overview;