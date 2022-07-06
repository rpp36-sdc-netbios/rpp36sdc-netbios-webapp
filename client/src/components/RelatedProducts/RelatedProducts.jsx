import React from 'react';
import { useState, useEffect } from 'react';
import './related.css';
import ProductCard from './ProductCard.jsx';

var RelatedProducts = ({ productId }) => {

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
  }, []);

  return (
    <div id='related'>
      <h3>RELATED PRODUCTS</h3>
      <br />
      {related.map(item => <ProductCard key={item} id={item} />)}
    </div>
  );
};

export default RelatedProducts;