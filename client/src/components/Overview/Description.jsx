import React from 'react';
import { useState, useEffect } from 'react';

const Description = (props) => {


  var featuresEntries;
  var features = props.product.features;
  if (features) {
    featuresEntries = features.map(feature =>
      <li>{feature.value}</li>
    )
    }

  return (
    <div className='description'>
      <div id='description' style={{float:'left', width: '350px', marginLeft:'40px', marginTop:'20px'}}>
        <h2>{props.product.slogan}</h2>
        <p>{props.product.description}</p>
      </div>
      <div className="vl"></div>
      <div id='features' style={{width: '30%', float:'right', marginLeft: '20px', minWidth: '200px', marginTop:'20px'}}>
        <ul>
        {featuresEntries}
        </ul>
      </div>
    </div>
  )
  }

export default Description;