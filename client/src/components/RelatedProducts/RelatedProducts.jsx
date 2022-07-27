import React, { useState, useEffect } from 'react';
import useFetch from '../useFetch.js';
import './related.css';
import SlideContainer from './SlideContainer.jsx';
import YourOutfit from './YourOutfit.jsx';

var RelatedProducts = ({ productId, changeProduct , outfit}) => {

  var [ data, pending, error ] = useFetch('related/' + productId);
  var outfit = [...new Set(outfit)]


  return (
    <div id='related'>
      <div className='rel-header'>
        <h2>RELATED PRODUCTS</h2>
      </div>
      {error && <div>{error}</div>}
      {pending && <div>Loading...</div>}
      {data && <SlideContainer data={data} changeProduct={changeProduct}/>}
      { outfit.length >= 1 ? <YourOutfit outfit={outfit} changeProduct={changeProduct}/> : null }
    </div>
  );
};

export default RelatedProducts;