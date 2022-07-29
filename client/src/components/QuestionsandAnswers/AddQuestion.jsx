import React, { useState, useEffect } from 'react';

var AddQuestion = ({ showAddQuestion, productId, productName }) => {

  var [question, setQuestion] = useState('');
  var [nickname, setNickname] = useState('');
  var [email, setEmail] = useState('');
  var [message, setMessage] = useState(null);

  var handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.includes('@') || !nickname || !question) {
      setMessage('Invalid information');
      return;
    }
    var res = await fetch('question', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        product_id: productId,
        body: question,
        name: nickname,
        email
      })
    });
    if (res.ok) {
      setMessage('Question added');
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
          <div className='qa-add-question-title'>Ask Your Question</div>
          <div className='qa-add-question-subtitle'>About the {productName}</div>
        </div>
        <div className='pointer qa-add-question-x' onClick={() => showAddQuestion(false)}>X</div>
      </div>
      <form id='qa-add-question-form' className='qa-add-question-form' onSubmit={handleSubmit}>
        <label htmlFor='qa-user-question'>Your Question</label>
        <input id='qa-user-question' onChange={(e) => handleInputChange(e, setQuestion)} placeholder='ENTER YOUR QUESTION HERE' style={{width: '80%'}} required />
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