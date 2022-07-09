import React from 'react';



const Gallery = (props) => {
  var mainPic =  props.styles.styles.results[0].photos[0].url
  return (
    <div className="gallery">
      <img id='main-pic' src={mainPic} alt='cannot display'/>
    </div>
  )
}


export default Gallery;
