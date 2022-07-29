import React from 'react';
import ButtonEntry from './ButtonEntry.jsx'

const StyleSelector = (props) => {
  var buttonentries;
  if (props.styles) {
    buttonentries = props.styles.results.map(result =>
      <ButtonEntry key={result.style_id} name={result.name} setStyle={props.setStyle} style={result}/>)

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