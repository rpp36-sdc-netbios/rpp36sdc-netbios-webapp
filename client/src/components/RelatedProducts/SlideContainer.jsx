import React from 'react';
import ProductCard from './ProductCard.jsx';

var SlideContainer = ({ data, changeProduct }) => {

  var slide = (e) => {
    var [ container, direction ] = e.target.id.split('-');
    if (container === 'rel') {
      container = document.getElementById('rel-container');
      //direction === 'left' ? container.scrollLeft -= 80 : container.scrollLeft += 80;
      container.scroll({
        left: direction=== 'left' ? -5 : 5,
        behavior: 'smooth'
      });
    }
  }

  return (
    <div className='rel'>
    <div className='rel-btn rel-btn-left'>
      <input id='rel-left' type='button' value='<' onClick={slide} />
    </div>
      <div id='rel-container' className='rel-slide-container' >
        {data && data.map(item => <ProductCard key={item} id={item} changeProduct={changeProduct}/>)}
      </div>
    <div className='rel-btn rel-btn-right'>
      <input id='rel-right' type='button' value='>' onClick={slide} />
    </div>
  </div>

  );
};

export default SlideContainer;