import React from 'react';
import { useState, useEffect } from 'react';
import './related.css';

var ProductCard = ({ id }) => {

  var [ product, setProduct ] = useState({ name: ''})
  var [ photo, setPhoto ] = useState('')


  useEffect(() => {
    fetch('styles' + id)
    .then(res => {
      return res.json();
    }).then(styles => {
      setPhoto(styles.results[0].photos[0].thumbnail_url);
    }).catch(err => {
      console.log(err);
    });
  }, []);

  useEffect(() => {
    fetch('products' + id)
    .then(res => {
      return res.json();
    }).then(product => {
      setProduct(product);
    }).catch(err => {
      console.log(err);
    });
  }, [photo])

  return (
    <div className='rel-prod-card'>
      <div className='rel-photo'>
        <img src={photo} alt=''/>
      </div>
      <div className='res-description'>
        <p>{product.name}</p>
      </div>
    </div>
  );
};

export default ProductCard;