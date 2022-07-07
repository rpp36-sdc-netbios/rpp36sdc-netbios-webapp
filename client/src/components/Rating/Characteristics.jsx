import React from 'react';
import './rating.css';


const Characteristics = (props)=> {


  return(
    <div>
      <p>{Object.keys(props.item)}</p>
      <div>{Object.keys(props.item).value}</div>
    </div>
  )



}

export default Characteristics;