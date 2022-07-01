import React from 'react';

const AddToCart = (props) => {
  return (
    <div>
       <div class="custom-select">
          <select id='select-size'>
          <option>Select Size</option>
          </select>
          <select id='select-quantity'>
          <option >1</option>
          </select>
      </div>
      <div class='add-button'>
        <button id='add-to-bag'>Add to Bag + </button>
        <button id='favourite'>☆</button>
      </div>

    </div>

  )
}

export default AddToCart;