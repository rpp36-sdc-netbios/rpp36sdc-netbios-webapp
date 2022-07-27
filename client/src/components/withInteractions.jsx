import React from 'react';

var withInteractions = (WrappedComponent, componentName) => {
    
  var handleInteractions = async (e) => {
    console.log(e.target.tagName, componentName, Date.now());
    var res = await fetch('interactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        element: e.target.tagName,
        widget: componentName,
        time: Date.now().toString(),
      })
    });
    console.log(res.status);
  }
  
  return props => {
    return (
      <div onClick={handleInteractions}>
        <WrappedComponent {...props} />
      </div>
    );
  }
};

export default withInteractions;