import React from 'react';
import { useState, useEffect } from 'react';
import './related.css';
import ProductCard from './ProductCard.jsx';

var RelatedProducts = ({ productId, changeProduct }) => {

  var [ related, setRelated ] = useState([]);

  useEffect(() => {
    fetch('related' + productId)
    .then(res => {
      return res.json();
    }).then(data => {
      setRelated([...new Set(data)]);
    }).catch(err => {
      console.log(err);
    })
  }, [productId]);

  var slide = (e) => {
    var [ container, direction ] = e.target.id.split('-');
    if (container === 'rel') {
      container = document.getElementById('rel-container');
      direction === 'left' ? container.scrollLeft -= 80 : container.scrollLeft += 80;
    }
  }

  return (
    <div id='related'>
      <div className='rel-header'>
        <h3>RELATED PRODUCTS</h3>
      </div>

      <div className='rel'>
        <div className='rel-btn rel-btn-left'>
          <input id='rel-left' type='button' value='<' onClick={slide} />
        </div>
        <div id='rel-container' className='rel-slide-container' >
          {related.map(item => <ProductCard key={item} id={item} changeProduct={changeProduct}/>)}
        </div>
        <div className='rel-btn rel-btn-right'>
          <input id='rel-right' type='button' value='>' onClick={slide} />
        </div>
      </div>

      <h3>YOUR OUTFIT</h3>
      <div className='rel-outfit'>

      </div>

    </div>
  );
};

export default RelatedProducts;