import React, { useEffect } from 'react';

var AddQuestion = () => {
  
  useEffect(() => {
    console.log('Add Question');
  }, [])

  return (
    <div className='qa-add-question'>
      <div>Add a quesiton</div>
    </div>
  );
};

export default AddQuestion;