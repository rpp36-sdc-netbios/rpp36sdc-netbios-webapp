import React from 'react';
import ProductCard from './ProductCard.jsx';

var YourOutfit = ({ outfit, changeProduct }) => {

  var slide = (e) => {
    var [ container, direction ] = e.target.id.split('-');
    if (container === 'rel') {
      container = document.getElementById('rel-outfit');
      direction === 'left' ? container.scrollLeft -= 80 : container.scrollLeft += 80;
    }
  }

  return (
    <div className='rel-outfit'>
         <div className='rel-header'>
         <h2>YOUR OUTFIT</h2>
         </div>
    <div className='rel'>
    <div className='rel-btn rel-btn-left'>
      <input id='rel-left' type='button' value='<' onClick={slide} />
    </div>
      <div id='rel-container' className='rel-slide-container' >
        {outfit && outfit.map(item => <ProductCard key={item} id={item} changeProduct={changeProduct}/>)}
      </div>
    { outfit.length > 4 ? <div className='rel-btn rel-btn-right'>
      <input id='rel-right' type='button' value='>' onClick={slide} />
    </div> : null }
  </div>
  </div>
  );
};

export default YourOutfit;