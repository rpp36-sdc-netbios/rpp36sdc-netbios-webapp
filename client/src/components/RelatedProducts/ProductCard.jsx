import React, { useState, useEffect } from 'react';
import useFetch from '../useFetch.js'
import './related.css';

var ProductCard = ({ id, changeProduct }) => {

  var [ product, productPending, productError ] = useFetch('products/' + id);
  var [ styles, stylesPending, stylesError ] = useFetch('styles' + id);

  return (
    <div className='rel-prod-card' onClick={() => changeProduct(id)}>
      <div className='rel-photo'>
        {stylesPending && <div>Loading...</div>}
        {stylesError && <div>{stylesError.message}</div>}
        {styles && <img src={styles.results[0].photos[0].thumbnail_url} alt=''/>}
      </div>
      <div className='rel-card-text'>
        {productPending && <div>Loading...</div>}
        {productError && <div>{productError.message}</div>}
        <div className='rel-cat'>
          {product && <p>{product.category}</p>}
        </div>
        <div className='rel-desc'>
          {product && <p className='rel-desc'>{product.name}</p>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;