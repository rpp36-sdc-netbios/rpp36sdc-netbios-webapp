import React from 'react';

const ButtonEntry = (props) => {
  return (
    <button className='style-button'  onClick={() => props.setStyle(props.style)}>{props.name}</button>
  )
 }

 export default ButtonEntry;