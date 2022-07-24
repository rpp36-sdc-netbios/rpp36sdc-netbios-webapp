import React from 'react';

const AddToCart = (props) => {
  var optionentries1;
  var optionentries2;
  if (props.item.skus) {
    var skus = Object.keys(props.item.skus).map((key) => props.item.skus[key])
    optionentries1 =skus.map(item =>
      <option> {item.size}  </option>)
    optionentries2 = skus.map(item =>
      <option> {item.quantity} </option>)
  } else {
    optionentries1 = <option> SELECT SIZE </option>
    optionentries2 = <option> 1 </option>
  }


  return (
    <div>
       <div className="custom-select">
          <select id='select-size'>
          <option> SELECT SIZE </option>
          {optionentries1}
          </select>
          <select id='select-quantity'>
          <option> 1 </option>
          {optionentries2}
          </select>
      </div>
      <div className='add-button'>
        <button id='add-to-bag'>Add to Bag + </button>
        <button id='favourite'>☆</button>
      </div>

    </div>

  )
}

export default AddToCart;