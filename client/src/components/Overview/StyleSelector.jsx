import React from 'react';

const StyleSelector = (props) => {
  return (
    <div>
      <div className='style-select-word'>
          <p> <span id='bold'>STYLE ></span><span>  SELETED STYLE</span></p>
      </div>

      <div className='style-select'>
          <button id='style-button'></button>
          <button id='style-button'></button>
          <button id='style-button'></button>
          <button id='style-button'></button>
          <button id='style-button'></button>
          <button id='style-button'></button>
          <button id='style-button'></button>
          <button id='style-button'></button>
      </div>
    </div>
  )
}

export default StyleSelector;