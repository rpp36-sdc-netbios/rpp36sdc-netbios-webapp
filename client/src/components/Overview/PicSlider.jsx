import React from 'react';
import { useEffect, useState } from 'react';

var PicSlider = ({ photos, setSelectedImage, selectedImage }) => {

  var style = {
    border: '1px solid white'
  };

  return (
    <div className='picslider'>
      {photos && photos.map(photo => {
        return (
          <div key={photo.thumbnail_url} className='sliderphoto' style={selectedImage === photo.url ? style : {}}>
            <img onClick={() => setSelectedImage(photo.url)} src={photo.thumbnail_url} />
          </div>
        );
        })}

    </div>
  );
};

export default PicSlider;