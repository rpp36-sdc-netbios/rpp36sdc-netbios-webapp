import React from 'react';

var PhotoView = ({photo, setPhoto}) => {
  var style = {
    backgroundImage: `url(${photo})`,
    backgroundSize: 'cover',
  }
  return (
    <div data-testid='qa-photoview' className='qa-photoview' style={style}>
        <span className='pointer qa-add-question-x qa-photoview-x' onClick={() => setPhoto('')}>X</span>
    </div>
  );
}

export default PhotoView;