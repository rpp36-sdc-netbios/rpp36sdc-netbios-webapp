import React from 'react';
import { useState, useEffect } from 'react';

const AddToCart = (props) => {

  var optionentries1;
  var optionentries2;
  var [ selectedSize, setSelectSize ] = useState(null);

  var handleChange = (e) => {
      var selected = e.target.value;
      setSelectSize({selectedSize: selected});
    }

  var reset = () => {
    setSelectSize({selectedSize: null});
  }

  var range = (start, end) =>  {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }

  if (props.item.skus) {
    var skus = Object.keys(props.item.skus).map((key) => props.item.skus[key])
    var skus = skus.filter(item => item.quantity > 0);
    { skus.length >= 1 ? optionentries1 =skus.map(item =>
      <option> {item.size}  </option>) : optionentries1 =<option>OUT OF STOCK</option> }

    if (selectedSize && selectedSize.selectedSize) {
      const target =  skus.find(o => o.size === selectedSize.selectedSize);
      const quantity = target.quantity;
      if (quantity <= 15) {
        var options = range(1, quantity);
      } else if (quantity > 15) {
        options = range(1, 15);
      }
      optionentries2 = options.map(option =>
        <option> {option} </option>)
    }
  }

  return (
    <div>
       <div className="custom-select">
          <select id='select-size' default='SELECT SIZE' onChange={handleChange}>
          <option selected>SELECT SIZE </option>
          {optionentries1}
          </select>
          <select id='select-quantity' default='1'>
          {optionentries2}
          </select>
      </div>
      <div className='add-button'>
        <button id='add-to-bag' onClick={reset}>Add to Bag + </button>
        <button id='favourite' onClick={props.saveOutfit}>☆</button>
      </div>
    </div>

  )
}

export default AddToCart;