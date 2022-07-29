import React, { useState, useEffect } from 'react';
import useFetch from '../useFetch.js';
import './related.css';
import SlideContainer from './SlideContainer.jsx';
import YourOutfit from './YourOutfit.jsx';
import withInteractions from '../withInteractions.jsx';

var RelatedProducts = ({ productId, changeProduct , outfit}) => {

  var [products, setProducts] = useState([]);

  var [ data, pending, error ] = useFetch('related/' + productId);
  var outfit = [...new Set(outfit)]

  useEffect(() => {

    if (data) {
      setProducts([...new Set(data)]);
    }
  }, [data]);

  return (
    <div id='related'>
      <div className='rel-header'>
        <h2>RELATED PRODUCTS</h2>
      </div>
      {error && <div>{error}</div>}
      {pending && <div>Loading...</div>}
      <SlideContainer data={products} changeProduct={changeProduct}/>
      { outfit.length >= 1 ? <YourOutfit outfit={outfit} changeProduct={changeProduct}/> : null }
    </div>
  );
};

export default withInteractions(RelatedProducts, 'Related Products');