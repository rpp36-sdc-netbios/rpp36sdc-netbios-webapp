import React, { useEffect } from 'react';

var AddQuestion = ({ showAddQuestion, productName }) => {

  useEffect(() => {
  }, [])

  return (
    <div className='qa-add-question'>
      <div className='qa-add-question-header'>
        <div>
          <div className='qa-add-question-title'>Ask Your Question</div>
          <div className='qa-add-question-subtitle'>About the {productName}</div>
        </div>
        <div className='pointer qa-add-question-x' onClick={() => showAddQuestion(false)}>X</div>
      </div>
      <form className='qa-add-question-form'>
        <label htmlFor='qa-user-question'>Your Question</label>
        <input id='qa-user-question' placeholder='ENTER YOUR QUESTION HERE' style={{width: '80%'}} />
        <label htmlFor='qa-user-nickname'>What Is Your Nickname</label>
        <input id='qa-user-nickname' placeholder='ENTER YOUR NICKNAME HERE' style={{width: '50%'}}/>
        <label htmlFor='qa-user-email'>Your Email</label>
        <input id='qa-user-email' placeholder='ENTER YOUR EMAIL HERE' style={{width: '50%'}}/>
        <input id='qa-user-submit' type='submit' />
      </form>
    </div>
  );
};

export default AddQuestion;