import React from 'react';
import { useState, useEffect } from 'react';
import './related.css';

var ProductCard = ({ id, changeProduct }) => {

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
    <div className='rel-prod-card' onClick={() => changeProduct(id)}>
      <div className='rel-photo'>
        <img src={photo} alt=''/>
      </div>
      <div className='rel-card-text'>
        <div className='rel-cat'>
          <p>{product.category}</p>
        </div>
        <div className='rel-desc'>
          <p className='rel-desc'>{product.name}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;