import React from 'react';
import ButtonEntry from './ButtonEntry.jsx'

const StyleSelector = (props) => {
  var buttonentries;
  if (props.styles.styles) {
    buttonentries = props.styles.styles.results.map(result =>
      <ButtonEntry key={result.style_id} name={result.name} id={result.style_id} onSelect={props.onSelect}/>)

  } else {
    buttonentries = ''
  }

  return (
    <div>
      <div className='style-select'>
      {buttonentries}
      </div>
    </div>
  )
}

export default StyleSelector;