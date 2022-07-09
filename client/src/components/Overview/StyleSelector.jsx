import React from 'react';
import ButtonEntry from './ButtonEntry.jsx'

const StyleSelector = (props) => {
  console.log(props.styles.styles.results)

  var buttonentries;

  buttonentries = props.styles.styles.results.map(result =>
    <ButtonEntry key={result.style_id} name={result.name} id={result.style_id} onSelect={props.onSelect}/>)

  return (
    <div>
      <div className='style-select-word'>
          <p> <span id='bold'>STYLE ></span><span>  SELETED STYLE</span></p>
      </div>

      <div className='style-select'>
      {buttonentries}
      </div>
    </div>
  )
}

export default StyleSelector;