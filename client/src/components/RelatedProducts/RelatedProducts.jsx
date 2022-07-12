import React, { useState, useEffect } from 'react';
import useFetch from '../useFetch.js';
import './related.css';
import SlideContainer from './SlideContainer.jsx';


var RelatedProducts = ({ productId, changeProduct }) => {

  var [ data, pending, error ] = useFetch('related/' + productId);

  return (
    <div id='related'>
      <div className='rel-header'>
        <h3>RELATED PRODUCTS</h3>
      </div>
      {error && <div>{error}</div>}
      {pending && <div>Loading...</div>}
      {data && <SlideContainer data={data} changeProduct={changeProduct}/>}
      <h3>YOUR OUTFIT</h3>
      <div className='rel-outfit'>

      </div>

    </div>
  );
};

export default RelatedProducts;