import React, { useState, useEffect } from 'react';

var AddQuestion = ({ showAddAnswer, questionId, productName, question }) => {

  var [answer, setAnswer] = useState('');
  var [nickname, setNickname] = useState('');
  var [email, setEmail] = useState('');
  var [message, setMessage] = useState(null);

  var handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.includes('@') || !nickname || !question) {
      setMessage('Invalid information');
      return;
    }
    var res = await fetch('answer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        question_id: questionId,
        body: answer,
        name: nickname,
        email
      })
    });
    if (res.ok) {
      setMessage('Answer added');
    }
  };

  var handleInputChange = (e, setter) => {
    setMessage(null);
    setter(e.target.value);
  };

  return (
    <div className='qa-add-question'>
      <div className='qa-add-question-header'>
        <div>
          <div className='qa-add-question-title'>Submit your Answer</div>
          <div className='qa-add-question-subtitle'>{productName}: {question}</div>
        </div>
        <div className='pointer qa-add-question-x' onClick={() => showAddAnswer(false)}>X</div>
      </div>
      <form id='qa-add-question-form' className='qa-add-question-form' onSubmit={handleSubmit}>
        <label htmlFor='qa-user-question'>Your Answer</label>
        <input id='qa-user-question' onChange={(e) => handleInputChange(e, setAnswer)} placeholder='ENTER YOUR QUESTION HERE' style={{width: '80%'}} required />
        <label htmlFor='qa-user-nickname'>What Is Your Nickname</label>
        <input id='qa-user-nickname' onChange={(e) => handleInputChange(e, setNickname)} placeholder='ENTER YOUR NICKNAME HERE' style={{width: '50%'}} required />
        <label htmlFor='qa-user-email'>Your Email</label>
        <input id='qa-user-email' onChange={(e) => handleInputChange(e, setEmail)} placeholder='ENTER YOUR EMAIL HERE' style={{width: '50%'}} required />
        <input data-testid='qa-addQuestion-submit' id='qa-user-submit' type='submit' />
        {message && <div>{message}</div>}
      </form>
    </div>
  );
};

export default AddQuestion;